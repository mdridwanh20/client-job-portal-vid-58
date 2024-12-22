import Lottie from 'lottie-react'
import React, { useContext, useState } from 'react'
import lottieLogin from '../../src/assets/Icon/LottiLogin.json'
import Swal from 'sweetalert2';
import AuthContext from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Login() {

  const [error, setError] = useState(" ")
  const {user, loginUser, createNewUser} = useContext(AuthContext)

  const location = useLocation()
  console.log(location);
  const navigate = useNavigate()

  const locationFrom = location.state || '/';
  

  const handlerLoginForm = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log({email, password});
    
    loginUser(email, password)
    .then((result) =>{
        console.log(result.user);
        navigate(locationFrom);

    }).catch((error) =>{
        console.log(error);
    })

  from.reset();
  
  }

  return (
    <div className='py-16 flex justify-center gap-10'>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlerLoginForm} className="card-body">
          <h2 className='font-bold text-xl text-green-600'>Login here </h2>
          <div className="form-control">

            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              name='email'
              type="email"
              placeholder="email"
              className="input focus:outline-none input-bordered" required />
          </div>

          <div className="form-control">

            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              name='password'
              type="password"
              placeholder="password"
              className="input focus:outline-none input-bordered" required />
        

          </div>

          <div className="form-control mt-6">
            <button
              className="btn btn-primary">Login</button>
          </div>

          <p>Have you any account. please <Link className='font-bold' to='/register'>Sign Up</Link> </p>

        </form>

      </div>

      <div>
        <Lottie className='w-96' animationData={lottieLogin}></Lottie>
      </div>


    </div>
  )
}
