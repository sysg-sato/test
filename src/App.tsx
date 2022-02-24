import React from 'react';
import logo from './logo.svg';
import Phone from './test/phone';
import Mui from './test/Mui';
import PhoneMin from './test/phoneMin';
// import './App.css';

import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';

const App:React.FC = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Phone />} />
              <Route path=":Mui" element={<Mui />} />
              <Route path="/phone" element={<PhoneMin />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
