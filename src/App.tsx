import React, { useState } from 'react';

import GenderPicker from './components/GenderPicker';
import StartTimePicker from './components/StartTimePicker';
import NumberPicker from './components/NumberPicker';

import { time, gender } from './types';

const App: React.FC = () => {
  const title: string = 'BAC Calculator';

  const [drinksCount, setDrinksCount] = useState(0);
  const [gender, setGender] = useState<gender>('male');
  const [startTime, setStartTime] = useState<time>({
    hours: 18,
    minutes: 0,
  });
  const [standardDrink, setStandardDrink] = useState(10);
  const [weight, setWeight] = useState(80);

  const numberChangeHandler = (setter: any) => {
    return (e: any) => {
      // Convert to number
      const value = +e.target.value;
      // If not a number, return
      if (isNaN(value)) return setter(0);
      // If less than zero, return
      if (value < 0) return setter(0);
      setter(value);
    };
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
    console.log('gender', gender);
    console.log('standard drink', standardDrink);
    console.log('drink count', drinksCount);
    console.log('weight', weight);
    console.log('start time', startTime);
  };

  const genderPicker = (
    <GenderPicker
      currentGender={gender}
      genderChangeHandler={genderChangeHandler}
    />
  );

  const standardPicker = (
    <NumberPicker
      value={standardDrink}
      changeHandler={numberChangeHandler(setStandardDrink)}
      label={'What is a standard drink in your country (grams)'}
    />
  );
  const drinkPicker = (
    <NumberPicker
      value={drinksCount}
      changeHandler={numberChangeHandler(setDrinksCount)}
      label={'How many standard drinks have will you have'}
    />
  );

  const weightPicker = (
    <NumberPicker
      value={weight}
      changeHandler={numberChangeHandler(setWeight)}
      label={'How much do you weigh (kilograms)'}
    />
  );

  const startTimePicker = (
    <StartTimePicker
      startTime={startTime}
      startTimeChangeHandler={startTimeChangeHandler}
    />
  );

  const helpLink = (
    <a
      href='https://en.wikipedia.org/wiki/Standard_drink#Definitions_in_various_countries'
      target='_blank'
    >
      Don't know what a standard drink is in my country
    </a>
  );

  return (
    <>
      <h1>{title}</h1>
      {genderPicker}
      {helpLink}
      {standardPicker}
      {drinkPicker}
      {weightPicker}
      {startTimePicker}
      <div>
        <button onClick={sumbitOnClickHandler}>Submit</button>
      </div>
    </>
  );
};

export default App;
