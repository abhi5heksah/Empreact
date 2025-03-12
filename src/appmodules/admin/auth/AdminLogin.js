import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div>
      <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-4 border shadow p-3'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 mb-5 text-center'>
                                <p className='h4'>Admin Login</p>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder='enter email id'/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder='enter password'/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                   <input type='button' value="Login" className='btn btn-success'/>
                                   <Link to="admin_register " className='ms-5'>Admin Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin
