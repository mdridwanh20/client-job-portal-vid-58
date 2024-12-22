import Lottie from 'lottie-react'
import React, { useContext, useState } from 'react'
import lottieRegisterICon from '../../src/assets/Icon/LottiRegistericon.json'
import Swal from 'sweetalert2';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function Register() {

  const [error, setError] = useState(" ")
  const { user, createNewUser } = useContext(AuthContext)

  const handlerRegisterForm = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log({ email, password });

    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
      }).catch((error) => {
        console.log(error);
      })

    from.reset();

  }

  return (
    <div className='py-16 flex justify-center gap-10'>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handlerRegisterForm} className="card-body">
          <h2 className='font-bold text-xl text-green-600'>Sign Up here </h2>

          <div className="form-control">

            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              name='name'
              type="email"
              placeholder="name"
              className="input focus:outline-none input-bordered" />
          </div>

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

          <p>I have Already account. please <Link className='font-bold' to='/login'>Login</Link> </p>


        </form>

      </div>

      <div>
        <Lottie className='w-96' animationData={lottieRegisterICon}></Lottie>
      </div>


    </div>
  )
}
