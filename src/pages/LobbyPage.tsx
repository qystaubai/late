import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {PlacemarkGeometry} from "react-yandex-maps";
import CodeTab from "../components/codeTab";
import NameTab from "../components/nameTab";
import InfoCont from "../components/Content/infoCont";
import ChatCont from "../components/Content/chatCont";
import MapCont from "../components/Content/mapCont";
import EntranceModal from "../components/entranceModal";
import {useApi} from "../hooks/api.hook";

export interface LobbyData {
    data: {
        eventData: {
            eventname: string,
            address: string,
            date: string,
            members: Array<{
                id: number,
                username: string,
                readiness: string,
                location: PlacemarkGeometry|undefined
            }>
        }
    }
}

export const LobbyPage: React.FC = () => {

    const api = useApi();
    const location = useLocation().pathname;

    const [map, setMap] = useState(false);
    const [placemark, setPlacemark] = useState<PlacemarkGeometry|undefined>(undefined);
    const [address, setAddress] = useState({
        address: 'Улица пушкина дом колотушкина',
        coordinates: [55.75, 37.77]
    })
    const [members, setMembers] = useState<LobbyData['data']['eventData']['members']>([
        {id: 0, username: 'a', readiness: '', location: undefined},
    ])

    const toggle: (placemark?: PlacemarkGeometry|undefined) => void = (placemark) => {
        if (placemark !== undefined) {
            setPlacemark(placemark);
        } else {
           setMap(!map);
        }
        console.log('toggle', placemark);
    }

    const checkGeo = () => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert('Последний раз вас засекали здесь: ' +
                    position.coords.latitude + ", " + position.coords.longitude);
            }
        )
    }

    useEffect(() => {
        api.callApi(`/event${location}`)
            .then((r: LobbyData) => {
                console.log(r)
                setMembers(r.data.eventData.members)
            })
        checkGeo();
    }, []);
    return <>
        {!localStorage.getItem('userData')?
        <EntranceModal members={members} id={location}/>: ''
        }
        <div className='lobby'>
            <div className='top-bar row'>
                <div className='col-3'>
                    <CodeTab url={location}/>
                </div>
                <div className='col-9'>
                    <NameTab/>
                </div>
            </div>
            <div className='main-content row'>
                <div className='col-4 main-content__left'>
                    <InfoCont toggle={toggle} address={address} members={members}/>
                </div>
                <div className='col-8 main-content__right'>
                    <MapCont show={map} placemark={placemark} address={address}/>
                    <ChatCont />
                </div>
            </div>

        </div>
    </>
}
