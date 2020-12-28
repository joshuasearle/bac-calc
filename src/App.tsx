import React, { useState } from 'react';

type gender = 'male' | 'female' | 'other';
interface time {
  hours: number;
  minutes: number;
}

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

  return (
    <>
      <h1>BAC Calculator</h1>
      <div>
        <label>What is your gender</label>
        <div onChange={genderChangeHandler}>
          <div>
            <input
              checked={gender === 'male'}
              defaultChecked
              type='radio'
              id='male'
              name='gender'
              value='male'
            />
            <label htmlFor='male'>Male</label>
          </div>
          <div>
            <input
              checked={gender === 'female'}
              type='radio'
              id='female'
              name='gender'
              value='female'
            />
            <label htmlFor='female'>Female</label>
          </div>
          <div>
            <input
              checked={gender === 'other'}
              type='radio'
              id='other'
              name='gender'
              value='other'
            />
            <label htmlFor='other'>Other</label>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default App;
