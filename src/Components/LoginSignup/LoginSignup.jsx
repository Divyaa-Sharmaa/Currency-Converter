import React,{ useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';

// import PhoneInput from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'

import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pswrd_icon from '../Assets/password.png'
import phone_icon from '../Assets/phones.png'

export const LoginSignup = () => {

    const [action,setAction] = useState("Login");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    // const [isLogin,setIsLogin] = useState(true);
    const [value, setValue] = useState();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({password: ''});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleClick() {
      // if(formData.password.trim()!== '' && value ){
        navigate("/CurrencyConverterr");
  }

    const handleLoginClick =()=>{
      // if(action==='Login'){
        if (formData.password.trim() !== '') {         
            navigate('/CurrencyConverterr');
          }           
        else {
            alert('Please fill the details.');
          }
           
    }

    const handleToggle = () => {
        if (type === 'password') {
            setType('text');
            setIcon(eye);
        }else{
            setType('password');
            setIcon(eyeOff);
        }
    }

    const [input, setInput] = useState({       
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        password: '',
        confirmPassword: ''
    });
    const onInputChange = e => {
       const {name, value} = e.target;
       setInput(prev => ({
        ...prev,
        [name]: value
       }));
       validateInput(e);
    }

    const validateInput = e => {
        let {name, value} = e.target;
        setError(prev =>{
            const stateObj = {...prev, [name]: ""};
            switch (name) {      
                case "password":
                   if (input.confirmPassword && value !== input.confirmPassword) {
                    stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                  } else {
                    stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                  }
                  break;
         
                case "confirmPassword":
                  if (input.password && value !== input.password) {
                    stateObj[name] = "Password and Confirm Password does not match.";
                  }
                  break; 
                case "email":
                            
                default:
                  break;
              }
         
              return stateObj;
            });
          }

    return (
        <>
        <div className={`defaultClass ${action === "Login" ? 'loginC': 'signupC'}`}>            
            <div className={`defaultClass ${action === "Login" ? 'loginHead': 'signupHead'}`}>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className={`defaultClass ${action === "Login" ? 'loginInputs': 'signupInputs'}`}>
                {action==="Login"?
                <>
                <div className='loginInput' >
                    <img src={email_icon} alt="" />
                    <input type="email" 
                           placeholder='youremail@gmail.com' required />
                </div>
                <div className='loginInput'>
                    <img src={pswrd_icon} alt="" />
                    <input type="password"  name='password'
                           placeholder='*********'
                           value={formData.password}
                           onChange={handleInputChange}                         
                           required/>
                    {/* <span onClick = {handleToggle}></span> */}
                </div>
                </>:<>
                    <div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text" 
                               placeholder='first name'
                          required />
                    </div>
                    <div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='last name' required />
                    </div>
                    <div className='input'>
                        <img src={ phone_icon} alt="" />
                        <PhoneInput placeholder="Enter phone number"
                        country='IN' value={value} onChange={setValue} required />
                    </div>
                    <div className='input'>
                         <img src={email_icon} alt="" />
                         <input type="email" placeholder='youremail@gmail.com' required/>
                    </div>
                    <div className='input'><img src={pswrd_icon} alt="" />
                    <input
                   type="password"
                   name="password"
                   placeholder='Password'
                   value={input.password}
                   onChange={onInputChange}
                   onBlur={validateInput}>
                   </input>
                   </div>
                {error.password && <strong className='err'>{error.password}</strong>}
                <div className='input'><img src={pswrd_icon} alt="" />
                    <input
                   type="password"
                   name="confirmPassword"
                   placeholder='Confirm Password'
                   value={input.confirmPassword}
                   onChange={onInputChange}
                   onBlur={validateInput}>
                </input></div>
                {error.confirmPassword && <strong className='err'>{error.confirmPassword}</strong>} 
                </>}
            </div>
            {action==="Sign Up"?
              <> <button onClick={handleClick} className='submitSign-up' >Sign Up</button>
                <div className="submitContainer-signup" onClick={()=>{setAction("Login")}}>   
                  <p className='sign-inn'>Already have an account? <strong>Login</strong></p></div>                    
                </>
                     :
                <>
                  <button onClick={handleLoginClick} className='submitSign-in' >Login</button> 
                  <div className="forgot-password">
                  <div className='sign-upp' > Lost Password? <strong>Click here!</strong> </div>
                  <div className='sign-upp' onClick={()=>{setAction("Sign Up")}}>Did not register yet? <strong>Register here!</strong></div> 
                  </div>          
                </>
            }           
        </div>
        </>
    )
}
