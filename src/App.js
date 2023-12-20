import "./App.css";
import Banner from "./components/banner/Banner";
import AboutMe from "./components/about_me/AboutMe";
import Profile from "./components/profile/Profile";
import Education from "./components/education/Education";
import ProfessionalSkills from "./components/skills/ProfessionalSkills";
import Experience from "./components/work_exp/Experience";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Profile></Profile>
      <Education></Education>
      <Experience></Experience>
      <ProfessionalSkills></ProfessionalSkills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
