"use client";

import './globals.css';
import Image from 'next/image'
import Logo from "/public/images/background/logo.png"
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { Lobster } from 'next/font/google';
import { useState } from 'react';
import { photos } from "@/Utilities/Utils"
import ProductCard from '@/components/ProductCard';
import About from '@/components/About';
import Note from '@/components/Note';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

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

  //Toggle Drop down visibility
  const [isDropdownVisible, setDropdownVisible] = useState<Boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
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
             <div className={`dropdown-menu ${isDropdownVisible ? "visible": "hidden"}`}> 
              <div className='nav-menu'>
                    <IoMdMenu style={{ color: "white", fontSize: "2.5rem" }} onClick={toggleDropdown}/>
            </div>
              <Link href={"/"} className='nav-link'>HOME</Link>
              <Link href={"/products"} className='nav-link'>PRODUCT</Link>
              <Link href={"/blog"} className='nav-link'>BLOG</Link>
              <Link href={"/about"} className='nav-link'>ABOUT</Link>
              <Link href={"/contact"} className='nav-link'>CONTACT</Link>
              <Link href={"/faq"} className='nav-link'> FAQ Page</Link>
            </div>
        </nav>

      </header>

      


      {/* Main content */}
      <main className='main-styles'>
        
        {/* main content */}
        <div className='main-text'>
                <div className='main-wrapper'>  
            <h1 className={`${pacifico.className} main-h1`}>
              {selectedPhoto.text}
            </h1>
            <p className='main-p'>
              Lorem ipsum dolor sit amet consectetur,  adipisicing elit.Impedit assumenda illum nulla nam deserunt.
            </p>
            <button className='main-btn'>
              Order Now
            </button>
            <br/>
            <span className="main-span">
            _________ TOP RECOMMENDATION _________
            </span> 
         
            </div>
           {/* Thumbnails */}
  <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }} className="thumbnail">
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
        width={90}
        height={90}
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
           className='main-img'
          />
        </div>
        
      </main> 
        </div>

      <ProductCard />
      <About />
      <Note /> 
      <Blog /> 
      <FAQ />
      <Footer /> 
        </>
  )
}
