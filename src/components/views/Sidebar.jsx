import Button from "../ui/Button";

export default function Sidebar({ handleViewChange, projects }) {
    console.log(projects);
    return (
        <div className="bg-emerald-900 w-[300px] px-8 py-16 rounded-r-lg">
            <h1 className="uppercase mb-4 font-bold">Your projects</h1>
            <Button onClick={() => handleViewChange('new')}>+ Add project</Button>
            {/* {projects.map((project, index) => (
                <div
                    key={`project-${index}`}
                    className="p-4 bg-emerald-800 rounded mt-4 cursor-pointer hover:bg-emerald-700"
                >
                    {project.title}
                </div>
            ))} */}
        </div>
    );
}