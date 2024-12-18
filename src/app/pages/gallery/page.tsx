
'use client'
import React, { useState } from "react";
import Image from 'next/image'; // Assuming you're using Next.js

import photo1 from "../../../../public/images/gallery/1.jpg"
import photo2 from "../../../../public/images/gallery/2.jpg"
import photo3 from "../../../../public/images/gallery/3.jpg"
import photo4 from "../../../../public/images/gallery/4.jpg"
import photo5 from "../../../../public/images/gallery/5.jpg"
import photo6 from "../../../../public/images/gallery/6.jpg"
import photo7 from "../../../../public/images/gallery/7.jpg"
import photo8 from "../../../../public/images/gallery/8.jpg"
import photo9 from "../../../../public/images/gallery/9.jpg"
import photo10 from "../../../../public/images/gallery/10.jpg"
import photo11 from "../../../../public/images/gallery/11.jpg"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Footer from '@/components/Footer/Footer'

import Link from 'next/link'

const gallery = [
    { id: 1, image: photo1, title: "photo1" },
    { id: 2, image: photo2, title: "photo2" },
    { id: 3, image: photo3, title: "photo3" },
    { id: 4, image: photo4, title: "photo4" },
    { id: 5, image: photo5, title: "photo5" },
    { id: 6, image: photo6, title: "photo6" },
    { id: 7, image: photo7, title: "photo7" },
    { id: 8, image: photo8, title: "photo8" },
    { id: 9, image: photo9, title: "photo9" },
    { id: 10, image: photo10, title: "photo10" },
    { id: 11, image: photo11, title: "photo11" }

    // {id:10,image:photo10, title:"photo1"}
]

const Gallery = () => {
    return (
        <>
            <div id="header" className="relative w-full">
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading="Explore India" subHeading="Discover India" />
            </div>

            <div className=" bg-slate-50">
                <div className="bg-slate-50 py-10">
                    <p className="text-4xl font-bold mb-2 text-center">Explore our Gallery</p>
                </div>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {gallery.map((item,id) => (
                            <a
                                key={id}
                                className="block rounded-lg shadow-md overflow-hidden"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={250}
                                    height={250}
                                    // className="object-cover"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Gallery;
