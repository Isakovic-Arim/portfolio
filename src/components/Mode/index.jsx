import { useState, useEffect } from "react";
import light from './svgs/light.svg';
import dark from './svgs/dark.svg';
import faviconLight from './favicon.ico';
import faviconDark from './favicon-dark.ico';

export default function Mode() {
    const [mode, setMode] = useState('mode' in localStorage ? localStorage.getItem('mode') : 'dark');
    const [icon, setIcon] = useState(dark);
    const [favicon, setFavicon] = useState('favicon' in localStorage ? localStorage.getItem('favicon') : faviconDark);

    const body = document.querySelector('body');
    const link = document.querySelector("link[rel~='icon']");

    useEffect(() => {
        localStorage.setItem('mode', mode);

        setIcon(mode === 'dark' ? light : dark);
        setFavicon(mode === 'dark' ? faviconLight : faviconDark);
        localStorage.setItem('favicon', favicon);
        
        body.className = localStorage.getItem('mode');
        link.href = localStorage.getItem('favicon');
    }, [mode]);

    const handleClick = () => { mode === 'dark' ? setMode('light') : setMode('dark') }

    return <button className="p-2 w-10 h-10 text-center dark:stroke-white fixed right-4 top-4" onClick={handleClick}>
        <img className="stroke-white" src={icon} alt='icon showing the mode being used' />
    </button>;
}