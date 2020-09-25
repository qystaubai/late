import React from 'react';

interface Props {
    location: {
        state: {
            username: string
        }
    }
}

const LobbyPage: React.FC<Props> = (props: Props) => {
    console.log(props.location.state.username)
    return (
        <>
            lobby
        </>
    )
}

export default LobbyPage;