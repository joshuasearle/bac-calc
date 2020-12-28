import React from 'react';

interface NumberPickerProps {
  value: number;
  changeHandler: any;
  label: string;
}

const NumberPicker: React.FC<NumberPickerProps> = ({
  value,
  changeHandler: valueOnChangeHandler,
  label,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type='number'
        // Display zero as empty string
        value={value === 0 ? '' : value}
        onChange={valueOnChangeHandler}
      ></input>
    </div>
  );
};

export default NumberPicker;
