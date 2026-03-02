import './Popularitems.css';
import mapmarker from '../assets/mapmarker.png';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import item4 from '../assets/item4.png';
import item5 from '../assets/item5.png';
import arrleft from '../assets/arrleft.png';
import arrright from '../assets/arrright.png';

function Popularitems() {
  return (
    <div className='popularitems'>
        <div className='wrapper'>
            <div className='popularitemstitle'>
                <p>Popular Items</p>
            </div>
            <div className='popularitemscontainer'>
                <button className='arrowleft'>
                    <img src={arrleft} alt='arrowleft' />
                </button>
            <div className='popularitemslist'>
                <div className='itemcard'>
                    <div className='itemcard1'>
                        <img className='itemcardimage' src={item1} alt='item1' />
                        <div className='itemcard1desc'>
                            <p className='itemcard1title'>Cheese Burger</p>
                            <span className='itemcard1restaurant'>
                             <img src={mapmarker} alt='mapmarker' /> 
                             <p>Burger Arena</p>
                            </span>
                            <span className='itemcard1price'>$ 3.88</span>
                        </div>
                    </div>  
                    <div className='itemcard2'>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className='itemcard'>
                    <div className='itemcard1'>
                        <img className='itemcardimage' src={item2} alt='item2' />
                        <div className='itemcard1desc'>
                            <p className='itemcard1title'>Dancake</p>
                            <span className='itemcard1restaurant'>
                            <img src={mapmarker} alt='mapmarker' /> 
                            Cake World
                            </span>
                            <span className='itemcard1price'>$ 1.99</span>
                        </div>
                    </div>  
                    <div className='itemcard2'>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className='itemcard'>
                    <div className='itemcard1'>
                        <img className='itemcardimage' src={item3} alt='item3' />
                        <div className='itemcard1desc'>
                            <p className='itemcard1title'>Toffe's Cake</p>
                            <span className='itemcard1restaurant'>
                            <img src={mapmarker} alt='mapmarker' /> 
                            Top Sticks
                            </span>
                            <span className='itemcard1price'>$ 4.00</span>
                        </div>
                    </div>  
                    <div className='itemcard2'>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className='itemcard'>
                    <div className='itemcard1'>
                        <img className='itemcardimage' src={item4} alt='item4' />
                        <div className='itemcard1desc'>
                            <p className='itemcard1title'>Crispy Sandwitch</p>
                            <span className='itemcard1restaurant'>
                            <img src={mapmarker} alt='mapmarker' /> 
                            Fastfood Dine
                            </span>
                            <span className='itemcard1price'>$ 3.00</span>
                        </div>
                    </div>  
                    <div className='itemcard2'>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className='itemcard'>
                    <div className='itemcard1'>
                        <img className='itemcardimage' src={item5} alt='item5' />
                        <div className='itemcard1desc'>
                            <p className='itemcard1title'>Thai Soup</p>
                            <span className='itemcard1restaurant'>
                            <img src={mapmarker} alt='mapmarker' /> 
                            Foody man
                            </span>
                            <span className='itemcard1price'>$ 2.79</span>
                        </div>
                    </div>  
                    <div className='itemcard2'>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
            <button className='arrowright'>
                    <img src={arrright} alt='arrowright' />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Popularitems