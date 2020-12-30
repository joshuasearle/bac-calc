import React from 'react';
import classes from '../css/classes';

import { gender } from '../types';
import { capitalise } from '../util';

import GenderRadio from './GenderRadio';

interface GenderPickerProps {
  currentGender: gender;
  genderChangeHandler: any;
}

const genders: gender[] = ['male', 'female', 'other'];

const GenderPicker: React.FC<GenderPickerProps> = ({
  currentGender,
  genderChangeHandler,
}: GenderPickerProps) => {
  // List of genders as radio buttons
  const genderRadios = genders.map((g: gender) => (
    <GenderRadio
      currentGender={currentGender}
      gender={g}
      label={capitalise(g)}
    />
  ));
  return (
    <div className={'form-group'}>
      <label>What is your gender</label>
      <div onChange={genderChangeHandler}>{genderRadios}</div>
    </div>
  );
};

export default GenderPicker;
