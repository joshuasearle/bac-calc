import React, { useState } from 'react';

import GenderPicker from './components/GenderPicker';
import DrinksPicker from './components/DrinksPicker';
import StartTimePicker from './components/StartTimePicker';

import { time, gender } from './types';

const App: React.FC = () => {
  const title: string = 'BAC Calculator';

  const [drinksCount, setDrinksCount] = useState(0);
  const [gender, setGender] = useState<gender>('male');
  const [startTime, setStartTime] = useState<time>({
    hours: 18,
    minutes: 0,
  });

  const drinksCountChangeHandler = (e: any) => {
    // Convert to number
    const value = +e.target.value;
    // If not a number, return
    if (isNaN(value)) return setDrinksCount(0);
    // If less than zero, return
    if (value < 0) return setDrinksCount(0);
    setDrinksCount(value);
  };

  const genderChangeHandler = (e: any) => {
    const gender: gender = e.target.value;
    setGender(gender);
  };

  const startTimeChangeHandler = (e: any) => {
    const value = e.target.value;
    const [hoursString, minsString] = value.split(':');
    setStartTime({ hours: +hoursString, minutes: +minsString });
  };

  const sumbitOnClickHandler = (e: any) => {
    e.preventDefault();
    console.log();
  };

  return (
    <>
      <h1>{title}</h1>
      <GenderPicker
        currentGender={gender}
        genderChangeHandler={genderChangeHandler}
      />
      <DrinksPicker
        drinksCount={drinksCount}
        drinksCountChangeHandler={drinksCountChangeHandler}
      />
      <StartTimePicker
        startTime={startTime}
        startTimeChangeHandler={startTimeChangeHandler}
      />
      <div>
        <button onClick={sumbitOnClickHandler}>Submit</button>
      </div>
    </>
  );
};

export default App;
