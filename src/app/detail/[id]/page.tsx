'use client'; // Mark this as a Client Component

import React from 'react';
import Image from 'next/image';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';
import { tours } from '@/app/pages/data/toursData';

const TourDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params; // Access id from params

  // Find the tour by the ID (Client-side logic)
  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Loading...</div>; // Handle case when tour data is not found
  }

  return (
    <>
    <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading="Explore India" subHeading="Discover India" />
      </div>
<div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
  
    <Image
      src={tour.image}
      alt={tour.title}
      width={800}
      height={500}
      className="object-cover rounded-t-lg w-full"
    />
    <h1 className="text-3xl font-bold mt-6 sm:text-4xl lg:text-5xl text-center text-primary">
      {tour.title}
    </h1>
  
    <p className="text-xl mt-4 text-gray-700 text-center">
      <span className="text-2xl font-bold text-secondary">Cities : </span>
      {typeof tour.cities === 'string'
        ? tour.cities
        : `${tour.cities?.destinations} - ${tour.cities?.duration || ''}`}
    </p>

    <div className="mt-6 space-y-6">
      {/* Loop through the description items */}
      {tour.description.map((item, index) => (
        <div key={index}>
          {item.type === 'heading' && (
            <h3 className="text-2xl font-semibold text-gray-800">{item.content}</h3>
          )}
          {item.type === 'text' && (
            <p className="text-gray-700 mt-2 leading-relaxed  text-[#b59c39]  ">{item.content}</p>
          )}
          {item.type === 'list' && (
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              {Array.isArray(item.content) &&
                item.content.map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

    <Footer />
    </>
  );
};

export default TourDetail;
