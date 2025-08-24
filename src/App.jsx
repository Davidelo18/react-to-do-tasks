import { useState } from "react";
import Content from "./components/views/Content";
import Sidebar from "./components/views/Sidebar";

function App() {
  const [view, setView] = useState('empty');

  return (
    <>
      <header className="bg-emerald-950 h-[50px]"></header>
      <main className="flex h-[calc(100vh-50px)] bg-emerald-950 text-white text-[18px]">
        <Sidebar />
        <Content currentView={view} />
      </main>
    </>
  );
}

export default App;
