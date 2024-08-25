import React from 'react';
import Banner1 from '../../assets/images/1 (2).jpg';
import Banner2 from '../../assets/images/10.jpg';
import Banner3 from '../../assets/images/5.jpg';

import './style.css';
import Image from 'next/image';

const Banners = ()=>{
    return(
        <div className='bannerSection'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='box'>
                            <Image src={Banner1} className='w-100 transition'  alt="banner img"/>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <Image src={Banner2} className='w-100 transition' alt="banner img" />
                        </div>
                    </div>

                    <div className='col'>
                        <div className='box'>
                            <Image src={Banner3} className='w-100 transition' alt="banner img" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Banners;