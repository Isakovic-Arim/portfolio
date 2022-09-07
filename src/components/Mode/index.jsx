import { useState, useEffect } from "react";
import light from './svgs/light.svg';
import dark from './svgs/dark.svg';

export default function Mode() {
    const [mode, setMode] = useState('mode' in localStorage ? localStorage.getItem('mode') : 'dark');
    const [icon, setIcon] = useState(dark);

    useEffect(() => {
        localStorage.setItem('mode', mode);
        setIcon(mode === 'dark' ? light : dark);
        document.getElementsByTagName('body')[0].className = localStorage.getItem('mode');
    }, [mode]);

    const handleClick = () => { mode === 'dark' ? setMode('light') : setMode('dark') }

    return <button className="bg-slate-300 p-2 rounded-md text-center dark:text-white text-black fixed right-4 top-4" onClick={handleClick}>
        <img src={icon} alt='icon showing the mode being used' />
    </button>;
}