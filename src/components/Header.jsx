import './Header.css'
import logo from '../assets/Logo.png'
import mapmarker from '../assets/mapmarker.png'
import search from '../assets/search.png'
import user from '../assets/user.png'

function Header() {
  const handleSearch = () => {
    const query = prompt('What would you like to search for?')
    if (query) {
      console.log(`Searching for: ${query}`)
      alert(`Searching for: ${query}`)
    }
  }

  const handleLogin = () => {
    console.log('Login clicked')
    alert('Login functionality coming soon!')
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="header">

      <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
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
        <div className='searchbtn' onClick={handleSearch} style={{ cursor: 'pointer' }}>
            <button className='searchbtnicon'><img src={search} alt="Search" /></button>
            <p className='searchfood'>Search Food</p>
        </div>
        <button className='loginbtn' onClick={handleLogin}>
            <img src={user} alt="User" />
            <p className='login'>Login</p>
        </button>
      </div>
    </header>
  )
}

export default Header