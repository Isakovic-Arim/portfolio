import Project from "../Project";
import { motion } from "framer-motion";
import forecast from './imgs/weather-forecast.png';
import paletteGen from './imgs/color-palette-gen.png';
import mortgageCalc from './imgs/mortgage-calculator.png'

export default function SectionWork() {
    return (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} id="work" className="mt-52">
            <h1 className="text-5xl dark:text-white dark:hover:text-orange-500 text-black hover:text-blue-500 mb-20">Projects I've been working on</h1>
            <Project heading='Weather Forecast' desc='a web app that shows the forecast for the next 4 days' stack={['React', 'Tailwindcss']} img={forecast} demo='https://isakovic-arim.github.io/weather-forecast' />
            <Project heading='Color Palette Generator' desc='a web app that generates random colors and copies them to the clipboard of the user' stack={['Angular', 'Tailwindcss']} img={paletteGen} demo='https://isakovic-arim.github.io/color-palette-generator'/>
            <Project heading='Mortgage Calculator' desc='a web app that calculates the monthly mortgage based on the user input' stack={['Angular', 'Tailwindcss']} img={mortgageCalc} demo='https://isakovic-arim.github.io/mortgage-calculator' />
        </motion.div>
    );
}