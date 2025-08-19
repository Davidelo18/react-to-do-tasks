import Content from "./components/views/Content";
import Sidebar from "./components/views/Sidebar";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <Content />
    </main>
  );
}

export default App;
