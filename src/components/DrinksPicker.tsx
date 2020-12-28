import React from 'react';

interface DrinksPickerProps {
  drinksCount: number;
  drinksCountChangeHandler: any;
}

const DrinksPicker: React.FC<DrinksPickerProps> = ({
  drinksCount,
  drinksCountChangeHandler,
}) => {
  return (
    <div>
      <label>How many drinks have you had</label>
      <input
        type='number'
        // Display zero as empty string
        value={drinksCount === 0 ? '' : drinksCount}
        onChange={drinksCountChangeHandler}
      ></input>
    </div>
  );
};

export default DrinksPicker;
