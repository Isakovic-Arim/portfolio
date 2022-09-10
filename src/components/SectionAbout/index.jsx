import { motion } from "framer-motion";

export default function SectionAbout() {
    return (
        <div id="about" className="h-screen flex items-center mb-20">
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} className="w-full my-96">
            <h1 className="inline-block text-5xl dark:text-white dark:hover:text-orange-400 text-black hover:text-blue-500 mb-5">About Me</h1>
            <article className="text-lg dark:text-white dark:hover:text-orange-400 text-black hover:text-blue-500 font-mono">
                <p className="mb-5">Two years ago I became a software engineering <br/>student at a higher technical college in austria.</p>
                <p className="mb-5">Being relatively new to the world of software <br/>I was forced to face most of the upcoming challenges alone, <br/>setting me into a deep state of non-stop learning.</p>
                <p>Looking at today, I have continued to follow my path as an independent student <br/>and have managed to both develop and deploy real-world applications.</p>
            </article>
        </motion.div>
        </div>
    );
}