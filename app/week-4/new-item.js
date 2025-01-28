'use client';

import React, { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Functions to update quantity
  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex justify-between">
      <span className="text-black text-lg font-semibold">{quantity}</span>
      <div className="flex">
        {/* Quantity Display */}
      

        {/* Decrement Button (ALWAYS Gray) */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          type="button" class="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 
          focus:outline-none focus:ring-2 disabled:bg-gray-400
           focus:ring-blue-400 focus:ring-opacity-75">-</button>
          
   

        {/* Increment Button (Always Blue) */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          type="button" class="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 
          focus:outline-none focus:ring-2
           focus:ring-blue-400 focus:ring-opacity-75 ml-1">
          +
        </button>
      </div>
    </div>
  );
}
