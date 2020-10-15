import React, {useState} from 'react';

const NameTab: React.FC = () => {
    const [event, setEvent] = useState('EventName.txt')
    const [date, setDate] = useState('24.05.2020')
    return (
        <>
            <div className="event">
                {event} {date}
            </div>
        </>
    )
}

export default NameTab;