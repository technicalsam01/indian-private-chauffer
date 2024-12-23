'use client'
import Image from 'next/image'; // Assuming you're using Next.js
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Footer from '@/components/Footer/Footer'

import Link from 'next/link'

const Gallery = () => {
  return (
    <>
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Explore Rajasthan" subHeading="Discover the Majesty" />
      </div>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Explore the <strong className='text-[#d48735]'>Beauty of Rajasthan</strong></h2>
          <p className="text-lg text-gray-600 mb-12">
            Discover Rajasthan&apos;s rich culture, heritage, and breathtaking landscapes through our exclusive gallery.
          </p>

          {/* Main Image */}
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:space-x-8">
  {/* Left Column: First Image */}
  <div className="relative w-full max-w-md mb-6 md:mb-0 md:w-1/2">
    <Image
      src="/images/gallery/MainImage.jpeg"
      alt="Rajasthan Landscape"
      width={717}
      height={1280}
      className="w-full h-auto md:h-full object-cover transition-transform transform hover:scale-105"
    />
  </div>

  {/* Right Column: Description and Second Image */}
  <div className="w-full md:w-1/2 flex flex-col justify-between">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
      Explore <strong className='text-[#d48735]'>Rajasthan Tours</strong> and Travel
    </h2>

    {/* Paragraph */}
    <p className="mt-4 text-lg text-gray-700 flex-grow">
      Discover the rich culture, majestic palaces, and serene deserts of Rajasthan. 
      From the vibrant streets of Jaipur to the peaceful lakes of Udaipur, Rajasthan 
      offers an unforgettable journey for every traveler. Experience the grandeur of the 
      Amber Fort, the enchanting blue streets of Jodhpur, and the calming aura of Pushkar’s 
      holy lake. Rajasthan is a land of captivating contrasts, where every corner tells 
      a unique story of history, art, and culture.
    </p>

    {/* Second Image Below the Description */}
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg w-full max-w-md mx-auto">
        <Image
          src="/images/gallery/MainImage.jpeg"
          alt="Rajasthan Culture"
          width={717}
          height={1280}
          className="w-full h-auto object-cover transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</div>


          {/* Grid for Placeholder Images & Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Image 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/gallery/MainImage.jpeg" 
                alt="Rajasthan Palace"
                width={717} 
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4">
                <h3 className="text-xl font-semibold">Palaces of Rajasthan</h3>
                <p className="text-sm">Explore the grand architectural marvels of Rajasthan&apos;s royal palaces.</p>
              </div>
            </div>

            {/* Placeholder Image 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/gallery/MainImage.jpeg" 
                alt="Rajasthan Fort"
                width={717} 
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4">
                <h3 className="text-xl font-semibold">Forts & Heritage</h3>
                <p className="text-sm">Step into the past as you explore Rajasthan&apos;s historic forts.</p>
              </div>
            </div>

            {/* Placeholder Image 3 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/gallery/MainImage.jpeg" 
                alt="Rajasthan Desert Safari"
                width={717} 
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4">
                <h3 className="text-xl font-semibold">Desert Safari</h3>
                <p className="text-sm">Experience the thrill of Rajasthan’s desert safaris.</p>
              </div>
            </div>

            {/* Placeholder Image 4 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/gallery/MainImage.jpeg" 
                alt="Rajasthan Culture"
                width={717} 
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4">
                <h3 className="text-xl font-semibold">Cultural Experience</h3>
                <p className="text-sm">Dive deep into Rajasthan’s rich cultural heritage.</p>
              </div>
            </div>

            {/* Placeholder Image 5 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/gallery/MainImage.jpeg" 
                alt="Rajasthan Architecture"
                width={717} 
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4">
                <h3 className="text-xl font-semibold">Architectural Wonders</h3>
                <p className="text-sm">Marvel at the intricate and beautiful architecture of Rajasthan.</p>
              </div>
            </div>

            {/* Placeholder Image 6 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="/images/gallery/MainImage.jpeg" 
                alt="Rajasthan Wildlife"
                width={717} 
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4">
                <h3 className="text-xl font-semibold">Wildlife Safari</h3>
                <p className="text-sm">Embark on an exciting wildlife safari in Rajasthan&apos;s reserves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
