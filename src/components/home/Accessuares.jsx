import React from 'react'

import accessuares from '../../data/accessuares.json'

const Accessuares = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {accessuares.map((category, index) => (
                <div className="bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition">
                    <img src={category.image} alt={category.title} className="h-28 object-contain mb-4" />
                    <p className="text-sm font-semibold text-gray-800">
                        {category.title} <span className="text-xl ml-1">→</span>
                    </p>
                </div>
            ))}

        </div>
    )
}

export default Accessuares
