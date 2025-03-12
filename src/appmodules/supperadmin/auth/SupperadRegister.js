import React from 'react'
import { Link } from 'react-router-dom'

const SupperadRegister = () => {
  return (
    <div className='container mt-5'>
    <div className='row justify-content-center'>
        <div className='col-md-8 border shadow p-3'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mb-5 text-center'>
                        <p className='h4'>Supper Admin Register</p>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder='enter email id' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-control" placeholder='enter full Name' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Phone No</label>
                            <input type="text" class="form-control" placeholder='enter phone' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Gender</label><br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" value="male" />
                                <label class="form-check-label">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" value="female" />
                                <label class="form-check-label" >Female</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Role</label>
                            <select className='form-select'>
                                <option hidden>Select Role type</option>
                                <option>Employee</option>
                                <option>Admin</option>
                                <option>Supper_Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder='enter password' />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <input type='button' value="Register Now" className='btn btn-success' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SupperadRegister
