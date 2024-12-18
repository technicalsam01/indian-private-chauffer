// @ts-nocheck 
'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
// import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function DefaultGrid() {
    const [isClient, setIsClient] = useState(false); // State to track if we are on the client-side
    const [filteredProducts, setFilteredProducts] = useState(productData); // Product state
    const [searchParams, setSearchParams] = useState(null); // State to hold search params

    useEffect(() => {
        setIsClient(true); // Ensure that this runs only on the client side
    }, []);

    useEffect(() => {
        if (isClient) {
            // Once client-side is confirmed, fetch search params
            const params = new URLSearchParams(window.location.search); // Use native JavaScript to get query params
            setSearchParams(params);
        }
    }, [isClient]);

    useEffect(() => {
        if (searchParams) {
            const type = searchParams.get('type');
            const gender = searchParams.get('gender');
            const category = searchParams.get('category');

            // Filter products based on query params
            let filtered = productData;

            if (type) {
                filtered = filtered.filter(product => product.type === type);
            }

            if (gender) {
                filtered = filtered.filter(product => product.gender === gender);
            }

            if (category) {
                filtered = filtered.filter(product => product.category === category);
            }

            setFilteredProducts(filtered);
        }
    }, [searchParams]);

    if (!isClient) {
        // Render a simple layout before client-side is loaded
        return (
            <>
                <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
                <div id="header" className='relative w-full'>
                    <MenuOne props="bg-transparent" />
                </div>
                <div className="shop-square">
                    {/* Loading or empty state */}
                    <div></div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>

            <div className="shop-square">
                {filteredProducts.length > 0 ? (
                    // <ShopBreadCrumb1 data={filteredProducts} productPerPage={9} dataType={type} gender={gender} category={category} /> 
                    <div></div>
                ) : (
                    <div className="text-center py-10 text-gray-600">
                        <h2>No products found matching the filters</h2>
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}
