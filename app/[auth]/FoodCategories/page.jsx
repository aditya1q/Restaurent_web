import React from 'react';
import FoodItems from '../FoodItems/page';
const FoodCategory = ({ name, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div className="grid grid-cols-1 gap-4">
        {items.map(item => (
          <FoodItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
