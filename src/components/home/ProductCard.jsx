import React, { useEffect, useState } from 'react'
import { FaHeart, FaBalanceScale, FaShoppingCart } from "react-icons/fa";
import products from '../../data/products.json'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductCard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [comparedItems, setComparedItems] = useState([]);

  // Universal getter
  const getFromStorage = (key) => {
    try {
      const raw = localStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  };

  // Initial load
  useEffect(() => {
    setCartItems(getFromStorage('cart'));
    setFavourites(getFromStorage('favourites'));
    const storedComparison = getFromStorage('comparison');
    const ids = storedComparison.map(p => p.id);
    setComparedItems(ids);
  }, []);

  // Add/remove logic
  const toggleItem = (key, item, setFn, stateArray, successMsg, removeMsg) => {
    const stored = getFromStorage(key);
    const isAlready = stored.some(p => p.id === item.id);
    let updated;

    if (isAlready) {
      updated = stored.filter(p => p.id !== item.id);
      toast.success(removeMsg);
    } else {
      updated = [...stored, item];
      toast.success(successMsg);
    }

    localStorage.setItem(key, JSON.stringify(updated));
    const updatedIds = updated.map(p => p.id);
    setFn(updatedIds);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div key={product.id || index} className="relative border rounded-xl p-4 shadow-sm hover:shadow-xl transition bg-white">
          
          {/* Icons */}
          <div className="absolute top-2 right-2 flex gap-2">
            {/* Favourite */}
            <button
              className={`p-2 rounded-full transition ${
                favourites.includes(product.id)
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
              onClick={() =>
                toggleItem(
                  'favourites',
                  product,
                  setFavourites,
                  favourites,
                  'Added to favourites!',
                  'Removed from favourites!'
                )
              }
            >
              <FaHeart size={20} />
            </button>

            {/* Compare */}
            <button
              className={`p-2 rounded-full transition ${
                comparedItems.includes(product.id)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
              onClick={() =>
                toggleItem(
                  'comparison',
                  product,
                  setComparedItems,
                  comparedItems,
                  'Added to comparison!',
                  'Removed from comparison!'
                )
              }
            >
              <FaBalanceScale size={20} />
            </button>
          </div>

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain mb-4"
          />

          {/* Title */}
          <Link to={`/product/${index}`} className="block mb-2">
            <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
          </Link>

          {/* Brand */}
          <span className="text-xs text-pink-600 font-semibold inline-block my-1">
            {product.brand}
          </span>

          {/* Price */}
          <p className="text-pink-600 font-bold text-lg mb-4">
            {parseInt(product.price).toLocaleString()} UZS
          </p>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
            onClick={() =>
              toggleItem(
                'cart',
                product,
                setCartItems,
                cartItems,
                'Added to cart!',
                'Removed from cart!'
              )
            }
          >
            <FaShoppingCart />
            {cartItems.includes(product.id) ? 'Remove from Cart' : 'Add To Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
