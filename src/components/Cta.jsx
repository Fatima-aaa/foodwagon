import './Cta.css'
import cta from '../assets/cta.png';
import CHEVRONRIGHT from '../assets/CHEVRONRIGHT.png'

function Cta() {
  const handleOrder = () => {
    console.log('Proceeding to order')
    alert('Taking you to the order page...')
  }

  return (
    <div className='cta' style={{ backgroundImage: `url(${cta})` }}>
            <p>
                Are you ready to order with <br /> the best deals?
            </p>
            <button onClick={handleOrder}>PROCEED TO ORDER
              <img src={CHEVRONRIGHT} alt='chevron' />
            </button>
    </div>
  )
}

export default Cta