import React from 'react'
import Image from "next/image"
import Juice from "/public/images/About-Img/juice.png"
import  Splash  from "/public/images/About-Img/splash.png"

export default function About() {
  return (
      <div className='about-page'>
          <div className='about-images'>
          <Image
             src={Juice}
             alt={"Juice Image"}
             width={450} 
             height={450}
            className='juice-img'
          
              /> 
            
          <Image
             src={Splash}
             alt={"Splash Image"}
             width={600} 
            height={500}
                  className='splash-img'
                 
                  /> 
            
          </div>
          
          <div className="about-text">
           <h4 className="about-h4">Refresh Your World with Fanta</h4>
              <p className="about-p">
           Fanta brings a burst of vibrant flavours and effervescent fun to your day! Whether you&apos;re looking to quench your thirst with a zesty orange , tangy lemon or one of our many other fruit-inspired flavors, Fant is your go-to drink for a refreshing and exciting experience. Dive into  the world of Fanta and let every skip spark your senses with its bubbly, and refreshing taste!
              </p>
              <button className='about-btn'>Buy Now</button>
          </div>
    </div>
  )
}
