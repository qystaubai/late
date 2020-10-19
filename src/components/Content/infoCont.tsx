import React, {useState} from 'react';
import {MemberTab} from "../memberTab";
import {PlacemarkGeometry} from "react-yandex-maps";

interface InfoProps {
    toggle: (placemark?: PlacemarkGeometry|undefined) => void,
    address: {
        address: string,
        coordinates: Array<number>
    },
    members: Array<{
    username: string,
    readiness: string,
    location: Array<number>,
}>
}

const InfoCont: React.FC<InfoProps> = (props: InfoProps) => {





    return (
        <>
            <div className="info">
                <div className="address clickable" onClick={() => {
                    props.toggle(props.address.coordinates)
                }}>{props.address.address}</div>
                <ul>
                    <li className="info__event" key='info'>
                        <div>
                            <span className="material-icons info__event__icon">alarm</span>
                            10 hours
                        </div>
                        <div>
                            <span className="material-icons info__event__icon">people</span>
                            {props.members.length} members
                        </div>
                    </li>
                    {props.members.map(m =>
                        <li key={m.username}><MemberTab member={m} showOnMap={props.toggle} /></li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default InfoCont;
