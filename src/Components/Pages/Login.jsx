import { useContext, useRef } from "react";
import { CreatContext } from "../ContextApiSet/Context";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const {logins,user} = useContext(CreatContext)
    console.log(user);
    const navigate = useNavigate()


    //for demo pass copy
      const emailCopy = useRef(null);
      const passCopy = useRef(null);
    
      const handleDemoFill = () => {
        if (emailCopy.current && passCopy.current) {
          emailCopy.current.value = "kawsarr@gmail.com";
          passCopy.current.value = "123456";
        }
      };



    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email,password})

        logins(email,password)
        .then(res=>{
            console.log(res.user)
            e.target.reset()
            alert('Login Success')
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
            alert("email, or password problem maybe")
        })

    }


    return (
        < div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                ref={emailCopy}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                ref={passCopy}
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
            <p>Do you have no account?<Link className="text-blue-400" to='/register'>Register</Link></p>
          </form>

        {/* Demo Copy */}
        <div className="mt-5 text-sm text-gray-600">
        <p>
          Demo Email: <code className="font-mono">kawsarr@gmail.com</code>
        </p>
        <p>
          Password: <code className="font-mono">123456</code>
        </p>
        <button
          onClick={handleDemoFill}
          className="mt-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Use Demo Credentials
        </button>
      </div>

        </div>
    );
};

export default Login;