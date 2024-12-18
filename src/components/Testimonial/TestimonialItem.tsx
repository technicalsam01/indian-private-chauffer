import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TestimonialType } from '@/type/TestimonialType'
import Rate from '../Other/Rate'

interface TestimonialProps {
    data: TestimonialType
    type: string
}

const TestimonialItem: React.FC<TestimonialProps> = ({ data, type }) => {
    return (
        <>
            <div className="testimonial-item style-one h-full relative">
                <div className="testimonial-main bg-white p-8 rounded-2xl h-full">
                    <Rate currentRate={data.star} size={14} />
                    <div className="heading6 title mt-4">{data.title}</div>
                    <div className="desc mt-2">{data.description}</div>
                    <div className="text-button name mt-4">{data.name}</div>
                    <div className="caption2 date text-secondary2 mt-1">{data.date}</div>
                </div>
                <Image
    className="rounded-full absolute bottom-4 right-4 sm:w-24 sm:h-24 w-auto h-auto"
    alt={data.title}
    src={data.avatar}
    width={100}
    height={100}
/>

            </div>

        </>
    )
}

export default TestimonialItem