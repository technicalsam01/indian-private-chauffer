// // @ts-nocheck 
// 'use client'
// import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import { tours } from '../data/toursData';
// import MenuOne from '@/components/Header/Menu/MenuOne';
// import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
// import Footer from '@/components/Footer/Footer';

// const PackageToursPage = () => {
//     const [activeTour, setActiveTour] = useState(tours[0] || {});
//     const descriptionRefs = useRef([]); // Store references to descriptions

//     const handleButtonClick = (tour, index) => {
//         setActiveTour(tour);
//         // Scroll to the start of the description (not where it ended previously)
//         if (descriptionRefs.current[index]) {
//             descriptionRefs.current[index].scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start', // Ensure it scrolls to the top of the screen
//                 inline: 'nearest'
//             });
//         }
//     };

//     return (
//         <>
//             {/* Header Section */}
//             <div id="header" className="relative w-full">
//                 <MenuOne props="bg-transparent" />
//                 <Breadcrumb heading="Explore India" subHeading="Discover India" />
//             </div>

//             {/* Tours Section */}
//             <section className="py-16 bg-gray-100">
//                 <div className="container mx-auto flex flex-col lg:flex-row gap-12">
//                     {/* Left Side: Tour List */}
//                     <div className="w-full lg:w-1/3">
//                         <div className="bg-[#FAF9F6] p-6 rounded-lg shadow-md sticky top-20">
//                             <h2 className="text-2xl font-bold text-center mb-6 text-heading bg-[#f5f5f5] rounded-lg heading3 sm:text-3xl py-2 px-2 hover:text-[#14213d]">Explore Tours</h2>
//                             <ul className="space-y-6">
//                                 {tours.map((tour, index) => (
//                                     <li key={index}>
//                                         <button
//                                             onClick={() => handleButtonClick(tour, index)} // Update the onClick handler
//                                             className={`block w-full p-4 text-left rounded-lg shadow-md transition-all duration-300 transform 
//         bg-[#f3f4f6] hover:bg-[#cf7345] 
//         ${activeTour?.title === tour.title
//                                                     ? 'bg-[#2b6cb0] over:text-sky-400' // Active button state
//                                                     : 'text-gray-800 hover:text-white' // Default text color
//                                                 }`}
//                                         >
//                                             {tour.title}
//                                         </button>


//                                         <div className="lg:hidden mt-4">
//                                             {activeTour?.title === tour.title && (
//                                                 <div
//                                                     ref={(el) => (descriptionRefs.current[index] = el)} // Set ref for this description
//                                                     className="text-body whitespace-pre-line leading-relaxed space-y-4"
//                                                 >
//                                                     {tour.description?.map((item, index) => {
//                                                         const content = Array.isArray(item.content)
//                                                             ? item.content.join(' ')
//                                                             : item.content;

//                                                         return (
//                                                             <div key={index}>
//                                                                 {typeof content === 'string'
//                                                                     ? content.split('**').map((text, subIndex) =>
//                                                                         subIndex % 2 === 1 ? (
//                                                                             <span
//                                                                                 key={subIndex}
//                                                                                 className="block mt-4 font-semibold text-primary"
//                                                                             >
//                                                                                 {text}
//                                                                             </span>
//                                                                         ) : (
//                                                                             <span key={subIndex}>{text}</span>
//                                                                         )
//                                                                     )
//                                                                     : (
//                                                                         <span>{content}</span>
//                                                                     )}
//                                                             </div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Right Side: Tour Details (Desktop view only) */}
//                     <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden hidden lg:block">
//                         {activeTour?.image && (
//                             <Image
//                                 src={activeTour.image}
//                                 alt={activeTour.title || 'Tour Image'}
//                                 width={800}
//                                 height={400}
//                                 className="w-full h-64 object-cover rounded-t-lg"
//                             />
//                         )}
//                         <div className="p-6">
//                             {/* Title */}
//                             <h2 className="text-3xl font-bold text-heading mb-6">
//                                 {activeTour?.title || 'Tour Title'}
//                             </h2>

//                             {/* Cities Information */}
//                             <p className="text-lg text-body mb-6">
//                                 <span className="font-semibold text-primary text-2xl">Cities : </span>
//                                 {typeof activeTour?.cities === 'string'
//                                     ? activeTour.cities
//                                     : activeTour?.cities?.destinations
//                                         ? `${activeTour.cities.destinations} - ${activeTour.cities.duration || ''}`
//                                         : 'N/A'}
//                             </p>

//                             {/* Description */}
//                             <div className="whitespace-pre-line leading-relaxed space-y-4">
//                                 {activeTour?.description?.map((item, index) => {
//                                     const content = Array.isArray(item.content)
//                                         ? item.content.join(' ')
//                                         : item.content;

//                                     return (
//                                         <div key={index}>
//                                             {typeof content === 'string'
//                                                 ? content.split('**').map((text, subIndex) =>
//                                                     subIndex % 2 === 1 ? (
//                                                         <span
//                                                             key={subIndex}
//                                                             className="block mt-4 font-semibold text-primary"
//                                                         >
//                                                             {text}
//                                                         </span>
//                                                     ) : (
//                                                         <span key={subIndex}>{text}</span>
//                                                     )
//                                                 )
//                                                 : (
//                                                     <span>{content}</span>
//                                                 )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <Footer />
//         </>
//     );
// };

// export default PackageToursPage;





//@ts-nocheck
'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { tours } from '../data/toursData';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';

const PackageToursPage = () => {
    const [activeTour, setActiveTour] = useState(tours[0] || {});
    const descriptionRefs = useRef([]); // Store references to descriptions

    const handleButtonClick = (tour, index) => {
        setActiveTour(tour);
        // Scroll to the start of the description (not where it ended previously)
        if (descriptionRefs.current[index]) {
            descriptionRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Ensure it scrolls to the top of the screen
                inline: 'nearest'
            });
        }
    };

    return (
        <>
            {/* Header Section */}
            <div id="header" className="relative w-full">
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading="Explore India" subHeading="Discover India" />
            </div>

            {/* Tours Section */}
            <section 
                className="relative py-16 bg-gray-100" 
                style={{
                    backgroundImage: "url('/images/gallery/Background.jpg')", // Add your image path here
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    zIndex: 0 // Keeps content on top of the background image
                }}
            >
                <div className="container mx-auto flex flex-col lg:flex-row gap-12 relative z-10"> {/* Adding z-10 to keep the content on top */}
                    {/* Left Side: Tour List */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-[#FAF9F6] p-6 rounded-lg shadow-md sticky top-20">
                            <h2 className="text-2xl font-bold text-center mb-6 text-heading bg-[#f5f5f5] rounded-lg heading3 sm:text-3xl py-2 px-2 hover:text-[#14213d]">Explore Tours</h2>
                            <ul className="space-y-6">
                                {tours.map((tour, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleButtonClick(tour, index)} // Update the onClick handler
                                            className={`block w-full p-4 text-left rounded-lg shadow-md transition-all duration-300 transform 
        bg-[#f3f4f6] hover:bg-[#cf7345] 
        ${activeTour?.title === tour.title
                                                    ? 'bg-[#2b6cb0] over:text-sky-400' // Active button state
                                                    : 'text-gray-800 hover:text-white' // Default text color
                                                }`}
                                        >
                                            {tour.title}
                                        </button>

                                        <div className="lg:hidden mt-4">
                                            {activeTour?.title === tour.title && (
                                                <div
                                                    ref={(el) => (descriptionRefs.current[index] = el)} // Set ref for this description
                                                    className="text-body whitespace-pre-line leading-relaxed space-y-4"
                                                >
                                                    {tour.description?.map((item, index) => {
                                                        const content = Array.isArray(item.content)
                                                            ? item.content.join(' ')
                                                            : item.content;

                                                        return (
                                                            <div key={index}>
                                                                {typeof content === 'string'
                                                                    ? content.split('**').map((text, subIndex) =>
                                                                        subIndex % 2 === 1 ? (
                                                                            <span
                                                                                key={subIndex}
                                                                                className="block mt-4 font-semibold text-primary"
                                                                            >
                                                                                {text}
                                                                            </span>
                                                                        ) : (
                                                                            <span key={subIndex}>{text}</span>
                                                                        )
                                                                    )
                                                                    : (
                                                                        <span>{content}</span>
                                                                    )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Image and Text BELOW the Tour Buttons inside Explore Tours */}
                            <div className="mt-8 space-y-4">
                                {/* Image */}
                                <div className="mb-6">
                                    <Image
                                        src="/images/gallery/Background.jpg" // Replace with the correct image path
                                        alt="Tour image"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover rounded-lg shadow-md"
                                    />
                                </div>

                                {/* Text or Paragraph */}
                                <div className="text-center">
                                    <p className="text-lg text-body">
                                        Discover amazing destinations with our expert-led tours. Whether you&apos;re looking for a relaxing getaway or an adventure of a lifetime, we have something for everyone. Join us on a journey you&apos;ll never forget!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Tour Details (Desktop view only) */}
                    <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden hidden lg:block">
                        {activeTour?.image && (
                            <Image
                                src={activeTour.image}
                                alt={activeTour.title || 'Tour Image'}
                                width={800}
                                height={400}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                        )}
                        <div className="p-6">
                            {/* Title */}
                            <h2 className="text-3xl font-bold text-heading mb-6">
                                {activeTour?.title || 'Tour Title'}
                            </h2>

                            {/* Cities Information */}
                            <p className="text-lg text-body mb-6">
                                <span className="font-semibold text-primary text-2xl">Cities : </span>
                                {typeof activeTour?.cities === 'string'
                                    ? activeTour.cities
                                    : activeTour?.cities?.destinations
                                        ? `${activeTour.cities.destinations} - ${activeTour.cities.duration || ''}`
                                        : 'N/A'}
                            </p>

                            {/* Description */}
                            <div className="whitespace-pre-line leading-relaxed space-y-4">
                                {activeTour?.description?.map((item, index) => {
                                    const content = Array.isArray(item.content)
                                        ? item.content.join(' ')
                                        : item.content;

                                    return (
                                        <div key={index}>
                                            {typeof content === 'string'
                                                ? content.split('**').map((text, subIndex) =>
                                                    subIndex % 2 === 1 ? (
                                                        <span
                                                            key={subIndex}
                                                            className="block mt-4 font-semibold text-primary"
                                                        >
                                                            {text}
                                                        </span>
                                                    ) : (
                                                        <span key={subIndex}>{text}</span>
                                                    )
                                                )
                                                : (
                                                    <span>{content}</span>
                                                )}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default PackageToursPage;
