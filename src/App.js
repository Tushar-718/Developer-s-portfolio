import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import MyProject from "./components/MyProjects/myProject";
import Navbar from "./components/NavBar/navbar";
import Skill from "./components/Skills/skill";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <MyProject />
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
