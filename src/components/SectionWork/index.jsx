import Project from "../Project";
import { motion } from "framer-motion";

export default function SectionWork() {
    return (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} id="work" className="mt-96">
            <h1 className="text-5xl dark:text-white dark:hover:text-orange-500 text-black hover:text-blue-500 mb-20">Projects I've been working on</h1>
            <Project heading='Weather Forecast' desc='a web app that shows the forecast for the next 4 days' stack={['React', 'Tailwindcss']} />
            <Project heading='Color Palette Generator' desc='a web app that generates random colors and copies them to the clipboard of the user' stack={['Angular', 'Tailwindcss']} />
            <Project heading='Mortgage Calculator' desc='a web app that calculates the monthly mortgage based on the user input' stack={['Angular', 'Tailwindcss']} />
        </motion.div>
    );
}