'use client';

import Image from 'next/image';
import React from 'react';

const Benefit = () => {
    return (
        <div className="what-new-block bg-[#f9f9f9] py-10">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="heading text-center">
                    <div className="heading3 text-4xl font-bold sm:text-3xl text-black bg-[#f5f5f5] inline-block py-3 px-5 rounded-lg">
                        About <strong className='text-[#d48735]'>Rajasthan</strong>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center mt-10 md:mt-16 gap-10">
                    {/* Text Section */}
                    <div className="text-section w-full md:w-1/2 text-center md:text-left -mt-4">
                        <h2 className="text-2xl font-bold text-black sm:text-3xl">
                            About <br /> Incredible <strong className='text-secondary2'> Rajasthan</strong> 
                        </h2>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 px-2 md:px-0">
                            Rajasthan, often referred to as the &quot;Land of Kings,&quot; is a state that exudes timeless charm, steeped in rich history and vibrant culture. From the majestic palaces of Jaipur to the haunting beauty of the Thar Desert, Rajasthan offers a captivating blend of architectural wonders, colorful traditions, and breathtaking landscapes. The state is renowned for its royal heritage, with its forts and temples narrating tales of bravery and grandeur. Visitors are enchanted by its bustling markets, traditional dance forms like Ghoomar, and the hospitality of its people. Rajasthan is truly a place where the past and present merge, offering an unforgettable experience.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-section w-full md:w-1/2 flex justify-center">
                        <Image
                            src={'/images/tourTravel/aboutRajasthan.jpeg'}
                            alt="A view showcasing the beauty of Rajasthan"
                            width={800}
                            height={533}
                            className="rounded-xl shadow-lg w-full max-w-md md:max-w-none"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
