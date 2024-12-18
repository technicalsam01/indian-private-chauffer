 // @ts-nocheck 
import Image from 'next/image';
import React from 'react'
import indiatIcon from "../../../public/images/tourTravel/india.png"
import international from "../../../public/images/tourTravel/tourism.png"
import yatra from "../../../public/images/tourTravel/greeting.png"
import honeymoon from "../../../public/images/tourTravel/honeymoon.png"


interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="whate-new-block ">
                <div className="container">
                    <div className="heading flex flex-col ">
                        <div className="text-4xl font-bold mb-2 text-center ">Our Services</div>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Benefit