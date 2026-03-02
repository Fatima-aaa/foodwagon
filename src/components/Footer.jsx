import './Footer.css'
import ig from '../assets/ig.png';
import fb from '../assets/fb.png';
import tweet from '../assets/tweet.png';
import envelope from '../assets/envelope.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer1'>
            <div className='footer11'>
                <p>Our Top Cities</p>
            </div>
            <div className='footer12'>
                <div className='footer121'>
                    <p>San Francisco</p>
                    <p>Miami</p>
                    <p>San Diego</p>
                    <p>East Bay</p>
                    <p>Long Beach</p>
                </div>
                <div className='footer121'>
                    <p>Los Angeles</p>
                    <p>Washington DC</p>
                    <p>Seattle</p>
                    <p>Portland</p>
                    <p>Nashville</p>
                </div>
                <div className='footer121'>
                    <p>New York City</p>
                    <p>Orange County</p>
                    <p>Atlanta</p>
                    <p>Charlotte</p>
                    <p>Denver</p>
                </div>
                <div className='footer121'>
                    <p>Chicago</p>
                    <p>Phoenix</p>
                    <p>Las Vegas</p>
                    <p>Sacramento</p>
                    <p>Oklahoma City</p>
                </div>
                <div className='footer121'>
                    <p>Columbus</p>
                    <p>New Mexico</p>
                    <p>Albuquerque</p>
                    <p>East Bay</p>
                    <p>New Orleans</p>
                </div>
            </div>
        </div>
        <div className='footer2'>
            <div className='footer21'>
                <div className='footer211'>
                    <h1>Company</h1>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>
                <div className='footer211'>
                    <h1>Contact</h1>
                    <p>Help and Support</p>
                    <p>Partner with us</p>
                    <p>Ride with us</p>
                </div>
                <div className='footer211'>
                    <h1>Legal</h1>
                    <p>Terms and conditions</p>
                    <p>Refund and cancellation</p>
                    <p>Privacy policy</p>
                    <p>Cookie policy</p>
                </div>
            </div>
            <div className='footer22'>
                <div className='footer221'>
                    <p>FOLLOW US</p>
                </div>
                <div className='footer222'>
                    <img src={ig} alt='ig' />
                    <img src={fb} alt='fb' />
                    <img src={tweet} alt='tweet' />
                </div>
                <div className='footer223'>
                    <p>Receive exclusive offers in your mailbox</p>
                </div>
                <div className='footer224'>
                    <div className='footer2241'>
                        <img src={envelope} alt='envelope' />
                        <input type='text' placeholder='Enter your email' />
                    </div>
                    <button>Subscribe</button>
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