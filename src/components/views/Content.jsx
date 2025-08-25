import { useRef } from 'react';
import placeholderImage from '../../assets/no-projects.png';
import Button from "../ui/Button";
import InputField from '../ui/InputField';

export default function Content({ currentView, handleViewChange, handleProjectsChange }) {
    const inputTitleRef = useRef();
    const inputDescriptionRef = useRef();
    const inputDateRef = useRef();

    const handleSaveProject = () => {
        handleViewChange('empty');
        handleProjectsChange({
            title: inputTitleRef.current.value,
            description: inputDescriptionRef.current.value,
            date: inputDateRef.current.value,
            tasks: []
        })
    }

    const emptyView = <>
        <img className='w-[70px]' src={placeholderImage} alt="notebook" />
        <h1>No Project Selected</h1>
        <p>Select a project or get started with a new one</p>
        <Button onClick={() => handleViewChange('new')}>Create new project</Button>
    </>

    const newView = <>
        <div className='w-[400px] mt-8'>
            <InputField id="title" label="Title" ref={inputTitleRef} />
            <InputField id="description" label="Description" ref={inputDescriptionRef} />
            <InputField id="date" label="Due Date" type="date" ref={inputDateRef} />
        </div>
        <div className='flex gap-2'>
            <Button isSecondary onClick={() => handleViewChange('empty')}>Cancel</Button>
            <Button onClick={handleSaveProject}>Save</Button>
        </div>
    </>

    return (
        <div className='flex flex-col items-center gap-4 m-auto'>
            {currentView === 'empty' && emptyView}
            {currentView === 'new' && newView}
        </div>
    )
}