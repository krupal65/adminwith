"use client"
import React from 'react';
import './footer.css';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
import Logo from '../../assets/images/logo.svg';
import Link from 'next/link';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../../components/newsletter/index';
import NewsletterImg from '../../assets/images/kk.jpg';
import Image from 'next/image';

const Footer = () => {
    return (
        <>

            <section className='newsLetterSection'>
                <div className='container-fluid'>
                    <div className='box d-flex align-items-center'>
                        <div className='info'>
                            <h2>Stay home & get your  <br />needs from our shop</h2>
                            <p>Start You'r Shopping with We</p>
                            <br /><br className='res-hide' />
                            <Newsletter />
                        </div>

                        <div className='img'>
                            <Image src={NewsletterImg} className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><Image src={Icon1} /></span>
                                    <div className='info'>
                                        <h4>Best prices & offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><Image src={Icon2} /></span>
                                    <div className='info'>
                                        <h4>Free delivery</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><Image src={Icon3} /></span>
                                    <div className='info'>
                                        <h4>Great daily deal</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><Image src={Icon4} /></span>
                                    <div className='info'>
                                        <h4>Wide assortment</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><Image src={Icon5} /></span>
                                    <div className='info'>
                                        <h4>Easy returns</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                {/* <Link href='/'><Image src={Logo} /></Link> */}
                                <br /><br />
                                <p>Awesome grocery store website template</p>
                                <br />

                                <p><LocationOnOutlinedIcon /> <strong>Address</strong>: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                                <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) - 540-025-124553 </p>
                                <p><EmailOutlinedIcon /> <strong>Email:</strong> sale@Nest.com</p>
                                <p><WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>INTENSE JEWELS</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link href="#">About Us</Link></li>
                                            <li><Link href="#">Review</Link></li>
                                            <li><Link href="#">Certification</Link></li>
                                            {/* <li><Link href="#">Terms &amp; Conditions</Link></li> */}
                                            <li><Link href="#">Contact Us</Link></li>
                                            {/* <li><Link href="#">Support Center</Link></li>
                                            <li><Link href="#">Careers</Link></li> */}
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>EXPLORE</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
      
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            <li><Link href="#">Terms &amp; Conditions</Link></li>
                                            <li><Link href="#">Payment plans</Link></li>
                                            <li><Link href="#">Return & Exchange</Link></li>
                                            <li><Link href="#">Shipping and Delivery</Link></li>
                                        </ul>
                                    </div>


                                    {/* <div className='col'>
                                        <h3>Corporate</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link href="#">About Us</Link></li>
                                            <li><Link href="#">Delivery Information</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            <li><Link href="#">Terms &amp; Conditions</Link></li>
                                            <li><Link href="#">Contact Us</Link></li>
                                            <li><Link href="#">Support Center</Link></li>
                                            <li><Link href="#">Careers</Link></li>
                                        </ul>
                                    </div> */}


                                    {/* <div className='col'>
                                        <h3>Popular</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link href="#">About Us</Link></li>
                                            <li><Link href="#">Delivery Information</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            <li><Link href="#">Terms &amp; Conditions</Link></li>
                                            <li><Link href="#">Contact Us</Link></li>
                                            <li><Link href="#">Support Center</Link></li>
                                            <li><Link href="#">Careers</Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                <h3>Install App</h3>
                                <br className='res-hide'/>
                                <p>From App Store or Google Play</p>

                                <div className='d-flex'>
                                    <Link href={''}><Image src={appStore} width={150} /></Link>
                                    <Link href={''}><Image src={googlePlay} className='mx-2' width={150} /></Link>
                                </div>

                                <br />

                                <p>Secured Payment Gateways</p>
                                <Image src={paymentImage} />
                            </div>

                        </div>


                        <hr />



                        <div className='row lastStrip'>
                            <div className='col-md-3 part_1'>
                                <p>© 2022, Nest - HTML Ecommerce Template
                                    All rights reserved</p>
                            </div>

                            <div className='col-md-6 d-flex part_2'>
                                <div className='m-auto d-flex align-items-center phWrap'>
                                    <div className='phNo d-flex align-items-center mx-5'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>

                                    <div className='phNo d-flex align-items-center  mx-5'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                            <Link href={''}><FacebookOutlinedIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><TwitterIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><InstagramIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link href={''}><YouTubeIcon /></Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;