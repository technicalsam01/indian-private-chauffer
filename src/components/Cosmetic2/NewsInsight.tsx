import React from 'react'
// import BlogItem from '../Blog/BlogItem'
import { BlogType } from '@/type/BlogType'

interface Props {
    data: Array<BlogType>;
    start: number;
    limit: number;
}
const NewsInsight: React.FC<Props> = ({ data, start, limit }) => {
    return (
        <>
            <div className="news-block pb-20">
                <div className="container">
                    <div className="heading3 text-center">News insight</div>
                </div>
            </div>
        </>
    )
}

export default NewsInsight