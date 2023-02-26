import React from 'react';
import Navbar from '../Components/Navbar';
import { useRouter } from 'next/router';

const BlogDetails = () => {
    const router = useRouter();
    const { blogId } = router.query;
    
    return (
        <>
            <Navbar />
            <h1>Some details about blog {blogId}</h1>
        </>
    )
}

export default BlogDetails;
