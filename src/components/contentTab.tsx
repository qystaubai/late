import React, {useState} from 'react';
import InfoCont from "./Content/infoCont";
import ChatCont from "./Content/chatCont";
import MapCont from "./Content/mapCont";

interface Props {
    content: string
}

const ContentTab: React.FC<Props> = (props: Props) => {

    const toggleContent: () => JSX.Element = () => {
        switch (props.content) {
            case 'Info': {
                return <InfoCont/>;
            }
            case 'Chat': {
                return <ChatCont/>;
            }
            case 'Map': {
                return <MapCont/>;
            }
            default: {
                return <InfoCont/>;
            }
        }
    }

    return (
        <>
            {toggleContent()}
        </>
    )
}

export default ContentTab;