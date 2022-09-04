import { useState, useEffect } from "react";
import light from './svgs/light.svg';
import dark from './svgs/dark.svg';

export default function Mode() {
    const [mode, setMode] = useState('mode' in localStorage ? localStorage.getItem('mode') : 'dark');
    const [icon, setIcon] = useState(dark);

    useEffect(() => {
        localStorage.setItem('mode', mode);
        document.getElementsByTagName('body')[0].className = localStorage.getItem('mode');
    }, [mode]);

    const handleClick = () => { mode === 'dark' ? setLightMode() : setDarkMode() }

    const setDarkMode = () => {
        setMode('dark');
        setIcon(dark);
    }

    const setLightMode = () => {
        setMode('light');
        setIcon(light);
    }

    return <button className="bg-slate-300 p-2 rounded-md text-center dark:text-white text-black inset-x-10" onClick={handleClick}>
        <img src={icon} alt='icon showing the mode being used' />
    </button>;
}