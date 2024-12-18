'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface Props {
    props: string;
}

const MenuOne: React.FC<Props> = ({ props }) => {
    const router = useRouter()
    const pathname = usePathname()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart()
    const { openModalWishlist } = useModalWishlistContext()
    const { openModalSearch } = useModalSearchContext()

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };

        // Attach scroll event when component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    return (
        <>
            <div className={`header-menu style-one ${fixedHeader ? 'fixed' : 'absolute'} top-0 left-0 right-0 w-full md:h-[80px] h-[56px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="header-main flex justify-between items-center h-full">
                        <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
                            <i className="icon-category text-2xl"></i>
                        </div>

                        <div className="left flex items-center gap-16">
                            <Link href="/" className="flex items-center max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2">
                                <div className="heading5 text-lg md:text-xl lg:text-2xl font-semibold">Indian Private Chauffeur</div>
                            </Link>
                        </div>

                        <div className="menu-main h-full max-lg:hidden">
                            <ul className="flex items-center gap-10 h-full">
                                <li className="h-full relative">
                                    <Link
                                        href="/"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 text-sm md:text-base  ${pathname === '/' ? 'active text-primary' : ''}`}
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className="h-full">
                                    <Link
                                        href="/pages/tours"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 text-sm md:text-base ${pathname === '/pages/tours' ? 'active text-primary' : ''}`}
                                    >
                                        DAY TOUR
                                    </Link>
                                </li>
                                <li className="h-full">
                                    <Link
                                        href="/pages/package-tours"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center text-sm md:text-base ${pathname.includes('/pages/package-tours') ? 'active text-primary' : ''}`}
                                    >
                                        PACKAGE TOURS
                                    </Link>
                                </li>
                                <li className="h-full relative">
                                    <Link
                                        href="/pages/cars"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center text-sm md:text-base ${pathname === '#!' ? 'active text-primary' : ''}`}
                                    >   
                                        CARS
                                    </Link>
                                </li>
                                <li className="h-full relative">
                                    <Link
                                        href="#!"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center text-sm md:text-base ${pathname === '#!' ? 'active text-primary' : ''}`}
                                    >
                                        TESTIMONIALS
                                    </Link>
                                </li>
                                <li className="h-full relative">
                                    <Link
                                        href="#!"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center text-sm md:text-base ${pathname === '#!' ? 'active text-primary' : ''}`}
                                    >
                                        REFERENCE
                                    </Link>
                                </li>
                                <li className="h-full relative">
                                    <Link
                                        href="#!"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center text-sm md:text-base ${pathname === '#!' ? 'active text-primary' : ''}`}
                                    >
                                        GALLERY
                                    </Link>
                                </li>
                                <li className="h-full">
                                    <Link
                                        href="/pages/about"
                                        className={`text-button-uppercase duration-300 h-full flex items-center justify-center text-sm md:text-base ${pathname === '/pages/about' ? 'active text-primary' : ''}`}
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {openMenuMobile && (
                            <div className="menu-mobile lg:hidden absolute top-0 left-0 right-0 bg-white shadow-lg z-10">
                                <ul className="flex flex-col items-center gap-4 py-4">
                                    <li>
                                        <Link
                                            href="/"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center gap-1 ${pathname === '/' ? 'active text-primary' : ''}`}
                                        >
                                            HOME
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/pages/tours"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center gap-1 ${pathname === '/pages/tours' ? 'active text-primary' : ''}`}
                                        >
                                            DAY TOUR
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/pages/package-tours"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center ${pathname.includes('/pages/package-tours') ? 'active text-primary' : ''}`}
                                        >
                                            PACKAGE TOURS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center ${pathname === '#!' ? 'active text-primary' : ''}`}
                                        >
                                            CARS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center ${pathname === '#!' ? 'active text-primary' : ''}`}
                                        >
                                            TESTIMONIALS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center ${pathname === '#!' ? 'active text-primary' : ''}`}
                                        >
                                            REFERENCE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#!"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center ${pathname === '#!' ? 'active text-primary' : ''}`}
                                        >
                                            GALLERY
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/pages/about"
                                            className={`text-button-uppercase duration-300 flex items-center justify-center ${pathname === '/pages/about' ? 'active text-primary' : ''}`}
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuOne
