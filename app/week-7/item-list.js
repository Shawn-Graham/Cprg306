"use client";
import React, { useState } from "react";
import Item from "./item"; // Import the Item component
import items from "./items.json"; // Import the items from JSON file

function ItemList() {
  const [sortBy, setSortBy] = useState("name"); // Sorting state

  // Sorting logic
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {/* Sorting Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {["name", "category"].map((option) => (
          <button
            key={option}
            onClick={() => setSortBy(option)}
            style={{
              padding: "10px 15px",
              backgroundColor: sortBy === option ? "#075f6e" : "#2A9D8F",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option === "name" ? "Sort by Name" : "Sort by Category"}
          </button>
        ))}
      </div>

      {/* Render Items */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
