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
      <label>How many standard drinks have will you have</label>
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
