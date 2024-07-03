import AboutMePage from "./components/AboutMePage";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-black border-2 border-green-200 max-w-[1080px] m-auto">
      <Header />
      <AboutMePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
