import './Header.css'
import logo from '../assets/Logo.png'
import mapmarker from '../assets/mapmarker.png'
import search from '../assets/search.png'
import user from '../assets/user.png'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>


      <div className="delivery-info">
        <p className='deliverto'>Deliver To:</p>
        <div className="location">
            <img src={mapmarker} alt="Map Marker" />
            <p className='currlocation'>Current Location</p>
            <span className='address'>Mohammadpur Bus Stand, Dhaka</span>
        </div>
      </div>


      <div className='signupbtn'>
        <div className='searchbtn'>
            <button className='searchbtnicon'><img src={search} alt="Search" /></button>
            <p className='searchfood'>Search Food</p>
        </div>
        <button className='loginbtn'>
            <img src={user} alt="User" />
            <p className='login'>Login</p>
        </button>
      </div>
    </header>
  )
}

export default Header