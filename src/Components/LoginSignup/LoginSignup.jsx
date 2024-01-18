import React,{ useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

// import PhoneInput from 'react-phone-number-input'
// import PhoneInput from 'react-phone-number-input/input'
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
    // const [username, setUsername] = useState('');
    const [icon, setIcon] = useState(eyeOff);
    // const {isAuthenticated, user} = useAuth0();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const  handleClick = (e) => {
      e.preventDefault();
      if(validateForm()){   
        navigate('/CurrencyConverterr');
      }  
    };


    const validateForm = () => {
      let errors = {};
      let isFormValid = true;
      if(!formData.username.trim()){
        errors.username = 'Username is required';
        isFormValid = false;
      }else if(!/^[A-Za-z\s]*$/.test(formData.username)){
        errors.username = 'Invalid name format';
        isFormValid = false;
      }
      if(!formData.lastname.trim()){
        errors.lastname = 'Last name is required';
        isFormValid = false;
      }
      if(!formData.email.trim()){
        errors.email = 'Enter a valid email address';
        isFormValid = false;
      }
      if(!formData.phone.trim()){
        errors.phone = 'Phone number is required';
        isFormValid = false;
      } else if (formData.phone.length < 10 || formData.phone.length > 15) {
        errors.phone = 'Phone number should be atleast of length 10';
        isFormValid = false;
      }

      if(!formData.password.trim()){
        errors.password = 'Password is required';
        isFormValid = false;
      }else if (
        (!/(?=.*[A-Z])/.test(formData.password)) || (!/(?=.*[!@#$%^&*])/.test(formData.password)) || 
        formData.password.length < 5 ) {
        errors.password =
          'Password should be at least length of 5 with 1 capital letter & 1 special character';
          isFormValid = false;
      }
      
      if(formData.password !== formData.confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
        isFormValid = false;
      }

      setFormErrors(errors);
      return isFormValid;
    }

    const handleLoginClick =()=>{
      let errors = {};
      if(!formData.email.trim() || !formData.email.endsWith('@gmail.com')){
        errors.email = 'Email is required';;
      }
      if(!formData.password.trim()){
        errors.password = 'Password is required';
      }
      setFormErrors(errors);
      if (formData.password.trim() !== '' && formData.email.trim()!=='') {         
        navigate('/CurrencyConverterr');
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
                <form onSubmit={handleLoginClick}>
                <div className='loginInput' >
                    <img src={email_icon} alt="" />
                    <input type="email" autoSave='off' autoComplete='off' name="email" placeholder='youremail@gmail.com'
                     value={formData.email} onChange={handleInputChange}/>
                </div>
                {formErrors.email && (<span className='error'>{formErrors.email}</span>)}  
                <div className='loginInput'>
                    <img src={pswrd_icon} alt="" />
                    <input type="password" name='password' placeholder='*********'
                       value={formData.password} onChange={handleInputChange}/>
                    <span onClick = {handleToggle}></span>
                </div>
                {formErrors.password && (<span className='error'>{formErrors.password}</span>)}</form>
                </>:<>
                    <form onSubmit={handleClick}>
                    <div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text" autoComplete='off' name="username" placeholder='first name' 
                        value={formData.username} onChange={handleInputChange}/>
                    </div>
                    {formErrors.username && (<span className='error'>{formErrors.username}</span>)}
                    <div className='input'>
                        <img src={user_icon} alt="" />
                        <input type="text" name='lastname' autoComplete='off' placeholder='last name' 
                        value={formData.lastname} onChange={handleInputChange}/>
                    </div>
                    {formErrors.lastname && (<span className='error'>{formErrors.lastname}</span>)}
                    <div className='input'>
                        <img src={ phone_icon} alt="" />
                        {/* <PhoneInput placeholder="Enter phone number"
                        country='IN' value={value} onChange={setValue} required /> */}
                        <input type="tel" autoComplete='off' name="phone" placeholder="Enter phone number"
                        value={formData.phone} onChange={handleInputChange} />
                    </div>
                    {formErrors.phone && (<span className='error'>{formErrors.phone}</span>)}
                    <div className='input'>
                         <img src={email_icon} alt="" />
                         <input type="email" name="email" autoComplete='off'
                         placeholder='youremail@gmail.com' value={formData.email} onChange={handleInputChange} />
                    </div>
                    {formErrors.email && (<span className='error'>{formErrors.email}</span>)}  
                    <div className='input'>
                      <img src={pswrd_icon} alt="" />
                    <input type="password" autoComplete='off' name="password" placeholder='Password'
                   value={formData.password} onChange={handleInputChange}/>
                   </div> 
                   {formErrors.password && (<span className='signError'>{formErrors.password}</span>)}   
                <div className='input'>
                  <img src={pswrd_icon} alt="" />
                    <input type="password" name="confirmPassword" autoComplete='off'
                   placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleInputChange}></input>
                </div>
                {formErrors.confirmPassword && (<span className='error'>{formErrors.confirmPassword}</span>)}
                <div><button onClick={handleClick} className='submitSign-up' >Sign Up</button></div>
                </form>
                </>}
            </div>
            {action==="Sign Up"?
              <> 
              {/* <div><button onClick={handleClick} className='submitSign-up' >Sign Up</button></div> */}
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
