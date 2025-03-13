import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubMenu from './components/SubMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<SubMenu/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
