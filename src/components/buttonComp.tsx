import React from 'react';

interface Props {
    button: string,
    toggle: () => void
}


const ButtonComp: React.FC<Props> = (props: Props) => {
    return (


        <>
            <button className="btn" onClick={() =>{props.toggle()}}>
                {props.button}
            </button>
        </>
    )
}

export default ButtonComp;