import './Details.css'
import details1 from '../assets/details1.png';
import details2 from '../assets/details2.png';
import details3 from '../assets/details3.png';
import CHEVRONRIGHT from '../assets/CHEVRONRIGHT.png'

function Details() {
  return (
    <div className='details'>
        <div className='details1'>
            <div className='details1a'>
                <h1> Best Deals
                    <span style={{color:'#F59500'}}> Crispy Sandwitches</span>
                </h1>
                <p>Enjoy the large size of sandwiches. Complete 
                perfect slice of sandwiches.</p>
                <button>
                    PROCEED TO ORDER
                    <img src={CHEVRONRIGHT} alt='chevron' />
                </button>
            </div>
            <div className='details1b'>
                <img src={details1} alt='details1' />
            </div>
        </div>
        <div className='details2'>
            <div className='details2b'>
                <img src={details2} alt='details2' />
            </div>
            <div className='details1a'>
                <h1> Celebrate parties with
                    <span style={{color:'#F59500'}}> Fried Chicken</span>
                </h1>
                <p>Enjoy the large size of sandwiches. Complete 
                perfect slice of sandwiches.</p>
                <button>
                    PROCEED TO ORDER
                    <img src={CHEVRONRIGHT} alt='chevron' />
                </button>
            </div>
        </div>
        <div className='details3'>
            <div className='details1a'>
                <h1> Wanna eat hot & spicy
                    <span style={{color:'#F59500'}}> Pizza?</span>
                </h1>
                <p>Enjoy the large size of sandwiches. Complete 
                perfect slice of sandwiches.</p>
                <button>
                    PROCEED TO ORDER
                    <img src={CHEVRONRIGHT} alt='chevron' />
                </button>
            </div>
            <div className='details1b'>
                <img src={details3} alt='details3' />
            </div>
        </div>
    </div>
  )
}

export default Details