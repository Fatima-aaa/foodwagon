import './Featured.css';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';  


function Featured() {
  return (
    <div className='featured'>
      <div className='innerfeatured'>
        <div className='productcard'>
          <div className='productcard1'>
            <img className='product-img' src={product1} alt='product1' />
            <div className='discount-badge'>
              <div className='fifteen'>
                15
              </div>
              <div>
                <p className='percent'>%</p>
                <p className='off'>off</p>
              </div>
            </div>
          </div>
          <div className='productcard2'>
            <p className='greysvage'>Greys Vage</p>
            <p className='daysremaining'>6 Days Remaining</p>
          </div>
        </div>
        <div className='productcard'>
          <div className='productcard1'>
            <img className='product-img' src={product2} alt='product2' />
            <div className='discount-badge'>
              <div className='fifteen'>
                10
              </div>
              <div>
                <p className='percent'>%</p>
                <p className='off'>off</p>
              </div>
            </div>
          </div>
          <div className='productcard2'>
            <p className='greysvage'>Greys Vage</p>
            <p className='daysremaining'>6 Days Remaining</p>
          </div>
        </div>
        <div className='productcard'>
          <div className='productcard1'>
            <img className='product-img' src={product3} alt='product3' />
            <div className='discount-badge'>
              <div className='fifteen'>
                25
              </div>
              <div>
                <p className='percent'>%</p>
                <p className='off'>off</p>
              </div>
            </div>
          </div>
          <div className='productcard2'>
            <p className='greysvage'>Greys Vage</p>
            <p className='daysremaining'>7 Days Remaining</p>
          </div>
        </div>
        <div className='productcard'>
          <div className='productcard1'>
            <img className='product-img' src={product4} alt='product4' />
            <div className='discount-badge'>
              <div className='fifteen'>
                20
              </div>
              <div>
                <p className='percent'>%</p>
                <p className='off'>off</p>
              </div>
            </div>
          </div>
          <div className='productcard2'>
            <p className='greysvage'>Greys Vage</p>
            <p className='daysremaining'>8 Days Remaining</p>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Featured