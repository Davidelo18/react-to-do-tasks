import Button from "../ui/Button";

export default function Sidebar({ handleViewChange, projects }) {
    return (
        <div className="bg-emerald-900 w-[300px] px-8 py-16 rounded-r-lg">
            <h1 className="uppercase mb-4 font-bold">Your projects</h1>
            <Button onClick={() => handleViewChange('new')}>+ Add project</Button>
            <div className="flex flex-col gap-2 mt-8">
                {projects.map((project, index) => (
                    <Button
                        key={`project-${index}`}
                        type="secondary"
                        onClick={() => handleViewChange('project', project)}
                    >
                        {project.title}
                    </Button>
                ))}
            </div>
        </div>
    );
}