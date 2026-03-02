import './Process.css';
import iconlg from '../assets/iconlg.png';
import ring from '../assets/ring.png';
import donut from '../assets/donut.png';
import receipt from '../assets/receipt.png';

function Process() {
  return (
    <div className='process'>
        <div className='process1'>
            <h1>How does it work</h1>
        </div>
        <div className='process2'>
        <div className='processcard'>
            <div className='processcard1'>
                <img src={iconlg} alt='iconlg' />
            </div>
            <div className='processcard2'>
                <p className='processcard2title'>Title</p>
                <p className='processcard2descrp'>Choose the location where your food will be delivered.</p>
            </div>
        </div>
        <div className='processcard'>
            <div className='processcard1'>
                <img src={ring} alt='ring' />
            </div>
            <div className='processcard2'>
                <p className='processcard2title'>Choose order</p>
                <p className='processcard2descrp'>Check over hundreds of menus to pick your favorite food.</p>
            </div>
        </div>
        <div className='processcard'>
            <div className='processcard1'>
                <img src={receipt} alt='receipt' />
            </div>
            <div className='processcard2'>
                <p className='processcard2title'>Pay advanced</p>
                <p className='processcard2descrp'>It's quick, safe, and simple. Select several methods of payment.</p>
            </div>
        </div>
        <div className='processcard'>
            <div className='processcard1'>
                <img src={donut} alt='donut' />
            </div>
            <div className='processcard2'>
                <p className='processcard2title'>Enjoy meals</p>
                <p className='processcard2descrp'>Food is made and delivered directly to your home.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Process