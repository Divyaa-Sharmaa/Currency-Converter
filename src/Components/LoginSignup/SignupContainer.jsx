import React,{ useState } from 'react';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
// import {eye} from 'react-icons-kit/feather/eye';
// import {eyeOff} from 'react-icons-kit/feather/eyeOff';
// import './LoginSignup.css';
import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input/input'
import PhoneInput from 'react-phone-number-input'
import './SignupContainer.css'


// import user_icon from '../Assets/person.png'
// import email_icon from '../Assets/email.png'
// import pswrd_icon from '../Assets/password.png'

export const SignupContainer = ()  => {

    const [value, setValue] = useState();
    return (
        <PhoneInput placeholder="phone number" value={value} onChange={setValue} />
    )
    // const [action,setAction] = useState("Sign Up");
    // // const [showPassword1 ,setShowPassword1 ]= useState(false);
    // const [type, setType] = useState('password');
    // const [icon, setIcon] = useState(eyeOff);
    // const [value, setValue] = useState()

    // const handleToggle = () => {
    //     if (type === 'password') {
    //         setType('text');
    //         setIcon(eye);
    //     }else{
    //         setType('password');
    //         setIcon(eyeOff);
    //     }
    // }
    
    // return (
    // <>
    //    <div className='container'>            
    //     <div className='header'>
    //         <div className='text'>{action}</div>
    //         <div className='underline'></div>
        
    //         <div className='inputs'>
    //    <div className='input'>
    //         <img src={user_icon} alt="" />
    //         <input type="irst name" placeholder='first name' />
    //     </div>
    //     <div className='input'>
    //         <img src={user_icon} alt="" />
    //         <input type="last name" placeholder='last name' />
    //     </div>
    //     <div className='input'>
    //         <PhoneInput placeholder=" phone number" value={value} onChange={setValue}/>
    //     </div>
    //     <div className='input'>
    //         <img src={email_icon} alt="" />
    //         <input type="email" placeholder='youremail@gmail.com' />
    //     </div>
    //     <div className='input'>
    //         <img src={pswrd_icon} alt="" />
    //         <input type="password" placeholder='*********'/>
    //         <span onclick = {handleToggle}></span>
    //     </div></div>
    //     {/* <div> */}
    //     <div className='submit '>Sign Up</div>
    //     <div onClick={()=>{setAction("Login")}}>
    //         <p >Already have an account? <span>Login</span></p>
    //     </div>
    //   {/* <Button context="signup" togglePage={handleToggle} /> */}
    //   {/* Other signup container content */}
    
    //     </div>
    //      </div>          
    // </>);

}

export default SignupContainer;