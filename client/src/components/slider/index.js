"use client"

import React, { useEffect, useContext} from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../assets/images/10.jpg';
import Slide2 from '../../assets/images/104.jpg';

import Newsletter from '../../components/newsletter/index';

import { MyContext } from '../../context/ThemeContext';
import Image from 'next/image';

const HomeSlider = () => {

    const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: context.windowWidth>992 ? true : false,
        autoplay:true
    };



    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <Image src={Slide1} className='w-100'  alt='slide'/>
                        <div className='info'>
                            <h2 class="mb-4">
                                Don’t miss amazing<br />
                                Jewellery deals
                            </h2>
                            <p>Every piece is expertly crafted for a look lasts a lifetime</p>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={Slide2} className='w-100 ' alt='slide' />
                        <div className='info'>
                            <h2 class="mb-3">
                                Just Perfect<br />
                                
                            </h2>
                            <p>Every piece is expertly crafted for a look lasts a lifetime </p>
                        </div>
                    </div>
                </Slider>

                

            </div>
        </section>
    )
}

export default HomeSlider;