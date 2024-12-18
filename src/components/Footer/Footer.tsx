import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <>
            <div id="footer" className='footer'>
                <div className="footer-main bg-surface">
                    <div className="container">
                        <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
                            <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                                {/* <Link href={'/'} className="logo">
                                    <div className="heading4">IPC</div>
                                </Link> */}
                                <div className="heading4 ">Quick Contact</div>

                                <div className='flex gap-3 mt-3'>
                                    <div className="flex flex-col ">
                                        <span className="text-button">Mail:</span>
                                        <span className="text-button mt-3">Phone:</span>
                                        <span className="text-button mt-3">Address:</span>
            </div>
                                    <div className="flex flex-col ">
                                        <span className=''>skystarjpr@yahoo.co.in</span>
                                        <span className='flex flex-col'>
                                        <span className='mt-3'>+91-941 434 9229</span>  
                                        </span>                                           
                                        <span className='mt-3 pt-px'>s-4 raja-park , Tilak nagar jaipur,(Rajasthan)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                                <div className="list-nav flex  basis-2/3 max-md:basis-full gap-4">
                                    <div className="item flex flex-col basis-1/3 ">
                                        <div className="text-button-uppercase pb-3">Infomation</div>
                                        <Link className='caption1 has-line-before duration-300 w-fit' href={'/pages/contact'}>Contact us</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'#!'}>Career</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/my-account'}>My Account</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/order-tracking'}>Private Policy</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>Terms of Service</Link>
                                    </div>
                                    <div className="item flex flex-col basis-1/3 ">
                                        <div className="text-button-uppercase pb-3">Contact Us</div>
                                        <Link className='caption1 has-line-before duration-300 w-fit' href={'/pages/contact'}>Contact us</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'#!'}>FAQ</Link>
                                        <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/my-account'}>Get In Touch</Link>
                                    </div>
                                </div>
                                <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                                    <div className="text-button-uppercase">Newletter</div>
                                    <div className="caption1 mt-3">Sign up for our newsletter and get 10% off your first visit</div>
                                    <div className="input-block w-full h-[52px] mt-4">
                                        <form className='w-full h-full relative' action="post">
                                            <input type="email" placeholder='Enter your e-mail' className='caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line' required />
                                            <button className='w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1'>
                                                <Icon.ArrowRight size={24} color='#fff' />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="list-social flex items-center gap-6 mt-4">
                                        <Link href={'www.facebook.com/skystarjpr'} target='_blank'>
                                            <div className="icon-facebook text-2xl text-black"></div>
                  </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                            <div className="icon-instagram text-2xl text-black"></div>
                  </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                            <div className="icon-twitter text-2xl text-black"></div>
                </Link>
                                        <Link href={'https://youtu.be/VrKwfeikDoo?si=JHoKrvFT-10y8rKW'} target='_blank'>
                                            <div className="icon-youtube text-2xl text-black"></div>
                </Link>
                                        <Link href={'https://www.pinterest.com/'} target='_blank'>
                                            <div className="icon-pinterest text-2xl text-black"></div>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
                </div>
            </div>
    </>
    )
}

export default Footer