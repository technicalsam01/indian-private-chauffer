// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopSidebarList from '@/components/Shop/ShopSidebarList'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function DefaultList() {
    const [isClient, setIsClient] = useState(false); // State to track if we are on the client-side
    const [filteredProducts, setFilteredProducts] = useState(productData); // Product state
    const [searchParams, setSearchParams] = useState(null); // State to hold search params

    // This effect ensures that the code runs only on the client side (after initial render)
    useEffect(() => {
        setIsClient(true); // Enable client-side rendering
    }, []);

    // Fetch search params once client-side is enabled
    useEffect(() => {
        if (isClient) {
            const params = new URLSearchParams(window.location.search); // Get URL search params
            setSearchParams(params);
        }
    }, [isClient]);

    // Filter products based on the query params (only runs when searchParams are available)
    useEffect(() => {
        if (searchParams) {
            const type = searchParams.get('type');
            const category = searchParams.get('category');
            let filtered = productData;

            if (type) {
                filtered = filtered.filter(product => product.type === type);
            }

            if (category) {
                filtered = filtered.filter(product => product.category === category);
            }

            setFilteredProducts(filtered);
        }
    }, [searchParams]);

    // Render a simple layout while waiting for the client-side to load
    if (!isClient) {
        return (
            <>
                <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
                <div id="header" className='relative w-full'>
                    <MenuOne props="bg-transparent" />
                </div>
                <ShopSidebarList data={[]} productPerPage={4} dataType={null} />
                <Footer />
            </>
        );
    }

    // Once the client-side is ready and searchParams are loaded, render the actual page
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>

            <ShopSidebarList data={filteredProducts} productPerPage={4} dataType={searchParams.get('type')} />
            
            <Footer />
        </>
    )
}
