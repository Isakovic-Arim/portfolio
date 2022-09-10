export default function NavItem(props) {
    return <a className="dark:text-white dark:hover:text-orange-400 text-black hover:text-blue-500 p-5" href={props.link}>{props.heading}</a>;
}