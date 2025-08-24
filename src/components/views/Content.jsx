import placeholderImage from '../../assets/no-projects.png';
import Button from "../ui/Button";

export default function Content({ currentView }) {
    if (currentView === 'empty') {
        return <div className='flex flex-col items-center gap-4 m-auto'>
            <img className='w-[70px]' src={placeholderImage} alt="notebook" />
            <h1>No Project Selected</h1>
            <p>Select a project or get started with a new one</p>
            <Button>Create new project</Button>
        </div>
    } else {
        return <div>fsdfsdfsd</div>
    }
}