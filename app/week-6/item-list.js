
"use client";

import React, { useState } from 'react';
import Item from './item'; // Import the Item component
import items from './items.json'; // Import the items from JSON file

function ItemList() {
  const [sortBy, setSortBy] = useState('name'); // Sorting state

  // Sorting logic
  let sortedItems = [...items];

  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  // Group items by category
  const groupedItems = sortedItems.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  // Sort category keys alphabetically
  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', padding: '20px', borderRadius: '8px' }}>
      {/* Sorting Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {['name', 'category', 'grouped'].map(option => (
          <button
            key={option}
            onClick={() => setSortBy(option)}
            style={{
              padding: '10px 15px',
              backgroundColor: sortBy === option ? '#075f6e' : '#2A9D8F',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {option === 'name' ? 'Name' : option === 'category' ? 'Category' : 'Grouped Category'}
          </button>
        ))}
      </div>

      {/* Render Items */}
      {sortBy === 'grouped' ? (
        sortedCategories.map(category => (
          <div key={category} style={{ marginBottom: '20px' }}>
            <h3 className={'capitalize text-xl'}>{category}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {groupedItems[category].map(item => (
                <Item 
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
