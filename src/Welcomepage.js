import React from "react";
import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
import "./appmodules/emp/auth/EmpLogin.css";
import employeeImage from "./mypictures/employee.webp";
import adminIMage from "./mypictures/admin.webp";
import superadminImage from "./mypictures/superadmin.webp"


function Welcomepage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center p-3">
          <h2>Select your login type</h2>
        </div>
        <div className="col-md-4 text-center">
          <Link to="employee">
                <div class="card">
                  <div class="img-background">
                  <img src={employeeImage} alt="" width="150" />
                    <div class="heading">
                      <h2>Employee Login</h2>
                    </div>
                  </div>
                </div>
          </Link>
        </div>
        <div className="col-md-4 text-center">
          <Link to="admin">
                <div class="card">
                  <div class="img-background">
                  <img src={adminIMage} alt="" width="150" />
                    <div class="heading">
                      <h2>Admin Login</h2>
                    </div>
                  </div>
                </div>
          </Link>
        </div>
        <div className="col-md-4 text-center">
          <Link to="supperadlogin">
                <div class="card">
                  <div class="img-background">
                  <img src={superadminImage} alt="" width="150" />
                    <div class="heading">
                      <h2>Supper Admin Login</h2>
                    </div>
                  </div>
                </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcomepage;
