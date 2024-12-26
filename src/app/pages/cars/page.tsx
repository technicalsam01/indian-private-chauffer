'use client'
import { useState } from 'react';
import Image from 'next/image';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';

const carData = [
  {
    id: 1,
    name: "Toyota Crysta",
    image: "/images/cars/Crysta.jpeg", 
    description: "The Toyota Crysta is a luxurious MPV that ensures a smooth and comfortable ride for large groups. Whether you're on a family vacation or a business trip, this vehicle provides ample space and top-notch comfort.",
    features: "Leather seats, Sunroof, Climate control, Spacious interiors",
  },
  {
    id: 2,
    name: "Toyota Hycross",
    image: "/images/cars/hycross.jpeg", 
    description: "The Toyota Hycross blends modern design with versatility, offering excellent performance and ample seating. It's perfect for those who seek both style and practicality in their vehicle.",
    features: "Sporty design, Turbocharged engine, Advanced safety features, Eco-friendly technology",
  },
  {
    id: 3,
    name: "Toyota Etios",
    image: "/images/cars/etios.jpeg", 
    description: "The Toyota Etios is an affordable, reliable, and fuel-efficient sedan, designed for city driving. It’s the perfect car for those who value practicality and comfort without compromising on quality.",
    features: "Compact size, Fuel-efficient, Spacious boot, Safety airbags",
  },
  {
    id: 4,
    name: "Mini Bus",
    image: "/images/cars/miniBus.png", 
    description: "Ideal for larger groups or events, our Mini Bus provides a comfortable and safe way to travel in groups. With plenty of seating and space, it's perfect for tours, corporate trips, or group travel.",
    features: "Seating for up to 30 passengers, AC, Wi-Fi, Reclining seats",
  },
  {
    id: 5,
    name: "Urbania",
    image: "/images/cars/urbania.jpeg",
    description: "The Urbani is a compact hatchback perfect for urban commuters. With its efficient engine and small size, it makes navigating through traffic a breeze, offering both convenience and fuel savings.",
    features: "Eco-friendly, Compact size, Efficient fuel economy, Easy parking",
  },
  {
    id: 6,
    name: "Volvo Bus",
    image: "/images/cars/volvo.jpeg", 
    description: "Our Volvo Bus combines safety and comfort for long-distance travel. Whether you're on a group tour or corporate travel, the bus is designed to provide a smooth and comfortable experience for all passengers.",
    features: "Ergonomic seating, High-tech infotainment, Onboard restrooms, Advanced safety features",
  },
  // {
  //   id: 7,
  //   name: "Luxury SUV",
  //   image: "/images/cars/luxury_suv.jpg", 
  //   description: "Our Luxury SUV is a top-of-the-line vehicle combining power, elegance, and comfort. With advanced features and spacious interiors, this car ensures an unforgettable travel experience for both business and leisure.",
  //   features: "Heated seats, Panoramic sunroof, Adaptive cruise control, Premium sound system",
  // },
];

const CarData = () => {
  return (
    <>
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Explore Rajasthan" subHeading="Discover the Majesty" />
      </div>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Our <strong className='text-[#d48735]'>Vehicle</strong> Fleet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {carData.map((car) => (
              <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                <p className="text-gray-600 mt-2">{car.description}</p>
                <ul className="mt-4 text-gray-700 list-disc pl-6">
                  {car.features.split(',').map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarData;
