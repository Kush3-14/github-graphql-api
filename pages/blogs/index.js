import React from "react";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import styles from "../../styles/Home.module.css";


const BlogList = () => {
  const blogIds = [1, 2, 3];

  return (
    <>
      <Navbar></Navbar>
      <h1 className= {styles.main}><u>Blog List</u></h1>
      <div className={styles.card}>
      {blogIds.map((blogId) => (
        <Link key={blogId} href={`/blogs/${blogId}`}>
          <h2>{blogId}. Blog {blogId}</h2>
        </Link>
      ))}
      </div>
    </>
  );
};

export default BlogList;
