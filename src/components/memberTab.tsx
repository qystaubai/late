import React, {useEffect, useState} from 'react';
import {PlacemarkGeometry} from "react-yandex-maps";

interface MemberProps {
    member: {
        username: string,
        readiness: string,
        location: PlacemarkGeometry | undefined,
    },
    showOnMap: (placemark?: PlacemarkGeometry|undefined) => void
}

export const MemberTab: React.FC<MemberProps> = (props: MemberProps) => {
    const [memberIcon, setMemberIcon] = useState('not')
    useEffect(() => {
        switch (props.member.readiness) {
            case 'on_place': {
                setMemberIcon('done_all');
                break;
            }
            case 'on_way': {
                setMemberIcon('directions_run');
                break
            }
            case 'not_ready': {
                setMemberIcon('sensor_door');
                break
            }
            case 'cancel': {
                setMemberIcon('cancel');
                break
            }
            default: {
                setMemberIcon('sensor_door');
                break
            }
        }
    }, [props.member.readiness])

    return (
        <>
            <div className="member clickable" onClick={()=>{
                props.showOnMap(props.member.location)
            }}>
                <div>
                    {props.member.username}
                </div>
                <span className="material-icons member__icon">{memberIcon}</span>
            </div>
        </>
    )
}
