import Image from 'next/image';
import Link from 'next/link';

const TourDestinations = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="heading3 text-4xl font-bold sm:text-3xl text-black bg-[#f5f5f5] inline-block py-3 px-5 rounded-lg">
          Explore the <strong className='text-[#d48735]'>Majestic Rajasthan</strong>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the beauty of Rajasthan’s royal palaces, vibrant culture, and scenic landscapes. Book your next unforgettable adventure today.
        </p>

        {/* Tour Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-80 w-full">
              <Image
                src="/images/gallery/UdaipurTour.jpg" // Replace with new image for Udaipur Palace
                alt="Udaipur Palace"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-6">
              <h3 className="text-2xl font-semibold">Udaipur Palace Tour</h3>
              <p className="mt-2 mb-4 text-lg">
                Explore the City of Lakes with its stunning palaces and temples, surrounded by tranquil waters.
              </p>
              <Link
                href="/pages/UdaipurPalaceTours"
                className="text-white text-xl font-medium hover:text-[#d48735] transition-colors duration-300"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>

          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-80 w-full">
              <Image
                src="/images/gallery/Ranthambore Safari.jpg" // Replace with new image for Ranthambore Safari
                alt="Ranthambore Safari"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-6">
              <h3 className="text-2xl font-semibold">Ranthambore Safari</h3>
              <p className="mt-2 mb-4 text-lg">
                Embark on a thrilling wildlife adventure in one of India’s largest national parks, home to tigers and exotic wildlife.
              </p>
              <Link
                href="/pages/RanthamboreSafariTours"
                className="text-white text-xl font-medium hover:text-[#d48735] transition-colors duration-300"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>

          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-80 w-full">
              <Image
                src="/images/gallery/Mehrangarh.jpg" // Replace with new image for Mehrangarh Fort
                alt="Mehrangarh Fort"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-6">
              <h3 className="text-2xl font-semibold">Mehrangarh Fort Tour</h3>
              <p className="mt-2 mb-4 text-lg">
                Discover the grandiosity of Mehrangarh Fort in Jodhpur, one of India’s largest and most majestic forts.
              </p>
              <Link
                href="/pages/MehrangarhTours"
                className="text-white text-xl font-medium hover:text-[#d48735] transition-colors duration-300"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDestinations;
