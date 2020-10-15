import React, {useState} from 'react';

const CodeTab: React.FC = () => {
    const [link, setLink] = useState('penis.ru/blm228');
    const [linkSuccess, setLinkSuccess] = useState(false);


    const copy = () => {
        navigator.clipboard.writeText(link)
            .then(r => {
                setLinkSuccess(true);
                setTimeout(() => {setLinkSuccess(false)}, 1000);
                console.log("success!");
            })
            .catch(err => console.log('Something went wrong, you can copy manually'))

    }
    return (
        <>
            <div className={`link code ${linkSuccess? 'green-border': ''}`} onClick={copy}>
                {link}
            </div>
        </>
    )
}

export default CodeTab;