import { useState } from 'react'
import './Footer.css'
import ig from '../assets/ig.png';
import fb from '../assets/fb.png';
import tweet from '../assets/tweet.png';
import envelope from '../assets/envelope.png'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email.trim()) {
      alert('Please enter your email')
      return
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email')
      return
    }
    console.log(`Subscribed with: ${email}`)
    alert(`Thank you for subscribing with: ${email}`)
    setEmail('')
  }

  const handleSocialClick = (platform) => {
    console.log(`Opening ${platform}`)
    alert(`Opening ${platform}...`)
  }

  const handleLinkClick = (link) => {
    console.log(`Navigating to: ${link}`)
    alert(`Navigating to: ${link}`)
  }

  const handleCityClick = (city) => {
    console.log(`Viewing restaurants in: ${city}`)
    alert(`Viewing restaurants in: ${city}`)
  }

  return (
    <div className='footer'>
        <div className='footer1'>
            <div className='footer11'>
                <p>Our Top Cities</p>
            </div>
            <div className='footer12'>
                <div className='footer121'>
                    <p onClick={() => handleCityClick('San Francisco')} style={{cursor: 'pointer'}}>San Francisco</p>
                    <p onClick={() => handleCityClick('Miami')} style={{cursor: 'pointer'}}>Miami</p>
                    <p onClick={() => handleCityClick('San Diego')} style={{cursor: 'pointer'}}>San Diego</p>
                    <p onClick={() => handleCityClick('East Bay')} style={{cursor: 'pointer'}}>East Bay</p>
                    <p onClick={() => handleCityClick('Long Beach')} style={{cursor: 'pointer'}}>Long Beach</p>
                </div>
                <div className='footer121'>
                    <p onClick={() => handleCityClick('Los Angeles')} style={{cursor: 'pointer'}}>Los Angeles</p>
                    <p onClick={() => handleCityClick('Washington DC')} style={{cursor: 'pointer'}}>Washington DC</p>
                    <p onClick={() => handleCityClick('Seattle')} style={{cursor: 'pointer'}}>Seattle</p>
                    <p onClick={() => handleCityClick('Portland')} style={{cursor: 'pointer'}}>Portland</p>
                    <p onClick={() => handleCityClick('Nashville')} style={{cursor: 'pointer'}}>Nashville</p>
                </div>
                <div className='footer121'>
                    <p onClick={() => handleCityClick('New York City')} style={{cursor: 'pointer'}}>New York City</p>
                    <p onClick={() => handleCityClick('Orange County')} style={{cursor: 'pointer'}}>Orange County</p>
                    <p onClick={() => handleCityClick('Atlanta')} style={{cursor: 'pointer'}}>Atlanta</p>
                    <p onClick={() => handleCityClick('Charlotte')} style={{cursor: 'pointer'}}>Charlotte</p>
                    <p onClick={() => handleCityClick('Denver')} style={{cursor: 'pointer'}}>Denver</p>
                </div>
                <div className='footer121'>
                    <p onClick={() => handleCityClick('Chicago')} style={{cursor: 'pointer'}}>Chicago</p>
                    <p onClick={() => handleCityClick('Phoenix')} style={{cursor: 'pointer'}}>Phoenix</p>
                    <p onClick={() => handleCityClick('Las Vegas')} style={{cursor: 'pointer'}}>Las Vegas</p>
                    <p onClick={() => handleCityClick('Sacramento')} style={{cursor: 'pointer'}}>Sacramento</p>
                    <p onClick={() => handleCityClick('Oklahoma City')} style={{cursor: 'pointer'}}>Oklahoma City</p>
                </div>
                <div className='footer121'>
                    <p onClick={() => handleCityClick('Columbus')} style={{cursor: 'pointer'}}>Columbus</p>
                    <p onClick={() => handleCityClick('New Mexico')} style={{cursor: 'pointer'}}>New Mexico</p>
                    <p onClick={() => handleCityClick('Albuquerque')} style={{cursor: 'pointer'}}>Albuquerque</p>
                    <p onClick={() => handleCityClick('East Bay')} style={{cursor: 'pointer'}}>East Bay</p>
                    <p onClick={() => handleCityClick('New Orleans')} style={{cursor: 'pointer'}}>New Orleans</p>
                </div>
            </div>
        </div>
        <div className='footer2'>
            <div className='footer21'>
                <div className='footer211'>
                    <h1>Company</h1>
                    <p onClick={() => handleLinkClick('About us')} style={{cursor: 'pointer'}}>About us</p>
                    <p onClick={() => handleLinkClick('Team')} style={{cursor: 'pointer'}}>Team</p>
                    <p onClick={() => handleLinkClick('Careers')} style={{cursor: 'pointer'}}>Careers</p>
                    <p onClick={() => handleLinkClick('Blog')} style={{cursor: 'pointer'}}>Blog</p>
                </div>
                <div className='footer211'>
                    <h1>Contact</h1>
                    <p onClick={() => handleLinkClick('Help and Support')} style={{cursor: 'pointer'}}>Help and Support</p>
                    <p onClick={() => handleLinkClick('Partner with us')} style={{cursor: 'pointer'}}>Partner with us</p>
                    <p onClick={() => handleLinkClick('Ride with us')} style={{cursor: 'pointer'}}>Ride with us</p>
                </div>
                <div className='footer211'>
                    <h1>Legal</h1>
                    <p onClick={() => handleLinkClick('Terms and conditions')} style={{cursor: 'pointer'}}>Terms and conditions</p>
                    <p onClick={() => handleLinkClick('Refund and cancellation')} style={{cursor: 'pointer'}}>Refund and cancellation</p>
                    <p onClick={() => handleLinkClick('Privacy policy')} style={{cursor: 'pointer'}}>Privacy policy</p>
                    <p onClick={() => handleLinkClick('Cookie policy')} style={{cursor: 'pointer'}}>Cookie policy</p>
                </div>
            </div>
            <div className='footer22'>
                <div className='footer221'>
                    <p>FOLLOW US</p>
                </div>
                <div className='footer222'>
                    <img src={ig} alt='ig' onClick={() => handleSocialClick('Instagram')} style={{cursor: 'pointer'}} />
                    <img src={fb} alt='fb' onClick={() => handleSocialClick('Facebook')} style={{cursor: 'pointer'}} />
                    <img src={tweet} alt='tweet' onClick={() => handleSocialClick('Twitter')} style={{cursor: 'pointer'}} />
                </div>
                <div className='footer223'>
                    <p>Receive exclusive offers in your mailbox</p>
                </div>
                <div className='footer224'>
                    <div className='footer2241'>
                        <img src={envelope} alt='envelope' />
                        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()} />
                    </div>
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='footerend'>
                <div className='footerend1'>
                    <p>All rights reserved © <b>Your Company, 2021</b></p>
                </div>
                <div className='footerend2'>
                    <p>Made with ❤️ by <b>Themewagon</b></p>
                </div>
        </div>
    </div>
  )
}

export default Footer