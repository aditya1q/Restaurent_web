"use client"

import React, { useState } from 'react';

const FoodItem = ({ item }) => {
    const { name, description, price, image, ingredients } = item;
    const [showThankYou, setShowThankYou] = useState(false);

    const handleOrderNow = () => {
        setShowThankYou(true);
    };

    return (
        <div className="shadow-2xl h-[450px] flex flex-col items-center justify-center md:w-[360px] mdl:w-[420px] lg:w-[500px] xl:w-[400px] gap-1 md:gap-3 border border-black">
            <img src={`/images/${image}`} alt={name} className="mb-2 rounded-full object-contain mix-blend-color-burn w-[35%]" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-700">Ingredients: {ingredients.join(', ')}</p>
            <p className="text-red-600 font-semibold">Price: ${price.toFixed(2)}</p>
            <button
                onClick={handleOrderNow}
                className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 mt-5 md:mt-7 "
            >
                Order Now
            </button>
            {showThankYou && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 shadow-md rounded-md">
                        <h1 className="text-2xl font-semibold mb-4">Thank You! 😄😃</h1>
                        <p>Your order has been received and is being processed.</p>
                        <p>Please visit again. Have a nice day</p>
                        <button
                            onClick={() => setShowThankYou(false)}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodItem;
