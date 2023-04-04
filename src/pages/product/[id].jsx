import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillShopping } from 'react-icons/ai'
import Layout from '../../../components/Layout'
import { useCartContext } from '../../../ctx/cartContext'

const ProductDetails = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCartContext()

    const addQuantity = (command) => {
        setQuantity(prev => {
            if (command === 'dec') {
                if (prev <= 1) return 1
                else return prev - 1
            }

            if (command === 'inc') {
                return prev + 1
            }
        })
    }

    return (
        <>
            <Layout>
                <div className='py-20 h-full w-full flex justify-center'>
                    {/* left */}
                    <div className="h-full w-10/12 flex justify-between">
                        <div className='flex-1'>
                            <Image src={product?.image} width="500" height="1250" alt="product image" />
                        </div>
                        {/* right */}
                        <div className='flex-1 flex flex-col gap-8'>
                            <h2 className='text-[20px] text-[#333]'>Name of Product: <span className='text-orange-500 ml-2'>{product?.name}</span></h2>
                            <span className='text-[20px] flex items-center gap-4'>Category: <span className='px-4 py-2 text-[#efefef] text-[16px] bg-orange-500 rounded-xl'>{product?.category}</span></span>
                            <p className='text-[20px] text-[#333]'>Description: <span className='text-orange-500 ml-2 text-ellipsis'>{product?.desc}</span></p>
                            <div className='flex gap-6 items-center'>
                                <span onClick={() => addQuantity('dec')} className='bg-slate-300 px-4 py-2 text-[18px]'>-</span>
                                <span>{quantity}</span>
                                <span onClick={() => addQuantity('inc')} className='bg-slate-300 px-4 py-2 text-[18px]'>+</span>
                            </div>
                            <span className="text-[20px] text-[#333]">Price: <span className='text-orange-500 ml-2'>${product?.price}</span></span>
                            <button onClick={() => addToCart({...product, quantity})} className="mt-auto py-2 px-5 rounded-lg flex items-center gap-4 bg-orange-400 text-[#efefef] max-w-max hover:bg-orange-500 tranistion-all">Add to Cart <AiFillShopping /></button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProductDetails

export async function getServerSideProps(ctx) {
    const id = ctx.params.id

    const { data: product } = await axios.get(`http://localhost:3000/api/products/${id}`)

    return {
        props: {
            product
        }
    }
}