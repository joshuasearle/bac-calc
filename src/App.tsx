import React, { useState } from 'react';

import GenderPicker from './components/GenderPicker';

import { time, gender } from './types';

const App: React.FC = () => {
  const [standardCount, setStandardsCount] = useState(0);
  const [gender, setGender] = useState<gender>('male');
  const [drinkingStartTime, setDrinkingStartTime] = useState<time>({
    hours: 18,
    minutes: 0,
  });

  const standardCountChangeHandler = (e: any) => {
    // Convert to number
    const value = +e.target.value;
    // If not a number, return
    if (isNaN(value)) return setStandardsCount(0);
    // If less than zero, return
    if (value < 0) return setStandardsCount(0);
    setStandardsCount(value);
  };

  const genderChangeHandler = (e: any) => {
    const gender: gender = e.target.value;
    setGender(gender);
  };

  const drinkingStartChangeHandler = (e: any) => {
    const value = e.target.value;
    const [hoursString, minsString] = value.split(':');
    setDrinkingStartTime({ hours: +hoursString, minutes: +minsString });
  };

  const timeObjToString = ({ hours, minutes }: time): string => {
    const hoursString = String(hours);
    const minutesString = String(minutes);
    const doubleHoursString =
      hoursString.length === 2 ? hoursString : '0' + hoursString;
    const doubleMinutesString =
      minutesString.length === 2 ? minutesString : '0' + minutesString;
    return doubleHoursString + ':' + doubleMinutesString;
  };

  const sumbitOnClickHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>BAC Calculator</h1>
      <GenderPicker
        currentGender={gender}
        genderChangeHandler={genderChangeHandler}
      />
      <div>
        <label>How many drinks have you had</label>
        <input
          type='number'
          // Display zero as empty string
          value={standardCount === 0 ? '' : standardCount}
          onChange={standardCountChangeHandler}
        ></input>

        <label>What time did you start drinking</label>
        <input
          type='time'
          onChange={drinkingStartChangeHandler}
          value={timeObjToString(drinkingStartTime)}
        ></input>

        <button onClick={sumbitOnClickHandler}>Submit</button>
      </div>
    </>
  );
};

export default App;
