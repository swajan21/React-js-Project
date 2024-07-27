import React, { useContext, useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const {getTotalCartAmount}  = useContext(StoreContext);

    const [menu,setMenu] = useState('home');
    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt='' className='logo' /> </Link> 
            <ul className="navbar-manu">
                <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
                <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>mobile-app</a>
                <a href='#footar' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>connect us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt='' />
                <div className="navar-search-icon">
                  <Link to='/cart'> <img src={assets.basket_icon} alt='' /> </Link>
                    <div className={getTotalCartAmount()===0?'':'dot'}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in </button>
            </div>
        </div>
    );
};

export default Navbar