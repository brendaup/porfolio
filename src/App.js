import './App.css';
import '@fontsource/roboto/300.css';
import { NavBar } from './components/NavBar/NavBar';
import { CenteredText } from './components/CenteredText/CenteredText';
import { TextWithImage } from './components/TextWithImage/TextWithImage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CenteredText/>
      <TextWithImage/>
      <Footer/>
    </div>
  );
}

export default App;
