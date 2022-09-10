export default function Skill(props) {
    return <figure className="inline-block">
        <figcaption className="text-center dark:text-white text-black mb-5">{props.status}</figcaption>
        <img className="mb-5" src={props.logo} alt={props.alt} />
        <figcaption className="text-center dark:text-white text-black">{props.alt.toUpperCase()}</figcaption>
    </figure>;
}