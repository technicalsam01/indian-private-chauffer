import React from 'react';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
    return (
        <div id="footer" className="footer bg-surface py-[40px]">
            <div className="container mx-auto px-4">
                <div className="content-footer flex flex-col lg:flex-row justify-between gap-y-6 lg:gap-y-0 lg:gap-x-8">

                    {/* Company Info Section */}
                    <div className="company-info flex-1 lg:max-w-[25%] max-lg:basis-full pr-7 lg:pr-0">
                        <div className="heading4 font-bold text-lg">Quick Contact</div>
                        <div className="flex gap-4 mt-3">
                            <div className="flex flex-col space-y-1"> {/* Reduced space-y to 1 */}
                                <span className="text-button">Email :</span>
                                <span className="text-button">Phone :</span>
                                <span className="text-button">Address:</span>
                            </div>
                            <div className="flex flex-col space-y-1"> {/* Reduced space-y to 1 */}
                                <span className="text-base">skystarjpr@yahoo.co.in</span>
                                <span className="text-base">+91 9799866326</span>
                                <span className="text-base">25, Keshar Nagar, 200ft. Bypass, Bajri Mandi Road Panchwayala, Vaishali Nagar, Jaipur -302034</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Section (Links & Newsletter) */}
                    <div className="right-content flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-8 flex-1 max-lg:basis-full">

                        {/* Information Links */}
                        <div className="list-nav flex flex-col lg:basis-1/3 gap-2">
                            <div className="text-button-uppercase font-semibold">Information</div>
                            <Link className="caption1 has-line-before duration-300 w-fit" href="/pages/contact">
                                Contact Us
                            </Link>
                        </div>

                        {/* Newsletter Section */}
                        <div className="newsletter flex flex-col lg:basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                            <div className="text-button-uppercase font-semibold">Stay Updated with Our Travel Insights</div>
                            <div className="caption1 mt-3">
                                Sign up for our newsletter to receive the latest travel tips, destination updates, and exclusive tour offers.
                            </div>

                            <div className="input-block w-full h-[52px] mt-4">
                                <form className="w-full h-full relative" action="post">
                                    <input
                                        type="email"
                                        placeholder="Enter your e-mail"
                                        className="caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                    <button className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                                        <Icon.ArrowRight size={24} color="#fff" />
                                    </button>
                                </form>
                            </div>

                            {/* Social Media Links */}
                            <div className="list-social flex items-center gap-6 mt-4">
                                <Link href="https://www.facebook.com/skystarjpr" target="_blank">
                                    <div className="icon-facebook text-2xl text-black" />
                                </Link>
                                <Link href="https://www.instagram.com/" target="_blank">
                                    <div className="icon-instagram text-2xl text-black" />
                                </Link>
                                <Link href="https://www.twitter.com/" target="_blank">
                                    <div className="icon-twitter text-2xl text-black" />
                                </Link>
                                <Link href="https://youtu.be/VrKwfeikDoo?si=JHoKrvFT-10y8rKW" target="_blank">
                                    <div className="icon-youtube text-2xl text-black" />
                                </Link>
                                <Link href="https://www.pinterest.com/" target="_blank">
                                    <div className="icon-pinterest text-2xl text-black" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-600">
                    <span>&copy; 2024 SkyStar, All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
