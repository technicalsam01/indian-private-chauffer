 // @ts-nocheck 
import React from 'react'
// import BlogItem from '../Blog/BlogItem'
import { BlogType } from '@/type/BlogType'

interface Props {
    data: Array<BlogType>;
    start: number;
    limit: number;
}
const OurBlog: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="news-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Our Blog</div>
                </div>
            </div>
        </>
    )
}

export default OurBlog