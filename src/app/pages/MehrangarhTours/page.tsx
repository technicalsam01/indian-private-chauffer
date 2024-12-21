import React from 'react';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <div className="bg-gray-100">
      {/* Menu Section */}
      <MenuOne props="bg-transparent" />

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/27880128/pexels-photo-27880128/free-photo-of-a-woman-looking-out-over-a-city-from-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        aria-label="View from Mehrangarh Fort over Jodhpur city"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-snug">
            Mehrangarh Fort Tour: Discover the Rich History of Jodhpur
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Explore the majestic Mehrangarh Fort, one of Rajasthan&apos;s largest and most beautiful forts, perched on a rocky hill overlooking the Blue City of Jodhpur. Delve into history, culture, and royal architecture on this unforgettable tour.
          </p>
        </div>
      </section>

      {/* Tour Description Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">
            Why Choose the <strong className="text-[#d48735]">Mehrangarh Fort</strong> Tour?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mehrangarh Fort is a historical marvel located in the heart of Jodhpur, Rajasthan. Built in 1459 by Rao Jodha, this massive fort boasts stunning views of the surrounding desert landscapes and the iconic &quot;Blue City&quot; below. With its rich history, intricate architecture, and fascinating museums, this tour will take you back to the grandeur of Rajasthan&apos;s royal era.
          </p>
        </div>
      </section>

      {/* Fort Highlights Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Tour <strong className="text-[#d48735]">Highlights</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Highlight 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Jodhpur City Views</h3>
              <p className="text-gray-600">
                From the fort&apos;s ramparts, enjoy panoramic views of the &quot;Blue City&quot; of Jodhpur. The striking contrast of white walls against the blue-painted houses below is a photographer&apos;s dream.
              </p>
            </div>
            {/* Highlight 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Museum and Artifacts</h3>
              <p className="text-gray-600">
                Explore the Mehrangarh Museum, home to an extensive collection of artifacts, royal palanquins, weapons, and paintings, showcasing the rich cultural heritage of Rajasthan.
              </p>
            </div>
            {/* Highlight 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Architectural Wonders</h3>
              <p className="text-gray-600">
                Marvel at the fort&apos;s incredible architecture, with its intricately carved windows, imposing gates, and exquisite courtyards that reflect Rajasthan&apos;s royal grandeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What Our <strong className="text-[#d48735]">Guests </strong> Say
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">&quot;An incredible experience! Mehrangarh Fort is absolutely stunning, and the views from the top are unforgettable. Highly recommend this tour!&quot;</p>
              <p className="mt-4 font-semibold text-gray-800">– Arvind S.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">&quot;The fort is a must-see in Jodhpur. The architecture and the history are fascinating. Our guide was amazing and made the experience so much more enjoyable.&quot;</p>
              <p className="mt-4 font-semibold text-gray-800">– Priya K.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">&quot;An awe-inspiring monument! We loved every moment of the tour and the historical facts shared by the guide. Don&apos;t miss this tour!&quot;</p>
              <p className="mt-4 font-semibold text-gray-800">– Ramesh P.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-black py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Explore <strong className="text-[#d48735]">Mehrangarh Fort?</strong>
        </h2>
        <p className="text-xl mb-6">
          Book your Mehrangarh Fort Tour today and experience the history, culture, and grandeur of one of Rajasthan&apos;s most iconic landmarks!
        </p>
        <a href="/pages/contact" className="bg-[#a0a5a8] text-blue-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#b2732b] cursor-pointer transition-all duration-300">
          Book Now
        </a>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;
