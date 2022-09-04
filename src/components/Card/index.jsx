import { motion } from "framer-motion";

export default function Card(props) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="tilt w-full p-4 m-6 mb-20 border-4 border-green-300 rounded-md">
            <h1 className="text-5xl text-center mb-5 text-white">{props.heading}</h1>
            <div className="text-white h-96 flex justify-evenly items-center">
                <article className="text-lg w-80 mb-10">
                    {props.content}
                </article>
            </div>
        </motion.div>
    );
}