import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/style.css";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Welcomepage from './Welcomepage';
import EmpLogin from './appmodules/emp/auth/EmpLogin';
import Empregister from './appmodules/emp/auth/Empregister';
import AdminLogin from './appmodules/admin/auth/AdminLogin';
import AdminRegister from './appmodules/admin/auth/AdminRegister';
import SupperadLogin from './appmodules/supperadmin/auth/SupperadLogin';
import SupperadRegister from './appmodules/supperadmin/auth/SupperadRegister';
import Empmainpage from './appmodules/emp/dashboard/Empmainpage';
import EmpHomepage from './appmodules/emp/dashboard/EmpHomepage';
import Empproperty from './appmodules/emp/dashboard/Empproperty';

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
            <Route path='empmainpage' element={<Empmainpage/>}>
              <Route path='' element={<EmpHomepage/>}></Route>
              <Route path='property' element={<Empproperty/>}></Route>
              
            </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
