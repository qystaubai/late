import React, {useState} from 'react';
import ButtonComp from "./buttonComp";

const ButtonTab: React.FC<{toggle: (button: string) => void}> = (props: {toggle: (button: string) => void}) => {
    const [buttons, setButtons] = useState(['Info', 'Chat', 'Map'])

    return (
        <>
            {buttons.map((b) => <ButtonComp key={b} button={b} toggle={() =>{props.toggle(b)}}/>)}
        </>
    )
}

export default ButtonTab;