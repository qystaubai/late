import React, {useState} from 'react';
import ContentTab from "../components/contentTab";
import CodeTab from "../components/codeTab";
import NameTab from "../components/nameTab";
import ButtonTab from "../components/buttonTab";

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
                <div className='col-2'>
                    <CodeTab/>
                </div>
                <div className='col-10'>
                    <NameTab/>
                </div>
            </div>
            <div className='main-content row'>
                <div className='col-2 button-tab'>
                    <ButtonTab toggle={toggle}/>
                </div>
                <div className='col-10 test'>
                    <ContentTab content={cont}/>
                </div>
            </div>
        </div>
    </>
}