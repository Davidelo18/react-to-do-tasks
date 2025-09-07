import Button from "../ui/Button";

export default function Sidebar({ handleViewChange, projects }) {
    const toggleMobileMenu = () => {
        const menu = document.querySelector('.mobile-menu');
        menu.classList.toggle('hidden');
    };
    return (
        <>
            <button className="bg-violet-800 py-4" onClick={toggleMobileMenu}>Projekt menu</button>
            <div className="bg-emerald-900 w-[300px] px-4 py-4 lg:px-8 lg:py-16 lg:rounded-r-lg max-md:w-full mobile-menu">
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
        </>
    );
}