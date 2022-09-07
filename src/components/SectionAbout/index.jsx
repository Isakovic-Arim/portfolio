import { motion } from "framer-motion";

export default function SectionAbout() {
    return (
        <div id="about" className="flex items-center">
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} className="w-full my-96">
            <h1 className="inline-block text-5xl dark:text-white dark:hover:text-orange-500 text-black hover:text-blue-500 mb-5">About Me</h1>
            <article className="text-lg dark:text-white dark:hover:text-orange-500 text-black hover:text-blue-500 font-mono">
                <p>Lorem ipsum dolor sit.</p>
                <p>Quibusdam ipsa distinctio sint.</p>
                <p>Hic corporis dicta architecto.</p>
                <p>Necessitatibus incidunt id tempora?</p>
                <p>Explicabo esse voluptate vitae.</p>
            </article>
        </motion.div>
        </div>
    );
}