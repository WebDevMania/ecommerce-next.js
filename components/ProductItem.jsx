import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem = ({ product }) => {
  
  return (
    <Link href={`/product/${product._id}`} className="no-underline shadow-lg p-5 hover:shadow-xl transition-all">
      <div>
        <div>
          <Image src={product.image} width='500' height='500' alt=""/>
        </div>
        <div className='flex items-center justify-center flex-col gap-2'>
          <h3 className='text-orange-500 text-2xl capitalize mt-4'>{product.name}</h3>
          <span className='text-[18px]'>{product.category}</span>
          <span className='text-[#555]'>${product.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem