import React from 'react'
import MenuOne from '@/components/Header/Menu/MenuOne';
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <div className="bg-gray-100">
      <MenuOne props="bg-transparent" />

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/16007596/pexels-photo-16007596/free-photo-of-temple-ruins-ranthambore-fort-ranthambore-national-park-rajasthan-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-snug">
            Ranthambore Safari Tour: Experience Wildlife in Its Natural Habitat
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Embark on an unforgettable safari adventure through the iconic Ranthambore National Park. Spot majestic tigers, leopards, and other wildlife while exploring the rich biodiversity of this famous Indian jungle.
          </p>
        </div>
      </section>

      {/* Tour Description Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">
            Why Choose the <strong className='text-[#d48735]'>Ranthambore Safari</strong> Tour?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ranthambore National Park is one of the largest and most renowned national parks in India, known for its rich wildlife and scenic landscapes. On this thrilling safari tour, you&apos;ll have the chance to encounter the famous Royal Bengal Tiger, along with a variety of other wildlife such as leopards, wild boars, and exotic birds. Whether you&apos;re an avid wildlife photographer or a nature enthusiast, this tour promises an unforgettable adventure in the heart of Rajasthan.
          </p>
        </div>
      </section>

      {/* Safari Highlights Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Safari <strong className='text-[#d48735]'>Tour</strong> Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Highlight 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tiger Spotting</h3>
              <p className="text-gray-600">
                Ranthambore is famous for its Tiger population. Go on an exciting safari ride and spot the majestic Royal Bengal Tiger in its natural habitat.
              </p>
            </div>
            {/* Highlight 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diverse Wildlife</h3>
              <p className="text-gray-600">
                Apart from tigers, Ranthambore is home to a wide range of wildlife including leopards, sloth bears, deer, and many species of birds.
              </p>
            </div>
            {/* Highlight 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rich Flora and Fauna</h3>
              <p className="text-gray-600">
                Experience the lush greenery and diverse flora of Ranthambore. The park offers stunning views of the forest and its unique wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What Our <strong className='text-[#d48735]'>Guests</strong> Say
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">
                &quot;The safari experience was beyond amazing. We saw a tiger up close! The guides were very knowledgeable and made the experience unforgettable.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800">– Rajesh K.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">
                &quot;The Ranthambore safari is a must-do! The park is stunning and the wildlife is incredible. Highly recommend this tour to anyone visiting Rajasthan.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800">– Priya S.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">
                &quot;An unforgettable adventure! We saw tigers, leopards, and even a family of elephants. It was a perfect experience in the wild!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Embark on Your <strong className='text-[#d48735]'>Safari Adventure!</strong>
        </h2>
        <p className="text-xl mb-6">
          Book your Ranthambore Safari Tour today and experience the thrill of spotting wildlife in one of India&apos;s most famous national parks!
        </p>
        <a href="/pages/contact" className="bg-[#a0a5a8] text-blue-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#b2732b] cursor-pointer transition-all duration-300">
          Book Now
        </a>
      </section>

      {/* Footer Section (Optional) */}
      <Footer />
    </div>
  );
}

export default Page;
