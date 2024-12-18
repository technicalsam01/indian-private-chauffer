// @ts-nocheck 
'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import blogData from '@/data/Blog.json'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/navigation'
import * as Icon from "@phosphor-icons/react/dist/ssr";

// This component relies on useSearchParams, so we wrap it in Suspense.
const BlogList = () => {
    

    return (
        <div>Testing for build</div>
    );
};

export default BlogList;
