'use client'
import { useState } from 'react';
import Image from 'next/image';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';

const carData = [
  {
    id: 1,
    name: "Luxury Sedan",
    image: "/images/cars/Crysta.jpeg", // Replace with actual image URL
    description: "Experience the luxury and comfort with our premium sedan, perfect for long trips.",
    features: "Leather seats, Sunroof, Climate control",
  },
  {
    id: 2,
    name: "Sporty Coupe",
    image: "/images/cars/hycross.jpeg", // Replace with actual image URL
    description: "Get ready for a thrilling ride with our sporty coupe, designed for speed and style.",
    features: "Sporty design, Turbocharged engine, Advanced safety features",
  },
  {
    id: 3,
    name: "Convertible",
    image: "/images/cars/convertible.jpg", // Replace with actual image URL
    description: "Feel the wind in your hair with our sleek convertible, perfect for scenic drives.",
    features: "Retractable roof, Premium sound system, LED lights",
  },
  {
    id: 4,
    name: "Family SUV",
    image: "/images/cars/suv.jpg", // Replace with actual image URL
    description: "A spacious and comfortable SUV, perfect for family adventures.",
    features: "3-row seating, Advanced infotainment, 4WD",
  },
  {
    id: 5,
    name: "Compact Hatchback",
    image: "/images/cars/hatchback.jpg", // Replace with actual image URL
    description: "A compact, fuel-efficient car ideal for city driving.",
    features: "Eco-friendly, Compact size, Efficient fuel economy",
  },
  {
    id: 6,
    name: "Electric Car",
    image: "/images/cars/electric.jpg", // Replace with actual image URL
    description: "Drive into the future with our eco-friendly electric car, built for modern living.",
    features: "Zero emissions, Fast charging, High-tech infotainment",
  },
  {
    id: 7,
    name: "Luxury SUV",
    image: "/images/cars/luxury_suv.jpg", // Replace with actual image URL
    description: "Combining elegance and power, our luxury SUV offers top-tier features for those who demand the best.",
    features: "Heated seats, Panoramic sunroof, Adaptive cruise control",
  },
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
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Our Vehicle Fleet</h2>
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
