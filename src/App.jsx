import { useState } from "react";
import Content from "./components/core/Content";
import Sidebar from "./components/core/Sidebar";

function App() {
  const [view, setView] = useState(['empty', '']);
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const handleViewChange = (newView, project = '') => {
    setView([newView, project]);
  }

  const handleProjectAdd = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject]);
    localStorage.setItem('projects', JSON.stringify([...projects, newProject]));
  }

  const handleProjectRemove = (projectToRemove) => {
    setProjects(prevProjects => prevProjects.filter(project => project !== projectToRemove));
    localStorage.setItem('projects', JSON.stringify(projects.filter(project => project !== projectToRemove)));
    setView(['empty', '']);
  }

  return (
    <>
      <header className="bg-emerald-950 h-[50px]"></header>
      <main className="flex h-[calc(100vh-50px)] bg-emerald-950 text-white text-[18px] max-md:flex-col">
        <Sidebar handleViewChange={handleViewChange} projects={projects} />
        <Content currentView={view} handleViewChange={handleViewChange} handleProjectAdd={handleProjectAdd} handleProjectRemove={handleProjectRemove} setProjects={setProjects} />
      </main>
    </>
  );
}

export default App;
