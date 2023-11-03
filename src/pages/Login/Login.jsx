import { Link} from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import useAuth from "../../hooks/useAuth";





const Login = () => {
  const authInfo = useAuth()
  // const location=useLocation()
  // const navigate= useNavigate()
  // console.log(location);
  const { createLogin } = authInfo
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);

    // user login auth
    createLogin(email, password)
      .then(result => {
        console.log(result.user);
    


        // navigate(location?.state? location?.state :'/')
      })
      .catch(error => {
        console.log(error);
      })


  }
  return (

    <div>

      <div className="hero min-h-screen ">
        <div className="hero-content justify-between flex-col lg:flex-row">
          <div className=" w-1/2 mr-12 ">
            <img src={img} alt="" />
          </div>
          <div className="card  w-1/2 shadow-2xl bg-base-100">
            <h2 className="text-center text-4xl font-bold mt-12 mb-5">Log in</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-600">Login</button>
              </div>
            </form>

            <div className="text-center mb-10">
              <p>dont have an account go to <Link to='/signup' className="text-blue-600 font-extrabold">Registert</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;