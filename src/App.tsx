import React, { useState } from 'react';

import GenderPicker from './components/GenderPicker';
import DrinksPicker from './components/DrinksPicker';

import { time, gender } from './types';

const App: React.FC = () => {
  const title: string = 'BAC Calculator';

  const [drinksCount, setDrinksCount] = useState(0);
  const [gender, setGender] = useState<gender>('male');
  const [drinkingStartTime, setDrinkingStartTime] = useState<time>({
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
      <h1>{title}</h1>
      <GenderPicker
        currentGender={gender}
        genderChangeHandler={genderChangeHandler}
      />
      <DrinksPicker
        drinksCount={drinksCount}
        drinksCountChangeHandler={drinksCountChangeHandler}
      />
      <div>
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
