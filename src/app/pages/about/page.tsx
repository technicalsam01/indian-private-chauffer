'use client'
import React from 'react'
import Image from 'next/image'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Footer from '@/components/Footer/Footer'

const AboutUs = () => {
    return (
        <>
            <MenuOne props="bg-transparent" />
            <section className="relative w-full h-[500px] md:h-[600px]">
                <Image
                    src="/images/gallery/landscape.jpeg"
                    alt="Rajasthan Landscape"
                    fill
                    priority
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
                        Explore the Beauty of Rajasthan
                    </h1>
                    <p className="text-lg md:text-2xl font-light drop-shadow-md">
                        Journey through the pink city, golden sands, and historic forts of Rajasthan.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto text-center px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex justify-center items-center">
                            <Image
                                src="/images/gallery/aboutUs.jpeg"
                                alt="Jaipur City View"
                                width={500}
                                height={300}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                src="/images/gallery/aboutUs2.jpeg"
                                alt="Rajasthan Desert"
                                width={500}
                                height={300}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                    <p className="text-lg md:text-2xl font-light mt-10 max-w-3xl mx-auto">
                        <strong className='text-[#d48735]'>IndianPrivateChauffer</strong> offers customized travel services throughout Rajasthan. Whether you&apos;re exploring the pink city of Jaipur, the majestic desert of Jaisalmer, or the serene landscapes of Udaipur, we are dedicated to providing a luxurious and comfortable travel experience with a personal touch.
                    </p>

                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-6">
                        Meet the Owner <strong className='text-[#d48735]'>Tarachandra &apos;Ji&apos;</strong>
                    </h2>
                    <div className="flex justify-center items-center mb-8">
                        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src="/images/slider/4.jpg"
                                alt="Tarachandra Ji"
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto">
                        Tarachandra &apos;Ji&apos;, the founder of IndianPrivateChauffer, is a seasoned professional with over 15 years of experience in the travel and hospitality industry. His passion for Rajasthan’s rich culture and his commitment to delivering exceptional customer service are the driving forces behind the success of this service. Tarachandra &apos;Ji&apos; personally oversees each tour to ensure a safe, comfortable, and unforgettable experience for every traveler.
                    </p>
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto">
                        Our mission at <strong className='text-[#d48735]'>IndianPrivateChauffer</strong> is to offer more than just a ride. We believe in creating unforgettable memories by curating personalized experiences that showcase the vibrant culture, history, and beauty of Rajasthan. We are committed to responsible tourism that respects both the environment and local traditions.
                    </p>
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-6">
                        What Our Clients Say
                    </h2>
                    <div className="flex justify-center items-center">
                        <div className="max-w-3xl mx-auto">
                            <blockquote className="text-xl font-light italic text-gray-600 mb-4">
                                &quot;Traveling with <strong className='text-[#d48735]'>IndianPrivateChauffer</strong> was a fantastic experience. <strong className='text-[#d48735]'>Tarachandra &apos;Ji&apos;</strong> personal touch and attention to detail made our journey through Rajasthan seamless and unforgettable. Highly recommend!&quot;
                            </blockquote>

                            <p className="text-lg font-semibold text-blue-600">— Hitesh Kumar, Jaipur</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AboutUs
