import React, {useState} from 'react';
import CodeTab from "../components/codeTab";
import NameTab from "../components/nameTab";
import InfoCont from "../components/Content/infoCont";
import ChatCont from "../components/Content/chatCont";
import MapCont from "../components/Content/mapCont";
import {PlacemarkGeometry} from "react-yandex-maps";
import EntranceModal from "../components/entranceModal";

export const LobbyPage: React.FC = () => {


    const [map, setMap] = useState(false);
    const [placemark, setPlacemark] = useState<PlacemarkGeometry|undefined>(undefined);
    const [address, setAddress] = useState({
        address: 'Улица пушкина дом колотушкина',
        coordinates: [55.75, 37.77]
    })
    const [members, setMembers] = useState([
        {username: 'kektor', readiness: 'full', location: [55.75, 37.57]},
        {username: 'chil', readiness: 'late', location: [55.65, 37.47]},
        {username: 'chyl', readiness: 'not', location: [55.70, 37.17]},
        {username: 'cheel', readiness: 'cancel', location: [56.75, 36.57]},
        {username: 'chol', readiness: 'here', location: [55.25, 37.37]},
        {username: 'chul', readiness: 'way', location: [55.71, 37.67]},
        {username: 'chal', readiness: 'way', location: [55.45, 36.57]}
    ])

    const toggle: (placemark?: PlacemarkGeometry|undefined) => void = (placemark) => {
        if (placemark !== undefined) {
            setPlacemark(placemark);
        } else {
           setMap(!map);
        }
        console.log('toggle', placemark);
    }


    // navigator.geolocation.getCurrentPosition(
    //     function(position) {
    //         alert('Последний раз вас засекали здесь: ' +
    //             position.coords.latitude + ", " + position.coords.longitude);
    //     }
    // );
    return <>
        <EntranceModal members={members} />
        <div className='lobby'>
            <div className='top-bar row'>
                <div className='col-3'>
                    <CodeTab/>
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
