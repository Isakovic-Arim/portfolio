import { motion } from 'framer-motion'

export default function NavItem(props) {
    return <motion.button onClick={{scale: 0.9}} whileHover={{scale: 1.1}} className="text-orange-500 p-5" href="#">{props.heading}</motion.button>;
}