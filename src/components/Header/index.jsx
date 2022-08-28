import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} className="my-72">
            <motion.h1 whileHover={{scale: 1.1, x: 30}} className="inline-block text-8xl text-white hover:text-green-500 font-bold font-mono">Isakovic Arim</motion.h1>
            <p className="text-lg text-white hover:text-green-400 font-medium font-mono">I am a software engineering student at a higher technical college in austria.</p>
        </motion.div>
    );
}