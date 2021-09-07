import CustomNavBar from "./Components/CustomNavBar";
import "./App.css";
import TitlePage from "./Components/TitlePage";
import SkillsAndChecks from "./Components/SkillsAndChecks";
import ScrollDownIcon from "./Components/ScrollDownIcon";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <CustomNavBar/>
      <div className="main-content">
        <TitlePage/>
        <ScrollDownIcon/>
        <SkillsAndChecks/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
