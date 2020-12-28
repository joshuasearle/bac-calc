import React, { useState } from 'react';

type gender = 'male' | 'female' | 'other';

const App: React.FC = () => {
  const [standardCount, setStandardsCount] = useState(0);
  const [gender, setGender] = useState<gender>('male');

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

  return (
    <>
      <h1>BAC Calculator</h1>
      <div>
        <label>What is your gender</label>
        <div onChange={genderChangeHandler}>
          <div>
            <input
              defaultChecked
              type='radio'
              id='male'
              name='gender'
              value='male'
            />
            <label htmlFor='male'>Male</label>
          </div>
          <div>
            <input type='radio' id='female' name='gender' value='female' />
            <label htmlFor='female'>Female</label>
          </div>
          <div>
            <input type='radio' id='other' name='gender' value='other' />
            <label htmlFor='other'>Other</label>
          </div>
        </div>

        <label>How many drinks have you consumed</label>
        <input
          type='number'
          // Display zero as empty string
          value={standardCount === 0 ? '' : standardCount}
          onChange={standardCountChangeHandler}
        ></input>
      </div>
    </>
  );
};

export default App;
