

// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import * as Icon from "@phosphor-icons/react/dist/ssr";
// import productData from '@/data/Product.json'
// import Product from '../Product/packege';
// import { useModalSearchContext } from '@/context/ModalSearchContext'

// const ModalSearch = () => {
//     const { isModalOpen, closeModalSearch } = useModalSearchContext();
//     const [searchKeyword, setSearchKeyword] = useState('');
//     const router = useRouter();

//     const handleSearch = (value: string) => {
//         router.push(`/search-result?query=${value}`);
//         closeModalSearch();
//         setSearchKeyword('');
//     };

//     return (
//         <>
//             <div className={`modal-search-block`} onClick={closeModalSearch}>
//                 <div
//                     className={`modal-search-main md:p-10 p-6 rounded-[32px] ${isModalOpen ? 'open' : ''}`}
//                     onClick={(e) => { e.stopPropagation() }}
//                 >
//                     <div className="form-search relative">
//                         <Icon.MagnifyingGlass
//                             className='absolute heading5 right-6 top-1/2 -translate-y-1/2 cursor-pointer'
//                             onClick={() => handleSearch(searchKeyword)}
//                         />
//                         <input
//                             type="text"
//                             placeholder='Search for products...'
//                             className='text-button-lg h-14 rounded-2xl border border-line w-full pl-6 pr-12'
//                             value={searchKeyword}
//                             onChange={(e) => setSearchKeyword(e.target.value)}
//                             onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)}
//                         />
//                     </div>
                    
//                     <div className="keyword mt-8">
//                         <div className="heading5">Feature Keywords</div>
//                         <div className="list-keyword flex items-center flex-wrap gap-3 mt-4">
//                             {['dress', 't-shirt', 'underwear', 'top'].map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="item px-4 py-1.5 border border-line rounded-full cursor-pointer duration-300 hover:bg-black hover:text-white"
//                                     onClick={() => handleSearch(item)}
//                                 >
//                                     {item}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="list-recent mt-8">
//                         <div className="heading6">Recently Viewed Products</div>
//                         <div className="list-product pb-5 hide-product-sold grid xl:grid-cols-4 sm:grid-cols-2 gap-7 mt-4">
//                             {productData.slice(0, 4).map((product) => (
//                                 <Product key={product.id} data={product} type='grid' />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ModalSearch;

// @ts-nocheck 
  'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import productData from '@/data/Product.json';
import Product from '../Product/packege';
import { useModalSearchContext } from '@/context/ModalSearchContext';

const ModalSearch = () => {
    const { isModalOpen, closeModalSearch } = useModalSearchContext();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    // Set client-side flag when component mounts (this ensures code runs only on the client)
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSearch = (value: string) => {
        router.push(`/search-result?query=${value}`);
        closeModalSearch();
        setSearchKeyword('');
    };

    // Don't render the modal until we are sure we're on the client
    if (!isClient) return null;

    return (
        <>
            <div className={`modal-search-block`} onClick={closeModalSearch}>
                <div
                    className={`modal-search-main md:p-10 p-6 rounded-[32px] ${isModalOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="form-search relative">
                        <Icon.MagnifyingGlass
                            className='absolute heading5 right-6 top-1/2 -translate-y-1/2 cursor-pointer'
                            onClick={() => handleSearch(searchKeyword)}
                        />
                        <input
                            type="text"
                            placeholder='Search for products...'
                            className='text-button-lg h-14 rounded-2xl border border-line w-full pl-6 pr-12'
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)}
                        />
                    </div>

                    <div className="keyword mt-8">
                        <div className="heading5">Feature Keywords</div>
                        <div className="list-keyword flex items-center flex-wrap gap-3 mt-4">
                            {['dress', 't-shirt', 'underwear', 'top'].map((item) => (
                                <div
                                    key={item}
                                    className="item px-4 py-1.5 border border-line rounded-full cursor-pointer duration-300 hover:bg-black hover:text-white"
                                    onClick={() => handleSearch(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-recent mt-8">
                        <div className="heading6">Recently Viewed Products</div>
                        <div className="list-product pb-5 hide-product-sold grid xl:grid-cols-4 sm:grid-cols-2 gap-7 mt-4">
                            {productData.slice(0, 4).map((product) => (
                                <Product key={product.id} data={product} type='grid' />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalSearch;

