import Mode from "../Mode";

export default function NavBar(props) {
    return (
        <nav className="absolute top-0 right-0 w-full h-20 p-4">
            <ul>
                {props.children}
                <Mode />
            </ul>
        </nav>
    );
}