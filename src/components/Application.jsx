import './Application.css';
import appicon1 from '../assets/appicon1.png';
import appicon2 from '../assets/appicon2.png';
import appicon3 from '../assets/appicon3.png';
import application from '../assets/application.png';
import googleplay from '../assets/googleplay.png';
import apple from '../assets/apple.png';

function Application() {
  return (
    <div className='application'>
        <div className='apptop'>
                <div className='card1'>
                    <div className='card11'>
                        <img src={appicon1} alt='appicon1' />
                    </div>
                    <p className='card12'>Daily <br /> Discounts</p>
                </div>
                <div className='card1'>
                    <div className='card11'>
                        <img src={appicon2} alt='appicon2' />
                    </div>
                    <p className='card12'>Live <br/> Tracking</p>
                </div>
                <div className='card1'>
                    <div className='card11'>
                        <img src={appicon3} alt='appicon3' />
                    </div>
                    <p className='card12'>Quick <br/> Delivery</p>
                </div>
        </div>
        <div className='appbottom'>
            <div className='appbottomleft'>
                <img src={application} alt='application' />
            </div>
            <div className='appbottomright'>
                    <p className='appbottomrightp1'>Install the app</p>
                    <p className='appbottomrightp2'>It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p>
                    <div className='appbottomrightbuttons'>
                        <button className='appbottomrightbutton1'>
                            <img src={googleplay} alt='googleplay' />
                            <div className='appbottomrightbutton1desc'>
                                <p className='appbtmrgtbtn1p1'>GET IT ON</p>
                                <p className='appbtmrgtbtn1p2'>Google Play</p>
                            </div>
                        </button>
                        <button className='appbottomrightbutton2'>
                            <img src={apple} alt='apple' />
                            <div className='appbottomrightbutton2desc'>
                                <p className='appbtmrgtbtn2p1'>DOWNLOAD ON THE</p>
                                <p className='appbtmrgtbtn2p2'>Apple Store</p>
                            </div>
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Application