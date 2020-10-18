import React, {useState} from 'react';
import {MemberTab} from "../memberTab";
import {PlacemarkGeometry} from "react-yandex-maps";

const InfoCont: React.FC<{toggle: (placemark?: PlacemarkGeometry|undefined) => void}> = (props: {toggle: (placemark?: PlacemarkGeometry|undefined) => void}) => {

    const [members, setMembers] = useState([
        {username: 'chel', readiness: 'full', location: [55.75, 37.57]},
        {username: 'chil', readiness: 'late', location: [55.65, 37.47]},
        {username: 'chyl', readiness: 'not', location: [55.70, 37.17]},
        {username: 'chil', readiness: 'cancel', location: [56.75, 36.57]},
        {username: 'chol', readiness: 'here', location: [55.25, 37.37]},
        {username: 'chul', readiness: 'way', location: [55.71, 37.67]},
        {username: 'chal', readiness: 'way', location: [55.45, 36.57]}
    ])

    const [address, setAddress] = useState({
        address: 'Улица пушкина дом колотушкина',
        coordinates: [55.75, 37.77]
    })

    return (
        <>
            <div className="info">
                <div className="address clickable" onClick={() => {
                    props.toggle(address.coordinates)
                }}>{address.address}</div>
                <ul>
                    <li className="info__event">
                        <div>
                            <span className="material-icons info__event__icon">alarm</span>
                            10 hours
                        </div>
                        <div>
                            <span className="material-icons info__event__icon">people</span>
                            {members.length} members
                        </div>
                    </li>
                    {members.map(m =>
                        <li><MemberTab key={m.username} username={m.username} readiness={m.readiness} location={m.location} showOnMap={props.toggle} /></li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default InfoCont;