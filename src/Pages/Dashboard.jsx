import React from 'react'
import Profile from '../components/profile'
import MyProject from '../components/MyProject'



function Dashboard() {
  return (
    <div>
      <div className="row">
        <h2 className='text-center m-3'>Welcome <span className='text-light'>User</span></h2>
        <div className="col-lg-6">
          <MyProject/>
        </div>
        <div className="col-lg-6">
          <Profile/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard