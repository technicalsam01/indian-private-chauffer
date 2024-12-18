// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function FilterCanvas() {
    const [isClient, setIsClient] = useState(false); // State to track client-side rendering
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const [searchParams, setSearchParams] = useState(null);

    // Ensure this runs only on the client side
    useEffect(() => {
        setIsClient(true); // Mark client-side rendering complete
    }, []);

    // Fetch search params only on the client side after mounting
    useEffect(() => {
        if (isClient) {
            const params = new URLSearchParams(window.location.search); // Get URLSearchParams on the client
            setSearchParams(params);
        }
    }, [isClient]);

    // Filter products based on query parameters once searchParams are available
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

    if (!isClient) {
        // While waiting for the client-side to load
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

    // Render the actual page after the client-side has been initialized
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
            </div>

            <div className="shop-square">
                {filteredProducts.length > 0 ? (
                    <ShopFilterCanvas data={filteredProducts} productPerPage={12} dataType={searchParams.get('type')} />
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
