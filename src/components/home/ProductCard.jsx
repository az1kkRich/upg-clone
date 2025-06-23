import React from 'react'
import { FaHeart, FaBalanceScale, FaShoppingCart } from "react-icons/fa";

import products from '../../data/products.json'

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {products.map((product, index) => (
         <div className="relative border rounded-xl p-4 shadow-sm hover:shadow-xl transition bg-white">
         {/* Favorite & Compare Icons */}
         <div className="absolute top-2 right-2 flex gap-2">
           <button className="text-gray-400 hover:text-pink-500">
             <FaHeart />
           </button>
           <button className="text-gray-400 hover:text-pink-500">
             <FaBalanceScale />
           </button>
         </div>
   
         {/* Product Image */}
         <img
           src={product.image}
           alt={product.title}
           className="w-full h-40 object-contain mb-4"
         />
   
         {/* Title */}
         <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
   
         {/* Brand */}
         <span className="text-xs text-pink-600 font-semibold inline-block my-1">
           {product.brand}
         </span>
   
         {/* Price */}
         <p className="text-pink-600 font-bold text-lg mb-4">
           {product.price.toLocaleString()} UZS
         </p>
   
         {/* Add to Cart Button */}
         <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition">
           <FaShoppingCart />
           Add To Cart
         </button>
       </div>
      ))}
    </div>
  )
}

export default ProductCard
