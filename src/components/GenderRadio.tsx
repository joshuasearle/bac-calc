import React from 'react';

import { gender } from '../types';

interface GenderRadioProps {
  currentGender: gender;
  gender: gender;
  label: string;
}

const GenderRadio: React.FC<GenderRadioProps> = ({
  currentGender,
  gender,
  label,
}) => {
  return (
    <div>
      <input
        checked={currentGender === gender}
        type='radio'
        id={gender}
        name={gender}
        value={gender}
      />
      <label htmlFor={gender}>{label}</label>
    </div>
  );
};

export default GenderRadio;
