import linkedin from './svgs/linkedin.svg';
import github from './svgs/github.svg';

export default function SectionContact() {
    return <div id='contact' className='rounded-md h-20 w-10 fixed bottom-2 right-2 py-1'>
        <a className='w-fit bg-white flex justify-center mb-2 rounded-full' href='https://www.linkedin.com/in/arim-isakovic-59774224a/'><img src={linkedin} alt="linked-in profile" /></a>
        <a className='w-fit bg-white flex justify-center rounded-full' href='https://github.com/Isakovic-Arim'><img src={github} alt="github profile" /></a>
    </div>;
}