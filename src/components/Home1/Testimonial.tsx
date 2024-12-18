'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from '../Testimonial/TestimonialItem';
import { TestimonialType } from '@/type/TestimonialType'
import rating from '../../../public/images/tourTravel/rate.png'
import Tripadviser from '../../../public/images/tourTravel/tripadvisor-icon.png'

import Image from 'next/image';


interface Props {
    data: Array<TestimonialType>;
    limit: number;
}

const Testimonial: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="testimonial-block md:py-20 py-10 bg-surface">
                <div className="container">
                    <div className="heading3 text-center">
                        What <strong className='text-[#d48735]'>People</strong> Are Saying
                    </div>
                    <div className="list-testimonial pagination-mt40 md:mt-10 mt-6 flex flex-row">
                        <div className='flex flex-row mt-32 mr-10'>
                            <div>
                                <h2 className=''>EXCELLENG</h2>
                                <Image className='text-sm '
                                    alt='rating png image '
                                    src={'/images/tourTravel/rate.jpeg'}
                                    width={80}
                                    height={80}                            
                                    />
                                <p className=''>Based on <strong>100+review</strong></p>
                                <Image className='text-sm mr-5'
                                    alt='rating png image '
                                    src={'/images/tourTravel/tripadvisor-icon.jpeg'}
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            loop={true}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 2000,
                            }}
                            breakpoints={{
                                680: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {data.slice(0, limit).map((prd, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialItem data={prd} type='style-one' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial