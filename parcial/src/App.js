import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SubMenu from './components/SubMenu';
import i18n from './internacionalization/i18n';
import { useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:lng" element={<LanguageWrapper><LoginForm /></LanguageWrapper>} />
          <Route path="/:lng/home" element={<LanguageWrapper><Home /></LanguageWrapper>} />
          <Route path="/:lng/submenu" element={<LanguageWrapper><SubMenu /></LanguageWrapper>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LanguageWrapper({ children }) {
  const { lng } = useParams();


  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  return children;
}

export default App;
