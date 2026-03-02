import './Cta.css'
import cta from '../assets/cta.png';
import CHEVRONRIGHT from '../assets/CHEVRONRIGHT.png'

function Cta() {
  return (
    <div className='cta' style={{ backgroundImage: `url(${cta})` }}>
            <p>
                Are you ready to order with <br /> the best deals? 
            </p>
            <button>PROCEED TO ORDER
              <img src={CHEVRONRIGHT} alt='chevron' />
            </button>
    </div>
  )
}

export default Cta