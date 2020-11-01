import React, {useState} from 'react';

interface CodeTabProps {
    url: string
}

const CodeTab: React.FC<CodeTabProps> = (props: CodeTabProps) => {
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
            <div className={`link code clickable ${linkSuccess? 'green-border': ''}`} onClick={copy}>
                {props.url.slice(1)}
            </div>
        </>
    )
}

export default CodeTab;
