import React from 'react';
import {MemberTab} from "../memberTab";
import {PlacemarkGeometry} from "react-yandex-maps";
import {LobbyData} from "../../pages/LobbyPage";

interface InfoProps {
    toggle: (placemark?: PlacemarkGeometry|undefined) => void,
    address: {
        address: string,
        coordinates: Array<number>
    },
    members: LobbyData['data']['eventData']['members']
}

const InfoCont: React.FC<InfoProps> = (props: InfoProps) => {

    console.log(props)
    return (
        <>
            <div className="info">
                <div className="address clickable" onClick={() => {
                    props.toggle(props.address.coordinates)
                }}>{props?.address.address}</div>
                <ul>
                    <li className="info__event" key='info'>
                        <div>
                            <span className="material-icons info__event__icon">alarm</span>
                            10 hours
                        </div>
                        <div>
                            <span className="material-icons info__event__icon">people</span>
                            {props?.members.length} member{(props?.members.length===1)? '': 's'}
                        </div>
                    </li>
                    {props?.members.map(m =>
                        <li key={m.username}><MemberTab member={m} showOnMap={props.toggle} /></li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default InfoCont;
