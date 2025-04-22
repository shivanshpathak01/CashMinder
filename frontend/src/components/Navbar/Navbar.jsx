import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Home")
    const [darkMode, setDarkMode] = useState(false)
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    const navigate = useNavigate();

    // Initialize dark mode from localStorage on component mount
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark') {
        setDarkMode(true)
        document.documentElement.setAttribute('data-theme', 'dark')
      }
    }, [])

    // Toggle dark mode
    const toggleDarkMode = () => {
      const newDarkMode = !darkMode
      setDarkMode(newDarkMode)

      // Update DOM and localStorage
      if (newDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.setItem('theme', 'light')
      }
    }

    const logout = () =>{
      localStorage.removeItem("token")
      setToken("")
      navigate("/")
    }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link onClick={()=> setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=> setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=> setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="theme-toggle" onClick={toggleDarkMode}>
          <div className="theme-toggle-track"></div>
          <div className="theme-toggle-thumb">
            <span className="theme-toggle-icon sun">☀</span>
            <span className="theme-toggle-icon moon">☽</span>
          </div>
        </div>

        {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>:
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="Profile" />
          <ul className='navbar-profile-dropdown'>
            <li onClick={()=>navigate("/myorders")}>
              <img src={assets.bag_icon} alt="Orders" /><p>Orders</p>
            </li>
            <hr />
            <li onClick={logout}>
              <img src={assets.logout_icon} alt="Logout" /><p>Logout</p>
            </li>
          </ul>
        </div>}

      </div>
    </div>
  )
}

export default Navbar
