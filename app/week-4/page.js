'use client';

import React from 'react';
import NewItem from './new-item'; // Adjust the path as necessary

export default function Page() {
  return (
    <main className="flex justify-center w-full">
    <div className="p-2 m-4 bg-white text-white w-36">
    <NewItem />
    </div>
    </main>
  );
}
