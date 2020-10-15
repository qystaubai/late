import React, {useState} from 'react';
import CodeTab from "../components/codeTab";
import NameTab from "../components/nameTab";
import InfoCont from "../components/Content/infoCont";
import ChatCont from "../components/Content/chatCont";
import MapCont from "../components/Content/mapCont";

interface Props {
    location: {
        state: {
            username: string,
            fromHost: boolean
        }
    }
}

export const LobbyPage: React.FC<Props> = (props: Props) => {


    const [cont, setCont] = useState('info')

    const toggle = (button: string) => {
        setCont(button);
    }


    // navigator.geolocation.getCurrentPosition(
    //     function(position) {
    //         alert('Последний раз вас засекали здесь: ' +
    //             position.coords.latitude + ", " + position.coords.longitude);
    //     }
    // );
    return <>
        <div className='lobby'>
            <div className='top-bar row'>
                <div className='col-3'>
                    <CodeTab/>
                </div>
                <div className='col-9'>
                    <NameTab/>
                </div>
            </div>
            <div className='main-content row'>
                <div className='col-4 main-content__left'>
                    <InfoCont />
                </div>
                <div className='col-8 main-content__right'>
                    <MapCont />
                    <ChatCont />
                </div>
            </div>

        </div>
    </>
}