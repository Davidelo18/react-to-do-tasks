import placeholderImage from '../../assets/no-projects.png';

export default function Content() {
    return <div>
        <img src={placeholderImage} alt="notebook" />
        <h1>No Project Selected</h1>
        <p>Select a project or get started with a new one</p>
        <button>Create new project</button>
    </div>
}