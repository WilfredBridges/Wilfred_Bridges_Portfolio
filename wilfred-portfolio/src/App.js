import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import AboutMe from './components/aboutme/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import MyCarousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <div className='about'>
      <AboutMe />
      <Skills />
      <MyCarousel/>
      </div>
      <div>
        <Contact />
      </div>
      
        
      
    </div>
  );
}

export default App;
