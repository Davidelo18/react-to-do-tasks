import placeholderImage from '../../assets/no-projects.png';
import Button from '../ui/Button';

export default function EmptyView({ handleViewChange }) {
    return (
        <>
            <img className='w-[70px]' src={placeholderImage} alt="notebook" />
            <h1>No Project Selected</h1>
            <p>Select a project or get started with a new one</p>
            <Button onClick={() => handleViewChange('new')}>Create new project</Button>
        </>
    )
}