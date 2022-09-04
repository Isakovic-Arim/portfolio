import { motion } from 'framer-motion';
import angular from './svgs/angular.svg';
import react from './svgs/react.svg';
import tailwind from './svgs/tailwindcss.svg';

export default function Project(props) {

    const getIcon = (tech) => {
        let icon = 'tailwindcss';

        switch (tech.toLowerCase()) {
            case 'angular':
                icon = angular;
                break;

            case 'react':
                icon = react;
                break;

            default:
                icon = tailwind;
        }
        return icon;
    }

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >
            <h1 className='dark:text-white text-black text-3xl mb-5'>{props.heading}</h1>
            <div className='md:flex justify-center items-center w-80 mb-32'>
                <div className='w-96 h-96 p-4 dark:bg-orange-400 bg-blue-500'>
                    {props.img}
                </div>
                <div className='w-96 h-80 p-6 dark:bg-white bg-slate-100'>
                    <article>
                        <p className='inline-block font-medium w-80 mb-10'>{props.desc}.</p>
                        <p className='underline font-medium mb-5'>Built with:</p>
                    </article>
                    <div className='flex justify-evenly'>
                        {props.stack.map((tech, index) => {
                            return <figure key={index}>
                                <img src={getIcon(tech)} alt={tech} />
                                <figcaption className='text-center text-gray-500'>{tech}</figcaption>
                            </figure>
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}