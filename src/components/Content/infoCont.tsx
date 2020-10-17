import React, {useState} from 'react';
import {MemberTab} from "../memberTab";

const InfoCont: React.FC<{toggle: ()=>void}> = (props: {toggle: ()=>void}) => {

    const [members, setMembers] = useState([
        {username: 'chel', readiness: 'full'},
        {username: 'chil', readiness: 'late'},
        {username: 'chyl', readiness: 'not'},
        {username: 'chil', readiness: 'cancel'},
        {username: 'chol', readiness: 'here'},
        {username: 'chul', readiness: 'way'},
        {username: 'chal', readiness: 'way'}
    ])

    return (
        <>
            <div className="info">
                <div className="address clickable" onClick={props.toggle}>Улица пушкина дом колотушкина</div>
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
                        <li><MemberTab key={m.username} username={m.username} readiness={m.readiness} /></li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default InfoCont;