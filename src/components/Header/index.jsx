import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className=" h-full p-20 m-20">
            <motion.h1 whileHover={{scale: 1.1, x: 30}} className="inline-block text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 hover:from-pink-500 hover:to-yellow-500 font-bold font-mono">Isakovic Arim</motion.h1>
            <p className="text-lg text-orange-300 font-medium font-mono">I am a software engineering student at a higher technical college in austria.</p>
        </div>
    );
}