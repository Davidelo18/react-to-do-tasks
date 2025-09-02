import { Input } from "postcss";
import Button from "../ui/Button";
import InputField from "../ui/InputField";

export default function ProjectView({ project, handleProjectRemove }) {
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
            <div>
                <h2 className="text-2xl font-bold mb-4">Tasks</h2>
                <div className="w-[600px] flex gap-2">
                    <InputField id="new-task" />
                    <Button type="secondary">Add Task</Button>
                </div>
                {project.tasks.length === 0 && <p className="mt-4 italic">No tasks added yet</p>}
                {project.tasks.length > 0 && <ul className="list-disc list-inside mt-4 flex flex-col gap-2">
                    {project.tasks.map((task, index) => (
                        <li key={`task-${index}`}>{task}</li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}