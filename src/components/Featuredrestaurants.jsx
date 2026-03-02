import './Featuredrestaurants.css';
import restaurant1 from '../assets/restaurant1.png';
import bluelogo from '../assets/bluelogo.png';
import star from '../assets/star.png';
import restaurant2 from '../assets/restaurant2.png';
import restaurant3 from '../assets/restaurant3.png';
import restaurant4 from '../assets/restaurant4.png';    
import restaurant2logo from '../assets/restaurant2logo.png';
import restaurant3logo from '../assets/restaurant3logo.png';
import restaurant4logo from '../assets/restaurant4logo.png';
import restaurant5logo from '../assets/restaurant5logo.png';
import restaurant6logo from '../assets/restaurant6logo.png';
import restaurant7logo from '../assets/restaurant7logo.png';
import restaurant8logo from '../assets/restaurant8logo.png';
import restaurant5 from '../assets/restaurant5.png';
import restaurant6 from '../assets/restaurant6.png';
import restaurant7 from '../assets/restaurant7.png';
import restaurant8 from '../assets/restaurant8.png';
import tag from '../assets/tag.png';
import clock from '../assets/clock.png';

function Featuredrestaurants() {
  return (
    <div className='featuredrestaurants'>
        <h1>Featured Restaurants</h1>
        <div className='featuredwrapper'> 
            <div className='toprow'>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant1} alt='restaurant1' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>20% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={bluelogo} alt='bluelogo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Food World</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>46</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard22'>
                            <p>Opens Tomorrow</p>
                        </div>
                    </div>
                </div>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant2} alt='restaurant2' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>15% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={restaurant2logo} alt='restaurant2logo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Pizzahub</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>40</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard22'>
                            <p>Opens Tomorrow</p>
                        </div>
                    </div>
                </div>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant3} alt='restaurant3' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>10% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={restaurant3logo} alt='restaurant3logo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Donuts Hut</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard23'>
                            <p>Open Now</p>
                        </div>
                    </div>
                </div>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant4} alt='restaurant4' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>15% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={restaurant4logo} alt='restaurant4logo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Donuts hut</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>50</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard24'>
                            <p>Open Now</p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='bottomrow'>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant5} alt='restaurant5' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>10% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={restaurant5logo} alt='restaurant5logo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Ruby Tuesday</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>26</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard23'>
                            <p>Open Now</p>
                        </div>
                    </div>
                </div>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant6} alt='restaurant6' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>25% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={restaurant6logo} alt='restaurant6logo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Kuakata Fried Chicken</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>53</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard24'>
                            <p>Open Now</p>
                        </div>
                    </div>
                </div>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant7} alt='restaurant7' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>10% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={restaurant7logo} alt='restaurant7logo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Red Square</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>45</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard25'>
                            <p>Open Now</p>
                        </div>
                    </div>
                </div>
                <div className='restaurantcard'>
                    <div className='restaurantcard1'>
                        <img src={restaurant8} alt='restaurant8' />
                        <div className='restaurantcard1tag'>
                            <img src={tag} alt='tag' />
                            <span>10% off</span>
                        </div>
                        <div className='restaurantcard1clock'>
                            <img src={clock} alt='clock' />
                            <span>Fast</span>
                        </div>
                    </div>
                    <div className='restaurantcard2'>   
                        <div className='restaurantcard21'>
                            <div className='restaurantcard211'>
                                <img src={restaurant8logo} alt='restaurant8logo' />
                            </div>
                            <div className='restaurantcard212'>
                                <div className='restaurantcard2121'>
                                    <p>Taco Bell</p>
                                </div>
                                <div className='restaurantcard2122'>
                                    <img src={star} alt='star' />
                                    <span>35</span>
                                </div>
                            </div>
                        </div>
                        <div className='restaurantcard26'>
                            <p>Open Now</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Featuredrestaurants