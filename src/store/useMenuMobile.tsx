// import { useState, useEffect, useCallback } from 'react';

// const useMenuMobile = () => {
//     const [openMenuMobile, setOpenMenuMobile] = useState(false)

//     const handleMenuMobile = () => {
//         setOpenMenuMobile((toggleOpen) => !toggleOpen)
//     }

//     const handleClickOutsideMenuMobile = useCallback((event: Event) => {
//         const targetElement = event.target as Element;

//         if (openMenuMobile && !targetElement.closest('#menu-mobile')) {
//             setOpenMenuMobile(false)
//         }
//     }, [openMenuMobile]);

//     useEffect(() => {
//         document.addEventListener('click', handleClickOutsideMenuMobile);

//         return () => {
//             document.removeEventListener('click', handleClickOutsideMenuMobile);
//         };
//     }, [handleClickOutsideMenuMobile, openMenuMobile])

//     return {
//         openMenuMobile,
//         handleMenuMobile,
//     }
// }

// export default useMenuMobile

import { useState, useEffect, useCallback } from 'react';

const useMenuMobile = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    const handleMenuMobile = () => {
        setOpenMenuMobile((prevState) => !prevState);
    };

    const handleClickOutsideMenuMobile = useCallback((event: Event) => {
        const targetElement = event.target as Element;

        if (openMenuMobile && !targetElement.closest('#menu-mobile')) {
            setOpenMenuMobile(false);
        }
    }, [openMenuMobile]); // This is necessary to track the current state of `openMenuMobile`

    useEffect(() => {
        // Add event listener to detect clicks outside of the menu
        document.addEventListener('click', handleClickOutsideMenuMobile);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutsideMenuMobile);
        };
    }, [handleClickOutsideMenuMobile]); // Only depend on `handleClickOutsideMenuMobile`

    return {
        openMenuMobile,
        handleMenuMobile,
    };
};

export default useMenuMobile;
