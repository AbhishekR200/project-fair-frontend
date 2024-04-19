import React from 'react'
import Swal from 'sweetalert2'

function profile() {
  const updateUser =()=>{
    Swal.fire({
      title: 'Success',
      text: 'User Detail Updated',
      icon: 'success',
      confirmButtonText: 'close'
    })
    
  }
  return (
    <div>
      <div className='text-center'>
        <h3 className='mt-5'>My Profile</h3>
        <label>
          <input type="file" style={{display:'none'}} />
          <img width={'300px'} src="https://i.pinimg.com/originals/04/54/7c/04547c2b354abb70a85ed8a2d1b33e5f.png" alt="" />
        </label>
      </div>
      <div className='mx-5 px-5' >
        <input type="text" placeholder='Name' className='form-control mb-3' />
        <input type="text" placeholder='Github' className='form-control mb-3' />
        <input type="text" placeholder='Livelink' className='form-control mb-3' />
        <button className='btn btn-info m-4' onClick={updateUser}>Update</button>
      </div>
    </div>
  )
}

export default profile