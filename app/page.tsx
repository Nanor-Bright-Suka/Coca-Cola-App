"use client";

import './globals.css';
import Image from 'next/image'
import Logo from "/public/images/background/logo.png"
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { Lobster } from 'next/font/google';
import { useState } from 'react';
import { photos } from "@/Utilities/Utils"
import ProductCard from '@/components/ProductCard';

//import {motion} from "framer-motion"


const pacifico = Lobster({
  weight: "400",
  subsets: ['latin'],
})


export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

  const handleImageClick = (photo: PhotoProps) => {
    setSelectedPhoto(photo);
  };


  return (
      <> 
    <div
      className="container-div"
      style={{
        backgroundColor: selectedPhoto.bgColor, 
        transition: "background-color 0.5s ease",
      }}
    >

      <header className="header-styles">

        {/* Logo */}
        <div className='logo-div'>
              <Image
                alt='Fanta Logo'
                src={Logo}
                width={90}
                height={90}
                className='logo'
              />  
        </div>

        {/* Navigation */}
        <nav className='nav'> 
              <div className='nav-menu'>
                    <IoMdMenu style={{ color: "white", fontSize: "2.5rem" }} />
              </div>
              <Link href={"/home"} className='nav-link'>HOME</Link>
              <Link href={"/category"} className='nav-link'>CATEGORY</Link>
              <Link href={"/blog"} className='nav-link'>BLOG</Link>
              <Link href={"/about"} className='nav-link'>ABOUT</Link>
              <Link href={"/contact"} className='nav-link'>CONTACT</Link>
              <Link href={"/login"} className='nav-link'>
                <FaRegUser style={{ color: "white", fontSize: "1.5rem",margin: "0.8rem" }} />
              </Link>
        </nav>

      </header>

      


      {/* Main content */}
      <main className='main-styles'>
        
        {/* main content */}
        <div className='main-text'>

            <h1 className={`${pacifico.className} main-h1`}>
              {selectedPhoto.text}
            </h1>
            <p className='main-p'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Impedit assumenda illum nulla nam deserunt.
            </p>
            <button className='main-btn'>
              Order Now
            </button>
            <br/>
            <span className="main-span">
            _________ TOP RECOMMENDATION ___________
            </span> 
         
           
           {/* Thumbnails */}
  <div style={{ display: "flex", gap: "3rem", marginTop: "2rem" }}>
    {photos.map((photo) => (
    <div
      key={photo.id}
      style={{
        textAlign: "center", // Center-align the price under the image
        cursor: "pointer",
        transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth transition for both opacity and scale
        transform: selectedPhoto.id === photo.id ? "scale(1)" : "scale(0.8)", // Scale on selection
        opacity: selectedPhoto.id === photo.id ? 1 : 0.8
        , // Dim others
      }}
      onClick={() => handleImageClick(photo)}
    >
      {/* Thumbnail Image */}
      <Image
        src={photo.src}
        alt={`Thumbnail ${photo.id}`}
        width={100}
        height={100}
        style={{
          scale: selectedPhoto.id === photo.id ? 1 : 0.8, // Highlight selected
          opacity: selectedPhoto.id === photo.id ? 1 : 0.5, // Dim others
        }}
      />
      {/* Price */}
      <span
        style={{
          display: "block",
          marginTop: "0.5rem",
          fontWeight: "bold",
          color: selectedPhoto.id === photo.id ? "white" : "black", // Highlight selected price
        }}
      >
        {photo.price}
      </span>
    </div>
  ))}
</div>

        </div>

      {/* Larger  image */}
        <div className='main-img-div'>          
          <Image
            alt={selectedPhoto.text}
            src={selectedPhoto.largeSrc}
            width={370}
            height={370}
            layout="responsive"
           className='main-img'
          />
        </div>
        
      </main> 
        </div>

       {/* Products Page */}
        <ProductCard />
        </>
  )
}
