import React from 'react'
import Image from 'next/image'
import Logo from "../public/images/background/logo.png"
import CreditCard from "../public/images/credit-cards.webp"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
      <div className="footer-page">
          <div className="footer-main">
              
              <div className='footer-logo'>
              <Image
                alt='Fanta Logo'
                src={Logo}
                width={90}
                height={90}
                className='logo'
                  />  
                  <p className="footer-p">+111 3243453532</p>
                  <p className="footer-p">+234 3243453532</p>
              </div>
              
              <div className="footer-links">
                  <h5 className="footer-h">Quick Links</h5>  
                  <p className="footer-p">Home</p>
                  <p className="footer-p">About</p>
                  <p className="footer-p">Contact Us</p>
                  <p className="footer-p">Privacy Policy</p>
              </div>
              
              <div className="footer-ic">
                  <h5 className="footer-h">Follow Us</h5>
                  <div className="footer-icons">
                      <FaFacebookF />
                      <FaInstagram />
                      <FaTelegram />
                      <FaGoogle />
                  </div>
                
                  <p className="footer-p">Payment Method</p>
                  <Image
                      src={CreditCard}
                      alt='Credit Card'
                      width={300}
                      height={300}
                  />  
            </div>
          </div>
          
          <hr />
          <p className='copyright'>Copyright @ 2025. All rights reserved </p>
    </div>
  )
}
