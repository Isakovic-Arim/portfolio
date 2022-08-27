export default function NavBar(props) {
    return (
        <nav className="w-full h-20 p-4">
            <ul>
                {props.children}
            </ul>
        </nav>
    );
}