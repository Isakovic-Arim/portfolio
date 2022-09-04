import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className="my-72">
            <motion.h1 whileHover={{scale: 1.1, x: 30}} className="inline-block text-5xl md:text-8xl dark:text-white dark:hover:text-orange-500 text-black hover:text-blue-500 font-bold font-mono">Isakovic Arim</motion.h1>
            <p className="text-lg dark:text-white dark:hover:text-orange-400 text-black hover:text-blue-500 font-medium font-mono">I am a software engineering student at a higher technical college in austria.</p>
        </motion.div>
    );
}