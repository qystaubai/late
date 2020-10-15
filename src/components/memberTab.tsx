import React, {useEffect, useState} from 'react';
interface Member {
    username: string;
    readiness: string;
}

export const MemberTab: React.FC<Member> = (props: Member) => {
    const [memberIcon, setMemberIcon] = useState('not')
    useEffect(() => {
        switch (props.readiness) {
            case 'here': {
                setMemberIcon('done_all');
                break;
            }
            case 'way': {
                setMemberIcon('directions_run');
                break
            }
            case 'not': {
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
    }, [])

    return (
        <>
            <div className="member">
                <div>
                    {props.username}
                </div>
                <span className="material-icons member__icon">{memberIcon}</span>
            </div>
        </>
    )
}
