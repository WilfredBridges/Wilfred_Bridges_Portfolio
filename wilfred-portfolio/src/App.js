import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import AboutMe from './components/aboutme/AboutMe'
import Skills from './components/skills/Skills'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <div classname='about'>
      <AboutMe />
      <Skills />
      </div>
    </div>
  );
}

export default App;
