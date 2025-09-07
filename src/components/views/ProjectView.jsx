import Button from "../ui/Button";
import InputField from "../ui/InputField";
import { useRef } from "react";

export default function ProjectView({ project, handleProjectRemove, setProjects, handleViewChange }) {
    const taskName = useRef();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleTaskAdd();
        }
    }

    const handleTaskAdd = () => {
        const newTask = taskName.current.value;

        if (newTask.trim() === '') return;

        if (project.tasks.includes(newTask)) {
            alert('Task already exists');
            return;
        }

        const updatedProject = { ...project, tasks: [...project.tasks, newTask] };
        setProjects(prevProjects => {
            const newProjects = [...prevProjects];
            newProjects[newProjects.indexOf(project)] = updatedProject;
            localStorage.setItem('projects', JSON.stringify(newProjects));
            return newProjects;
        });
        handleViewChange('project', updatedProject);
        document.getElementById('new-task').value = '';
    }

    const handleTaskRemove = (taskToRemove) => {
        const updatedProject = { ...project, tasks: project.tasks.filter(task => task !== taskToRemove) };
        setProjects(prevProjects => {
            const newProjects = [...prevProjects];
            newProjects[newProjects.indexOf(project)] = updatedProject;
            localStorage.setItem('projects', JSON.stringify(newProjects));
            return newProjects;
        });
        handleViewChange('project', updatedProject);
    }

    return (
        <div className="w-full">
            <div className="mb-4 pb-8 flex flex-col gap-4 border-b">
                <div className="flex justify-between w-full">
                    <h1 className="text-4xl text-orange-600 font-bold">{project.title}</h1>
                    <Button type="secondary" onClick={() => handleProjectRemove(project)}>Delete project</Button>
                </div>
                <p className="text-xs">{project.date}</p>
                <p>{project.description}</p>
            </div>
            <div className="lg:max-w-[500px]">
                <h2 className="text-2xl font-bold mb-4">Tasks</h2>
                <div className="flex gap-2">
                    <InputField id="new-task" ref={taskName} onKeyDown={handleKeyDown} />
                    <Button type="secondary" onClick={handleTaskAdd}>Add Task</Button>
                </div>
                {project.tasks.length === 0 && <p className="mt-4 italic">No tasks added yet</p>}
                {project.tasks.length > 0 &&
                    <ul className="list-disc list-inside mt-4 flex flex-col gap-3">
                        {project.tasks.map((task, index) => (
                            <li className="w-full flex justify-between items-center" key={`task-${index}`}>
                                <span>{task}</span>
                                <Button type="secondary" onClick={() => handleTaskRemove(task)}>X</Button>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}