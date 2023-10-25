import './App.css';
import '@fontsource/roboto/300.css';
import { NavBar } from './components/NavBar/NavBar';
import { CenteredText } from './components/CenteredText/CenteredText';
import { TextWithImage } from './components/TextWithImage/TextWithImage';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Studies from './components/Studies/Studies';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/Studies' element={<Studies></Studies>}></Route>
        <Route path='/AboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  );
}

export default App;
