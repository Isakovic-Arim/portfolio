import { motion } from "framer-motion";

export default function Card(props) {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className="w-full p-4 m-6 mb-20 border-4 border-green-300 rounded-md">
            <h1 className="text-5xl text-center mb-5 text-white">{props.heading}</h1>
            <div className="text-white h-96 flex justify-evenly items-center">
                <div className="inline-block">
                    <article className="text-lg w-80 mb-10">
                        {props.info}
                    </article>
                    <h2>Technologies used:</h2>
                    <ul>{props.children}</ul>
                </div>
                <div className="inline-block w-52 h-52 col-span-2 bg-slate-400">

                </div>
            </div>
        </motion.div>
    );
}