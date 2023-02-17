import "./styles/App.scss"
import { Route, Routes } from 'react-router-dom';
import ImagesComponent from './components/ImagesComponent';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
