import './Search.css'
import search1 from '../assets/search1.png';
import search21 from '../assets/search21.png';
import search3 from '../assets/search3.png';
import search4 from '../assets/search4.png';
import search5 from '../assets/search5.png';
import search6 from '../assets/search6.png';
import orgarr from '../assets/orgarr.png';
import arrright from '../assets/arrright.png';
import arrleft from '../assets/arrleft.png';

function Search() {
  return (
    <div className='search'>
        <div className='search1'>
                <p>Search By Food</p>
                <div className='searchbuttons'>
                    <button className='searchbuttonviewall'>
                        <p>View All</p>
                        <img src={orgarr} alt='orgarr' />
                    </button>
                    <button className='searchbuttonleft'>
                        <img src={arrleft} alt='arrleft' />
                    </button>
                    <button className='searchbuttonright'>
                        <img src={arrright} alt='arrright' />
                    </button>
                </div>
        </div>
        <div className='search2'>
            <div className='searchcard'>
                    <img src={search1} alt='search1' />
                    <p>Pizza</p>
            </div>  
            <div className='searchcard'>
                    <img src={search21} alt='search21'/>
                    <p>Burger</p>
            </div>
            <div className='searchcard'>
                    <img src={search3} alt='search3' />
                    <p>Noodles</p>
            </div>
            <div className='searchcard'>
                    <img src={search4} alt='search4' />
                    <p>Sub-sandwitch</p>
            </div>
            <div className='searchcard'>
                    <img src={search5} alt='search5' />
                    <p>Chowmein</p>
            </div>
            <div className='searchcard'>
                    <img src={search6} alt='search6' />
                    <p>Steak</p>
            </div>
        </div>   
    </div>
  )
}

export default Search