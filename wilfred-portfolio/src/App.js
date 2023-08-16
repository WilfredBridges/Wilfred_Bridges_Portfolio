import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import AboutMe from './components/aboutme/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Hero from './components/hero/hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <div className='about'>
      <AboutMe />
      <Skills />
      <Projects />
      </div>
      <div>
        <Contact />
      </div>
      
        
      
    </div>
  );
}

export default App;
