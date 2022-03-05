import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { createNewUser, handleGoogleSignIn, logInUser } from '../Login/LoginManager';
import RideDetails from '../RideDetails/RideDetails';
import google from './../../images/google.png';
import './SignUp.css';



const SignUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photoURL: '',
    })
    // console.log(user);

    const navigate = useNavigate();
    const location = useLocation();

    //Sign in with google popup
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                navigate(location.state.from);
            })
    }

    
    const { register, handleSubmit, formState: { errors } } = useForm();
  

    const onSubmit = (data) => {
        createNewUser(data)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
            })
    };


    const onLogin = (data) => {
        logInUser(data.email, data.password)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
            })
    };

    const [visible, setVisible] = useState(false);


    return loggedInUser.email
        ? <RideDetails></RideDetails>
        : (
            <div className="container">
                {
                    visible &&
                    <div className="">
                        <form onSubmit={handleSubmit(onLogin)} className="formAlign ">
                            <input className="form-control" type="text" placeholder="Email" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                            {errors.email?.type === 'pattern' && <p style={{ color: 'red' }}>"Please write a valid email address"</p>}
                            <br />

                            <input className="form-control" type="password" placeholder="Password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} />
                            {errors.password?.type === 'required' && <p style={{ color: 'red' }}>"Password is required"</p>}
                            <br />

                            <input className="form-control bg-warning mb-2" type="submit" value="Login" />
                            <span>New User?</span> <Link to="" onClick={() => setVisible(!visible)}>Create an Account</Link>
                        </form>
                    </div>
                }
                {
                    !visible &&
                    <form onSubmit={handleSubmit(onSubmit)} className="formAlign">
                        <input className="form-control" type="text" placeholder="Name" {...register("name", { required: true })} />
                        {errors.name?.type === 'required' && <p style={{ color: 'red' }}>"Name is required"</p>}
                        <br />

                        <input className="form-control" type="email" placeholder="Email" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                        {errors.email?.type === 'pattern' && <p style={{ color: 'red' }}>"Please write a valid email address"</p>}
                        <br />

                        <input className="form-control" type="password" placeholder="Password" {...register("password", { required: true })} />
                        {errors.password?.type === 'required' && <p style={{ color: 'red' }}>"Password is required"</p>}
                        <br />

                        <input className="form-control bg-warning mb-2" type="submit" value="Create an Account" />
                        <span>Already have an account?</span> <Link to="" onClick={() => setVisible(!visible)}>Login</Link>
                    </form>

                }

                <div className="" style={{ width: "400px", margin: "0 auto" }}>
                    <div className="group">
                        <div className="item line"></div>
                        <div className="item text">Or</div>
                        <div className="item line"></div>
                    </div>
                </div>

                <div className="input-group mb-3 border rounded-pill bg-warning" style={{ width: "400px", margin: "0 auto" }}>
                    <img src={google} alt="" style={{ width: "10%", padding: "5px" }} />
                    <input type="text" onClick={googleSignIn} className="form-control btn " placeholder="Login with Google" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        );
};

export default SignUp;