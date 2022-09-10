import { motion } from "framer-motion";

import html from './svgs/html.svg';

import css from './svgs/css.svg';
import tailwind from './svgs/tailwindcss.svg';

import js from './svgs/js.svg';
import angular from './svgs/angular.svg';
import react from './svgs/react.svg';

import c from './svgs/c.svg';
import cs from './svgs/c-sharp.svg';

import Skill from "../Skill";

export default function SectionSkills() {
    const beginner = <figcaption className="text-center font-medium text-green-500">Beginner</figcaption>
    const intermediate = <figcaption className="text-center font-medium text-orange-500">Intermediate</figcaption>;

    return <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} id="skills" className="h-full mb-72">
        <h1 className="inline-block text-5xl dark:text-white dark:hover:text-orange-400 text-black hover:text-blue-500 mb-20">Skillset</h1>
        <div className="lg:grid grid-rows-2 md:grid-cols-2">
            <section className="row-span-2">
                <h1 className="dark:text-white text-black text-2xl mb-5">Web Development</h1>
                <div className="grid grid-cols-3 gap-x-10 gap-y-20 mb-20 w-96">
                    <Skill logo={html} alt='html' status={intermediate} />
                    <Skill logo={css} alt='css' status={intermediate} />
                    <Skill logo={tailwind} alt='tailwind' status={intermediate} />
                    <Skill logo={js} alt='javascript' status={intermediate} />
                    <Skill logo={angular} alt='angular' status={beginner} />
                    <Skill logo={react} alt='react' status={beginner} />
                </div>
            </section>

            <section className="row-span-1 mb-10">
                <h1 className="dark:text-white text-black text-2xl mb-5">Procedural Programming</h1>
                <div className="inline-block w-96">
                    <Skill logo={c} alt='c' status={intermediate} />
                </div>
            </section>

            <section className="row-span-1">
                <h1 className="dark:text-white text-black text-2xl mb-5">Object-Oriented Programming</h1>
                <div className="inline-block w-96">
                    <Skill logo={cs} alt='c sharp' status={intermediate} />
                </div>
            </section>
        </div>
    </motion.div>;
}