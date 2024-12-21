import React from 'react'
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'; // Uncommented if it's needed
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <div className="bg-gray-100">
      <MenuOne props="bg-transparent" />
      {/* Uncommented Breadcrumb if needed */}
      {/* <Breadcrumb heading="Explore India" subHeading="Discover India" /> */}

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/20754100/pexels-photo-20754100/free-photo-of-tourist-boat-sailing-on-the-sea-and-a-city-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-snug">
            Udaipur Palace Tour: Discover Royal Heritage & Majestic Views
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Explore the grandeur of Udaipur&apos;s iconic palaces, from the City Palace to the Lake Palace. Join us for a royal tour through Udaipur&apos;s most famous landmarks, nestled in the heart of Rajasthan.
          </p>
        </div>
      </section>

      {/* Tour Description Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">
            Why Choose the <strong className='text-[#d48735]'>Udaipur Palace</strong> Tour?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Udaipur Palace Tour offers an immersive experience into the regal history of Rajasthan. Learn about the architectural wonders, royal lifestyle, and beautiful landscapes of Udaipur. Whether you&apos;re an architecture enthusiast or a history buff, this tour brings the city&apos;s rich heritage to life.
          </p>
        </div>
      </section>

      {/* Palace Highlights Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Tour <strong className='text-[#d48735]'>Highlights</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Highlight 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">City Palace of Udaipur</h3>
              <p className="text-gray-600">
                Visit the <strong>City Palace</strong>, an iconic structure overlooking Lake Pichola. Marvel at its intricate architecture, frescoes, and royal chambers. A must-see for anyone exploring Udaipur.
              </p>
            </div>
            {/* Highlight 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lake Palace</h3>
              <p className="text-gray-600">
                Situated on the serene waters of Lake Pichola, the <strong>Lake Palace</strong> is an architectural marvel, offering stunning views and a glimpse into the royal lifestyle of the Mewar dynasty.
              </p>
            </div>
            {/* Highlight 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fateh Sagar Lake</h3>
              <p className="text-gray-600">
                Enjoy a peaceful boat ride on <strong>Fateh Sagar Lake</strong>, where the majestic views of the Aravalli hills and surrounding palaces create a serene experience that can&apos;t be missed.
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
                &quot;An unforgettable experience! The tour was perfectly organized, and the palaces were absolutely stunning. I felt like royalty!&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800">– Priya S.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">
                &quot;A beautiful journey through the history of Udaipur. The tour guide was informative and the places we visited were breathtaking!&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800">– Rajesh K.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600">
                &quot;Every moment of the tour was a delight! Highly recommended for anyone visiting Udaipur!&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800">– Aditi M.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready for Your Royal Journey?</h2>
        <p className="text-xl mb-6">Book your Udaipur Palace Tour today and explore the most beautiful palaces in Rajasthan!</p>
        <a
          href="/pages/contact"
          className="bg-[#a0a5a8] text-blue-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#b2732b] cursor-pointer transition-all duration-300"
          aria-label="Book Udaipur Palace Tour Now"
        >
          Book Now
        </a>
      </section>

      {/* Footer Section (Optional) */}
      <Footer />
    </div>
  );
}

export default Page;
