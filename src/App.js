import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained">
          Hello world
        </Button>
      </header>
    </div>
  );
}

export default App;