import './Hero.css'
import bowl from '../assets/bowl.png'
import delivery from '../assets/delivery.png'
import pickup from '../assets/pickup.png'
import mapmarker2 from '../assets/mapmarker2.png'
import search2 from '../assets/search2.png'

function Hero() {
  return (
    <div className='hero'>

     <div className="hero-left">
        <div className='hero-text'>
            <p className='heroheading'>Are you starving?</p>
            <p className='heropara'>Within a few clicks, find meals that are accessible near you</p>
        </div>
        <div className='whitebox'>
            <div className='whiteboxtop'>
                <div className='delivery'>
                    <img src={delivery} alt="delivery" />
                    <p className='deliverytext'>Delivery</p>
                </div>
                <div className='pickup'>
                    <img src={pickup} alt="pickup" />
                    <p className='pickuptext'>Pickup</p>
                </div>
            </div>
            <div className='whiteboxbtm'>
                <div className='whiteboxinput'>
                    <img src={mapmarker2} alt="mapmarker2" />
                    <input className='whiteboxinputfield' type="text" placeholder='Enter your Address' />
                </div>
                <button className='whiteboxbtn'>
                    <img src={search2} alt="search2" />
                    <p className='findfood'>Find Food</p>
                </button>
            </div>
        </div>
     </div>


     <div className="hero-right">
        <img src={bowl} alt="bowl" className='bowl'/>
     </div>
    </div>
  )
}

export default Hero