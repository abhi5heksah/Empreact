import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/style.css";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Welcomepage from './Welcomepage';
import EmpLogin from './appmodules/emp/auth/EmpLogin';
import Empregistor from './appmodules/emp/auth/Empregistor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path='' element={<Welcomepage/>}></Route>
            <Route path='employee' element={<EmpLogin/>}></Route>
            <Route path='employee/registor' element={<Empregistor/>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
