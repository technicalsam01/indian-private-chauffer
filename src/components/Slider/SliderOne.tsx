'use client'
import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';

const SliderOne = () => {
    return (
        <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] flex items-center justify-center">
            <div className="slider-main w-full">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="h-full relative"
                    autoplay={{
                        delay: 4000,
                    }}
                >
                    <SwiperSlide>
                        <div className="slider-item w-full relative mt-4">
                            <div className="container w-full h-full flex items-center justify-between relative">
                                <div className="text-content basis-1/2">
                                    <div className="text-sub-display">Explore Now! Up To 50% Off!</div>
                                    <div className="text-display md:mt-5 mt-2">
                                        Discover Destinations With <strong className='text-primary'>Tara Chandra ji</strong>
                                    </div>
                                </div>
                                <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] flex items-center justify-center bg-blue-500">
                                    <Image
                                        src={'/images/slider/4.jpg'}
                                        alt="bg1-2"
                                        width={1000}
                                        height={100}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center right',
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item h-full w-full relative mt-4">
                            <div className="container w-full h-full flex items-center justify-between relative">
                                <div className="text-content basis-1/2">
                                    <div className="text-sub-display">Explore Now! Up To 50% Off!</div>
                                    <div className="text-display md:mt-5 mt-2">
                                        Discover Destinations for Every <strong className='text-primary'>Traveler</strong>
                                    </div>
                                </div>
                                <div className="sub-img relative w-1/2 h-full flex justify-end items-center">
                                    <Image
                                        src={'/images/slider/slideTwo.jpeg'}
                                        alt="bg1-2"
                                        width={670}
                                        height={936}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center right',
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item h-full w-full relative mt-4">
                            <div className="container w-full h-full flex items-center justify-between relative">
                                <div className="text-content basis-1/2">
                                    <div className="text-sub-display">Explore Now! Up To 50% Off!</div>
                                    <div className="text-display md:mt-5 mt-2">
                                        Adventures <strong className="text-primary">Await</strong> All Year.
                                    </div>
                                </div>
                                <div className="sub-img relative w-1/2 h-full flex justify-end items-center">
                                    <Image
                                        src={'/images/slider/slideThree.jpeg'}
                                        alt="landing page photo"
                                        width={1000}
                                        height={1000}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center right',
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item h-full w-full relative mt-4">
                            <div className="container w-full h-full flex items-center justify-between relative">
                                <div className="text-content basis-1/2">
                                    <div className="text-sub-display">Explore Now! Up To 50% Off!</div>
                                    <div className="text-display md:mt-5 mt-2">
                                        Enjoy <strong className="text-primary">Desert</strong> tours
                                    </div>
                                </div>
                                <div className="sub-img relative w-1/2 h-full flex justify-end items-center">
                                    <Image
                                        src={'/images/slider/sliderFour.jpeg'}
                                        alt="landing page photo"
                                        width={1000}
                                        height={1000}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center right',
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item h-full w-full relative mt-4">
                            <div className="container w-full h-full flex items-center justify-between relative">
                                <div className="text-content basis-1/2">
                                    <div className="text-sub-display">Explore Now! Up To 50% Off!</div>
                                    <div className="text-display md:mt-5 mt-2">
                                        Visit <strong className="text-primary">Heritage</strong> locations 
                                    </div>
                                </div>
                                <div className="sub-img relative w-1/2 h-full flex justify-end items-center">
                                    <Image
                                        src={'/images/slider/sliderfive.jpg'}
                                        alt="landing page photo"
                                        width={1000}
                                        height={1000}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center right',
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SliderOne;
