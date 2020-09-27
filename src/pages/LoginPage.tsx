import React, {useState} from "react";
import {Link} from "react-router-dom";

export const LoginPage: React.FC = () => {

    const [username, setUsername] = useState<String>('')

    const handleChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const host: (() => void) = async () => {
        console.log('host')
        // await setTimeout(() => {console.log('haha')}, 500)
    }
    return (
        <>
            <div className="row justify-content-center">
                <form className="col-4">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control" id="username" onChange={handleChange}/>
                    </div>
                    <Link to={{
                        pathname: "/lobby",
                        state: {
                            username: username,
                            fromHost: true
                        }
                    }}>
                        <button className="btn btn-primary col-6" onClick={host}>Host</button>
                    </Link>
                    <Link to={{
                        pathname: "/lobby",
                        state: {
                            username: username,
                            fromHost: false
                        }
                    }}>
                        <button className="btn btn-primary col-6">Find</button>
                    </Link>
                </form>
            </div>
        </>
    )
}