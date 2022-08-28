export default function NavItem(props) {
    return <a className="text-white hover:text-green-500 p-5" href={props.link}>{props.heading}</a>;
}