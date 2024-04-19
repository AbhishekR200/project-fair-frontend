import React from 'react'
import { Link } from 'react-router-dom'


function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHVlamI3NTZ5cHJwdmdibmw0eGtvZjU5dWc1b3A5dmhwc28wcmNwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"width={'100%'} className='p-4' alt="" />
        </div>
        <div className="col-lg-6">
          <form  className='shadow bg-black p-3 m-5'>
<h3 className='text-center m-5 text-info'>
  Project Fair
</h3>
<h5 className='text-center m-3'>
{
  register? 'Register Here...' : 'Login Here...'
}
</h5>

<div className='m-5 p-5'>
  {
  register&&
  <input type="text" placeholder='username' className='form-control mb-2'/>

  }
  <input type="email" placeholder='email' className='form-control mb-2' />
  <input type="password" placeholder='Password' className='form-control mb-2' />
</div>

<div className='text-center p-3 mb-5'>
  {
    register?
    <div >
    <button className='p-1  bg-primary text-white'>Register</button>
    <p  className='m-3'>Already Registered ?: <Link to={'/login'}>Click here...</Link></p>
    </div>
    :
    <div>
    <button className='p-1 bg-primary text-white'>Login</button>
    <p className='m-3'>New to here ?: <Link to={'/register'}>Click here...</Link></p>

    </div>
  }
</div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Auth