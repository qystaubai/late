import React, {useState} from 'react';
import CodeTab from "../components/codeTab";
import NameTab from "../components/nameTab";
import InfoCont from "../components/Content/infoCont";
import ChatCont from "../components/Content/chatCont";
import MapCont from "../components/Content/mapCont";
import {PlacemarkGeometry} from "react-yandex-maps";

interface Props {
    location: {
        state: {
            username: string,
            fromHost: boolean
        }
    }
}

export const LobbyPage: React.FC<Props> = (props: Props) => {


    const [map, setMap] = useState(false);
    const [placemark, setPlacemark] = useState<PlacemarkGeometry|undefined>(undefined)

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
                    <InfoCont toggle={toggle}/>
                </div>
                <div className='col-8 main-content__right'>
                    <MapCont show={map} placemark={placemark}/>
                    <ChatCont />
                </div>
            </div>

        </div>
    </>
}