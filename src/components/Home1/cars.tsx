'use client';
import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ChauffeurCars = () => {
    const carsDetails = useMemo(() => [
        {
            image: '/images/cars/toyto.jpeg',
            name: 'TOYOTA INNOVA',
            description: 'Budgeted and cheaper rates Guaranteed * Toyota Innova Luxury car * Both A.C & NON-A.C * Music system *Ice box Ample luggage space * Spacious and comfortable seats *White seat covers & curtains',
        },
        {
            image: '/images/cars/toyotaEtios.jpeg',
            name: 'TOYOTA ETIOS',
            description: 'Budgeted and cheaper rates Guaranteed *TOYOTA ETIOS * Both A.C & NON-A.C *First aid box *Music system *Ice box *Ample separate luggage space * Spacious and comfortable seats',
        },
        {
            image: '/images/tourTravel/car3.jpeg',
            name: 'Bus',
            description: 'Comfortable Seating * Air Conditioning / Ventilation *Wi-Fi and Charging Ports *Refreshments / Water Availability',
        },
        {
            image: '/images/tourTravel/car4.jpeg',
            name: 'MINI BUS',
            description: 'Comfortable and Adjustable Seating * Air Conditioning / Heating * Wi-Fi and Charging Stations * Safety Features and Entertainment',
        },
    ], []);

    return (
        <section className="py-10 px-4 sm:px-8 lg:px-16 hidden lg:block">
      
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Chauffeur <strong className='text-[#d48735]'>Car</strong> Service
                </h1>
                <p className="mt-2 text-gray-600">Comfort and luxury for every journey</p>
            </div>

      
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {carsDetails.map((car, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      
                        <Link href="/pages/cars">
                            <div className="relative w-full h-48 sm:h-56">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    width={500}  
                                    height={300} 
                                />
                            </div>
                        </Link>
                        {/* <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {car.name}
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-3">
                                {car.description}
                            </p>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChauffeurCars;
