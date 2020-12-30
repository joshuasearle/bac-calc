import React from 'react';
import classes from '../css/classes';

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
    <div className={'form-group'}>
      <label>{label}</label>
      <input
        className={'form-control'}
        type='number'
        // Display zero as empty string
        value={value === 0 ? '' : value}
        onChange={valueOnChangeHandler}
      ></input>
    </div>
  );
};

export default NumberPicker;
