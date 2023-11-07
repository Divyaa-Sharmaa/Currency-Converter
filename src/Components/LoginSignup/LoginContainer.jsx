import React,{ useState } from 'react';
// import './SignupContainer';
import email_icon from '../Assets/email.png'
import pswrd_icon from '../Assets/password.png'
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
// import './LoginSignup.css';
import './LoginContainer.css';
import {Google_Login} from './Google_Login'

export const LoginContainer = () => {
    
    const [action,setAction] = useState("Login");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setType('text');
            setIcon(eye);
        }else{
            setType('password');
            setIcon(eyeOff);
        }
    }

    return ( <>
       <div className='container'>            
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='youremail@gmail.com' />
                </div>
                <div className='input'>
                    <img src={pswrd_icon} alt="" />
                    <input type="password" placeholder='*********'/>
                    <span onclick = {handleToggle}></span>
                </div>
                <div className='submit'>Login</div>
                <div onClick={ ()=> 
                    {setAction("Sign Up")}}>
                    <p className='sign-upp'>Did not register yet? <span>Register</span> here!</p>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div><div className="forgot-password">Forgot password? <span>Click here!</span></div>                                                 
                                                 </div>}           
            {/* <div className="submitContainer">
                {action==="Sign Up"?<div><div className='submit '>Sign Up</div><div className='google_login'> <Google_Login/></div>
                                     </div>
                                    :<div onClick={()=>{setAction("Sign Up")}}>
                                        <p className='sign-upp'>Did not register yet? <span>Register</span> here!</p>
                                    </div>
                }
                {action==="Login"?<div className='submit '>Login</div>
                                    :<div onClick={()=>{setAction("Login")}}>
                                        <p className='sign-inn'>Already have an account? <span>Login</span></p>
                                    </div>
                                    
                }        
            </div> */}
        </div>    
    </>);
  }

// export default LoginContainer;  