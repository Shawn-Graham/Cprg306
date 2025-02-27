"use client";
import React from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';

const Page = () => {
  // Initialize the state variable with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler function to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <main className=" bg-slate-950">
      <div className="m-4">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <div >
          <NewItem onAddItem={handleAddItem} />
          </div>
      <ItemList items={items}/>
      </div>
    </main>
  );
};

export default Page;
