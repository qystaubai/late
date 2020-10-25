import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useApi} from "../hooks/api.hook";

export interface EventData {
    username: string,
    eventname: string,
    address: string,
    date: string
}

export const LoginPage: React.FC = () => {

    let history = useHistory()
    const api = useApi();
    const [eventData, setEventData] = useState<EventData>(
        {
            username: '',
            eventname: '',
            address: '',
            date: ''
        }
    )

    const handleChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventData({...eventData, [e.currentTarget.id]: e.currentTarget.value});
    }

    const host: (() => void) = async () => {
        const id = await api.callApi('/event/create', eventData, 'POST');
        history.push(`lobby/${id.data.id.slice(-5)}`);
    }

    return (
        <>

            <div className="form-container row justify-content-center">
                <form className="col-6">
                    <div className="form-group">
                        <label className="form-group__label" htmlFor="username">Username</label>
                        <input className="form-control" id="username" onChange={handleChange}/>
                        <label className="form-group__label" htmlFor="username">Event Name</label>
                        <input className="form-control" id="eventname" onChange={handleChange}/>
                        <label className="form-group__label" htmlFor="username">Address</label>
                        <input className="form-control" id="address" onChange={handleChange}/>
                        <label className="form-group__label" htmlFor="username">Date</label>
                        <input
                            className="form-control"
                            id="date"
                            type="datetime-local"
                            min={new Date().toISOString().slice(0, -8)}
                            max="2030-12-31T23:59"
                            onChange={handleChange}/>
                    </div>
                        <button
                            className="btn btn-outline clickable col-12"
                            type="button"
                            // disabled={!(eventData.username && eventData.eventname && eventData.address && eventData.date)}
                            onClick={host}>
                            Host
                        </button>
                </form>
            </div>
        </>
    )
}
