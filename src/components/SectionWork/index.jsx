import Project from "../Project";
import { motion } from "framer-motion";
import forecast from './imgs/weather-forecast.png';
import paletteGen from './imgs/color-palette-gen.png';
import mortgageCalc from './imgs/mortgage-calculator.png';
import alpacaGen from './imgs/alpaca-image-gen.png';

export default function SectionWork() {
    return (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} id="work">
            <h1 className="text-5xl dark:text-white dark:hover:text-orange-400 text-black hover:text-blue-500 mb-20">Projects I've been working on</h1>
            <Project heading='Weather Forecast' desc='see the weather forecast for the next 4 days' stack={['React', 'Tailwindcss']} img={forecast} demo='https://isakovic-arim.github.io/weather-forecast' />
            <Project heading='Color Palette Generator' desc='generate random colors and copy them to your clipboard' stack={['Angular', 'Tailwindcss']} img={paletteGen} demo='https://isakovic-arim.github.io/color-palette-generator'/>
            <Project heading='Mortgage Calculator' desc='calculate the monthly mortgage based your input' stack={['Angular', 'Tailwindcss']} img={mortgageCalc} demo='https://isakovic-arim.github.io/mortgage-calculator' />
            <Project heading='Alpaca Image Generator' desc='customize an alpaca and download it in png format' stack={['Angular', 'Tailwindcss']} img={alpacaGen} demo='https://isakovic-arim.github.io/alpaca-image-generator'/>
        </motion.div>
    );
}