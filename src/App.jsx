import { useState } from "react";
import Content from "./components/views/Content";
import Sidebar from "./components/views/Sidebar";

function App() {
  const [view, setView] = useState('empty');
  const [projects, setProjects] = useState([{ title: 'Test', description: 'Opis testowego projektu', date: '2024-06-30', tasks: [] }]);

  const handleViewChange = (newView) => {
    setView(newView);
  }

  const handleProjectsChange = (newProject) => {
    setProjects(prevProjects => prevProjects);
  }

  console.log(projects);

  return (
    <>
      <header className="bg-emerald-950 h-[50px]"></header>
      <main className="flex h-[calc(100vh-50px)] bg-emerald-950 text-white text-[18px]">
        <Sidebar handleViewChange={handleViewChange} projects={projects} />
        <Content currentView={view} handleViewChange={handleViewChange} handleProjectsChange={setProjects} />
      </main>
    </>
  );
}

export default App;
