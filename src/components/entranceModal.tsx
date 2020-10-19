import React, {MouseEvent, useState} from 'react';

interface EntranceModalProps {
    members: Array<{
        username: string,
        readiness: string,
        location: Array<number>,
    }>
}

const EntranceModal: React.FC<EntranceModalProps> = (props: EntranceModalProps) => {

    const [hidden, setHidden] = useState(false);

    const login: (event: MouseEvent<HTMLDivElement>) => void = (e: MouseEvent<HTMLDivElement>) => {
        // console.log(e.currentTarget.textContent)
        localStorage.setItem('userData', JSON.stringify({name: e.currentTarget.textContent, lobby: 'code228'}))
        setHidden(true);
    }

    return (
        <>
            <div className={`entrance-modal ${hidden? 'entrance-modal__hidden': ''}`}>
                <div className='entrance-modal__form'>
                    <label>Wait! Who's there?</label>
                    <div>
                        <span className='material-icons clickable entrance-modal__add'>add</span>
                    </div>
                    {props.members.map(m =>
                        <div className='entrance-modal__member clickable' key={m.username} onClick={login}>
                            {m.username}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default EntranceModal;
