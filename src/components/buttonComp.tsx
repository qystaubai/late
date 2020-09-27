import React from 'react';

interface Props {
    button: string,
    toggle: () => void
}


const ButtonComp: React.FC<Props> = (props: Props) => {
    return (


        <>
            <button onClick={() =>{props.toggle()}}>
                {props.button}
            </button>
        </>
    )
}

export default ButtonComp;