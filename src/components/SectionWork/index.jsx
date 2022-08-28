import Card from "../Card";
import { motion } from "framer-motion";

export default function SectionWork() {
    return (
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} id="work" className="mt-96">
            <h1 className="text-5xl text-white hover:text-green-500">Projects I've been working on</h1>
            <div className="grid-cols-3 mt-10">
                <Card heading='Weather forecast' info='a web app that tells the forecast for the next 4 days.'><li>React</li><li>Tailwind</li></Card>
                <Card heading='Color palette generator' info='a web app that generates random colors and lets you copy them to your clipboard.'/>
                <Card heading='Mortgage calculator' info='a web app that calculates the monthly mortgage based on the users input.'/>
            </div>
        </motion.div>
    );
}