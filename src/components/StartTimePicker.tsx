import React from 'react';

import { time } from '../types';
import { timeObjToString } from '../util';

interface StartTimePickerProps {
  startTime: time;
  startTimeChangeHandler: any;
}

const StartTimePicker: React.FC<StartTimePickerProps> = ({
  startTime,
  startTimeChangeHandler,
}) => {
  return (
    <div>
      <label>What time will you start drinking</label>
      <input
        type='time'
        onChange={startTimeChangeHandler}
        value={timeObjToString(startTime)}
      ></input>
    </div>
  );
};

export default StartTimePicker;