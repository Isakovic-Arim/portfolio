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
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='h-screen' >
            <h1 className='dark:text-white text-black text-3xl mb-5'>{props.heading}</h1>
            <div className='md:flex justify-center items-center w-full mb-32'>
                <div className='sm:w-full sm:h-full p-4 flex justify-center items-center dark:bg-orange-400 bg-blue-500'>
                    <a href={props.demo}><img className='rounded-md' src={props.img} alt="screenshot of the project" width={800} height={800} /></a>
                </div>
                <div className='sm:w-full sm:h-full lg:w-96 lg:h-80 p-6 dark:bg-white bg-blue-100 md:rounded-r-xl'>
                    <article>
                        <p className='inline-block font-medium mb-10'>{props.desc}</p>
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