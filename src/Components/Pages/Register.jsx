import React, { useContext } from "react";
import { CreatContext } from "../ContextApiSet/Context";
import { Link } from "react-router-dom";

const Register = () => {
    
    const {signIn} = useContext(CreatContext)

    const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({name,email,password})

        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            // e.target.reset()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


  return (
        < div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p>Do you have no account?<Link className="text-blue-400" to='/login'>Log In</Link></p>
          </form>
        </div>
  );
};

export default Register;
