import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaHeart, FaBalanceScale, FaShareAlt } from "react-icons/fa";
import ProductTabs from "../components/products/ProductTabs";


const product = {
  title: "DarkProject ALU87 Daylight",
  price: 1175000,
  images: [
    "https://files.ox-sys.com/cache/500x_/image/2e/3d/ca/2e3dcae656853932acb8b355f2cbaadb35a8e9d33706574e6937fa9085d23a21.png",
    "https://files.ox-sys.com/cache/500x_/image/2e/3d/ca/2e3dcae656853932acb8b355f2cbaadb35a8e9d33706574e6937fa9085d23a21.png",
    "https://files.ox-sys.com/cache/500x_/image/2e/3d/ca/2e3dcae656853932acb8b355f2cbaadb35a8e9d33706574e6937fa9085d23a21.png",
    "https://files.ox-sys.com/cache/800x_/image/37/85/2f/37852f91edf2b46d396552f692ce11b64a2af672dcce1dda53e1bd2d19fad838.png",
  ],
  brand: "Dark Project",
};

const ProductDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    return (
        <>
            <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
                {/* LEFT: Image Gallery */}
                <div className="w-full md:w-1/2">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="w-full h-[350px] bg-pink-50 rounded-xl flex items-center justify-center"
                >
                    {product.images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                        src={src}
                        alt={`Image ${i}`}
                        className="h-full w-full object-contain mx-auto"
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
        
                {/* Thumbnail preview */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Thumbs]}
                    className="mt-4"
                >
                    {product.images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                        src={src}
                        alt={`Thumb ${i}`}
                        className="w-full h-16 object-contain border rounded hover:border-pink-500 cursor-pointer"
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>
        
                {/* RIGHT: Product Info */}
                <div className="bg-white p-6 rounded-xl shadow w-full md:w-1/2" >
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        
                <p className="text-green-600 font-medium mb-2">✔ В наличии</p>
        
                <div className="flex items-center gap-3 text-gray-400 mb-4">
                    <FaHeart className="cursor-pointer hover:text-pink-500" />
                    <FaBalanceScale className="cursor-pointer hover:text-pink-500" />
                    <FaShareAlt className="cursor-pointer hover:text-pink-500" />
                </div>
        
                <p className="text-2xl font-bold text-pink-600 mb-6">
                    {product.price.toLocaleString()} UZS
                </p>
        
                <input
                    type="text"
                    placeholder="Купить в один клик"
                    className="w-full border border-pink-500 py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
        
                <button className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition">
                    В корзину
                </button>
        
                <div className="mt-6 text-sm text-gray-600">
                    Производитель: <span className="font-medium">{product.brand}</span>
                </div>
                </div>
            </div>
                    


            {/* ProductTab */}

            <ProductTabs />
        </>
    );
  };
  
  

export default ProductDetail;
