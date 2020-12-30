import React from 'react';
import classes from '../css/classes';

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
    <div className={'form-group'}>
      <label className={classes.inputLabel}>
        What time will you start drinking
      </label>
      <input
        className={'form-control'}
        type='time'
        onChange={startTimeChangeHandler}
        value={timeObjToString(startTime)}
      ></input>
    </div>
  );
};

export default StartTimePicker;
