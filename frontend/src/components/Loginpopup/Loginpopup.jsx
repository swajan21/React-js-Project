import React, { useState } from 'react';
import './Loginopopup.css'
import { assets } from '../../assets/assets';

const Loginpopup = ({setShowLogin}) => {

    const [currSate,setcurState] = useState('Sign up')


    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h1>{currSate}</h1>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currSate==='Login'?<></>:<input type="text" placeholder='Your name' required />}
                    
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currSate==='Sign up'?"Create account":"Login"}</button>
                <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currSate==='Login'?
                <p> Create a new account? <span onClick={()=>setcurState('Sign up')}>Click here</span> </p>:
                <p> Already have an account? <span onClick={()=>setcurState('Login')}>Login here</span> </p>}
                
                
            </form>
            
        </div>
    );
};

export default Loginpopup;