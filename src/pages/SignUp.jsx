import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <img src={img} alt="" className="w-3/4 h-3/4" />
        </div>
        <div className="card flex-shrink-0 w-full border">
          <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline mx-auto">
            <FaGoogle className="text-lg"/>
          </button>
          <p className="text-center">
            Have an account?{" "}
            <Link to="/login" className="text-orange-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
