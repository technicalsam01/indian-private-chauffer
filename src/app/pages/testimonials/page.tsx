'use client'
import { useState } from 'react';
import Image from 'next/image';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';

const testimonials = [
  {
    id: 1,
    name: "Amitabh Bachchan",
    image: "/images/gallery/Amitabh.jpg", // Ensure this path is correct
    content: `Dear Sir,

      I had the pleasure of being driven by your company’s car and driver “Shri Tara Chand Sharma”, during my stay in Jaipur recently.

      I found him a very courteous and disciplined chauffeur. I was very satisfied with his service.

      October 22, 1997 Amitabh Bachchan, Pratiksha, 10th North-South Road, Juhu-Parle Scheme, Bombay 400049`,
    date: "October 22, 1997",
  },
  {
        id: 2,
        name: "Christiane Miserez",
        image: "/images/gallery/Happy.png", 
        content: `Dear Tarachand,
    
          Thank you for the good travel in India. You are a very good conductor in the crazy traffic of India…!!! We stay of course in contact.
    
          Best wishes and many kisses to your beautiful family!!!
    
          Christiane Miserez, St. Stevens Woluwe, Belgium`,
        date: "Date not provided",
      },
      {
        id: 3,
        name: "Jacques and Marine Bossicard",
        image: "/images/gallery/Happy.png",
        content: `Dear Tarachand,
    
          How are you doing??? It’s a pleasure to send you this package with the glasses and all. Feel free to test the lenses. One for you and another for your father.
    
          Everything is doing great. I hope all your family is also doing OK.
    
          Best friendship,
          Jacques and Marine Bossicard. From Belgium.`,
        date: "Date not provided",
      },
      {
        id: 4,
        name: "Thomas R. Trumble and Donald Shaw",
        image: "/images/gallery/Happy.png",
        content: `Dear Tarachand,
    
          Donald H. Shaw and I (Thomas R. Trumble) want to thank you very much for the ride you gave us yesterday, 25 October, 2006 from Agra to Jaipur.
    
          Your driving was extremely safe in the middle of much confusion on the highway (construction, camel-drawn carts, scooters, etc.), and you were friendly, helpful, courteous, and very professional. It was apparent to us your primary concern was to get us safely and in a timely manner from Agra to Jaipur.
    
          Thank you again for a job well done.
    
          Sincerely, 
          Thomas R. Trumble and Donald Shaw. 26 October 2006`,
        date: "October 25, 2006",
      },
      {
        id: 5,
        name: "David. R. Brown",
        image: "/images/gallery/Happy.png",
        content: `We were very pleased with the bus. It was clean and well presented.
    
          Tara took us to all the locations we requested. He was excellent and satisfied our needs.
    
          Tara drove well, safely, was on time, always did what was requested, and waited patiently when we were late. He was always cheerful and provided excellent service.
    
          I will happily recommend Tara and your coach to any visitor to India. We have had an excellent time.`,
        date: "September 13, 2003",
      },
  // Other testimonials...
];

const Testimonials = () => {
  return (
    <>
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Customer Testimonials" subHeading="What Our Clients Say" />
      </div>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Our <strong className='text-[#d48735]'>Client&apos;s</strong> Stories</h2>
          
          {/* Amitabh Bachchan's Testimonial */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
            <div className="flex items-center mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                {testimonials[0].image ? (
                  <Image
                    src={testimonials[0].image}
                    alt="Amitabh Bachchan"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-white">No Image</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{testimonials[0].name}</h3>
                <p className="text-gray-500 text-sm">{testimonials[0].date}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonials[0].content}</p>
          </div>

          {/* Other Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-white">No Image</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Testimonials;
