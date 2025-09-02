import { useRef } from 'react';
import NewView from '../views/newView';
import EmptyView from '../views/EmptyView';
import ProjectView from '../views/ProjectView';

export default function Content({ currentView, handleViewChange, handleProjectAdd, handleProjectRemove }) {
    const inputTitleRef = useRef();
    const inputDescriptionRef = useRef();
    const inputDateRef = useRef();

    const handleSaveProject = () => {
        handleViewChange('empty');
        handleProjectAdd({
            title: inputTitleRef.current.value,
            description: inputDescriptionRef.current.value,
            date: inputDateRef.current.value,
            tasks: []
        })
    }

    return (
        <div className={`w-full flex flex-col items-center ${currentView[0] === 'project' && 'items-baseline mx-8'} gap-4 m-auto`}>
            {currentView[0] === 'empty' && <EmptyView handleViewChange={handleViewChange} />}
            {currentView[0] === 'new' &&
                <NewView inputTitleRef={inputTitleRef} inputDescriptionRef={inputDescriptionRef} inputDateRef={inputDateRef} handleViewChange={handleViewChange} handleSaveProject={handleSaveProject} />}
            {currentView[0] === 'project' && <ProjectView project={currentView[1]} handleProjectRemove={handleProjectRemove} />}
        </div>
    )
}