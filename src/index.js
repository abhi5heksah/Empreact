import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Welcomepage from './Welcomepage';
import EmpLogin from './appmodules/emp/auth/EmpLogin';
import Empregister from './appmodules/emp/auth/Empregister';
import AdminLogin from './appmodules/admin/auth/AdminLogin';
import AdminRegister from './appmodules/admin/auth/AdminRegister';
import SupperadLogin from './appmodules/supperadmin/auth/SupperadLogin';
import SupperadRegister from './appmodules/supperadmin/auth/SupperadRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path='' element={<Welcomepage/>}></Route>
            <Route path='employee' element={<EmpLogin/>}></Route>
            <Route path='employee/register' element={<Empregister/>}></Route>
            <Route path = 'admin' element={<AdminLogin/>}></Route>
            <Route path='admin/admin_register' element={<AdminRegister/>}></Route>
            <Route path='supperadlogin' element={<SupperadLogin/>}></Route>
            <Route path='supperadlogin/supperadregister' element={<SupperadRegister/>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
