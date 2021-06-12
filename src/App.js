import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage';
import Header from './layouts/header';
import { Routes } from './utils/routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
