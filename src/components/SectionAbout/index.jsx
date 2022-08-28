import { motion } from "framer-motion";

export default function SectionAbout() {
    return (
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} id="about" className="w-full my-96">
            <h1 className="inline-block text-5xl text-white hover:text-green-500 mb-5">About Me</h1>
            <article className="text-lg text-white hover:text-green-500 font-mono">
                <p>Lorem ipsum dolor sit.</p>
                <p>Quibusdam ipsa distinctio sint.</p>
                <p>Hic corporis dicta architecto.</p>
                <p>Necessitatibus incidunt id tempora?</p>
                <p>Explicabo esse voluptate vitae.</p>
            </article>
        </motion.div>
    );
}