import React from 'react'
import { productCard } from '@/Utilities/Utils'
import Image from 'next/image'
import { div } from 'framer-motion/client'

export default function ProductCard() {
    return (
        <div className='products-page'> 
            
             <div className='p-heading-div'>
            <h2 className='products-heading'>Our Products</h2>
            </div>

        <div className='product-main'>
          {productCard.map((product) => (
              <div
                  key={product.id}
                  className='product-card'
              >
              <Image
                 src={product.src}
                  alt={product.alt}
                  width={90}
                  height={90}
              /> 
              <h3 className='prdt-name'>{product.name}</h3>
              <p className='prdt-des'> {product.des}</p>
            <button className='prdt-btn'>{product.purchase}</button>
              </div>
          ))
              
          }
        </div>
        
    </div>
  )
}
