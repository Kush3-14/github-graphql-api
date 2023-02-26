import React, { useState } from "react";
import Link from "next/link";

const Navbar = (props) => {

  const handleSearch = (e) => {
    const input = e.target.value.trim();
    const regex = input ? new RegExp(input, "gi") : null;
    const parent = document.getElementById("parent");
    const child = document.getElementById("child");
  
    if (parent && child) {
      parent.appendChild(child);
    } else {
      console.error("Child node not found in parent");
    }
  
    const visibleElements = document.querySelectorAll("body *:not(script):not(style):not(noscript):not(meta)");
  
    visibleElements.forEach((node) => {
      if (node.innerText) {
        const innerText = node.innerText;
        const matchCount = (innerText.match(regex) || []).length;
        if (node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" || node.tagName === "P") {
          node.innerHTML = innerText.replace(
            regex,
            (match) => `<mark>${match}</mark>`
          );
        }
      }
    });
  }; 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-5">
        <Link className="navbar-brand" href="/">
          GraphQl API
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}
          />
        </form>
      </nav>
    </>
  );
};

export default Navbar;
