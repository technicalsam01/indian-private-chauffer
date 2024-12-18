'use client'
import React from "react";
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';


const whatsappNumber = "9414349229";
const emailAddress = "contact@touragency.com";

const tours = [
  {
    id: "1",
    title: "Golden Triangle Tour India",
    days: "6 Days",
    image: '/images/slider/packegeTours/GoldenTriangle.jpeg',
    description: "Experience India's cultural splendor with the Golden Triangle Tour, covering Delhi, Agra, and Jaipur. Visit iconic landmarks like the Taj Mahal, Red Fort, and Amber Fort, immersing in history and heritage."
  },
  {
    id: "2",
    title: "Rajasthan",
    days: "11 Days",
    image: '/images/slider/packegeTours/Rajasthan10DayesOne.jpeg',
    description: "Rajasthan offers a stunning blend of rich history, royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    id: "3",
    title: "Rajasthan Tours",
    days: "8 Days",
    image: '/images/slider/packegeTours/Rajasthan10DayesTwo.jpeg',
    description: "Rajasthan offers a stunning blend of rich history, royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    id: "4",
    title: "Rajasthan Place Tours",
    days: "10 Days",
    image: '/images/slider/packegeTours/Rajasthan8Days.jpeg',
    description: "Rajasthan Place Tours take you through awe-inspiring forts, palaces, and temples. Visit Udaipur’s Lake Palace, Jodhpur’s Mehrangarh Fort, and Jaipur’s Amber Fort, offering rich history and regal architecture in every corner."
  },
  {
    id: "5",
    title: "Rajasthan Ethnic Tours",
    days: "10 Days",
    image: '/images/slider/packegeTours/rajasthanEthnic.jpeg',
    description: "Rajasthan offers a stunning blend of rich history, Rajasthan royal palaces, and desert landscapes. Explore vibrant cities like Jaipur, Udaipur, and Jodhpur, with their majestic forts, temples, and colorful cultural experiences."
  },
  {
    id: "6",
    title: "Rajasthan Desert",
    days: "16 Days",
    image: '/images/slider/packegeTours/sliderfour.png',
    description: "Rajasthan Desert Tours offer a unique experience of the Thar Desert. Enjoy camel rides, desert safaris, and starlit camps while discovering sand dunes, traditional villages, and the rugged beauty of Rajasthan's arid landscapes."
  },
  {
    id: "7",
    title: "Rajasthan Fort Tours",
    days: "20 Days",
    image: '/images/slider/packegeTours/Rajasthan20Days.jpeg',
    description: "Rajasthan Fort Tours highlight the state's architectural marvels. Visit imposing structures like the Mehrangarh Fort, Amber Fort, and Chittorgarh Fort, each showcasing the rich military history, grandeur, and beauty of Rajasthan’s royal past."
  }
];

const Package = () => {
  return (
    <div className="bg-slate-50">
      <div className="py-10">
        <p className="text-4xl font-bold mb-2 text-center">Explore Your <strong className="text-secondary">Package</strong> Tours</p>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="block rounded-lg shadow-md overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <div className="p-4 flex flex-row justify-between">
                <h2 className="text-xl font-bold mb-2 text-primary">{tour.title}</h2>
                <p className="text-gray-700 font-bold text-secondary">{tour.days}</p>
              </div>
              <p className="ml-3 text-gray-700">{tour.description}</p>
              <div className="p-4 flex flex-row justify-between bg-[#edf6f9]">
                <Link href={`/detail/${tour.id}`} passHref>
                  <button className="text-lg py-2 px-4 text-white rounded-md bg-[#1677FF] hover:bg-[#023e8a] transition-all duration-300 focus:outline-none">
                    Details
                  </button>
                </Link>
                <div className="flex flex-row space-x-5">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'm interested in your tours and would like more information. I came across your website indianPrivateChauffeur and found the " + tour.title + " quite interesting. Could you please share more details about the package, availability, and pricing? Thank you!")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success text-3xl cursor-pointer"
                  >
                    <FaWhatsapp />
                  </a>

                  <a
                    href={`mailto:${emailAddress}?subject=${encodeURIComponent("Inquiry About Tours and Travel Packages")}&body=${encodeURIComponent("Hello,\n\nI hope this message finds you well. I am interested in learning more about your travel packages available on your website indianPrivateChauffeur. Specifically, I came across the " + tour.title + " and would like to know more about the details, availability, and pricing.\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your Name]")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red text-3xl cursor-pointer"
                  >
                    <CiMail />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
