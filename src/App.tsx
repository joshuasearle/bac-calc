import React, { useState } from 'react';

import { Line } from 'react-chartjs-2';

import GenderPicker from './components/GenderPicker';
import StartTimePicker from './components/StartTimePicker';
import NumberPicker from './components/NumberPicker';

import { time, gender, bacData, bacDataPoint } from './types';
import { widmark, createBacData } from './util';
import classes from './css/classes';

const App: React.FC = () => {
  const title: string = 'BAC Calculator';

  const [drinksCount, setDrinksCount] = useState(5);
  const [gender, setGender] = useState<gender>('male');
  const [startTime, setStartTime] = useState<time>({
    hours: 18,
    minutes: 0,
  });
  const [standardDrink, setStandardDrink] = useState(10);
  const [weight, setWeight] = useState(80);
  const [bacData, setBacData] = useState<bacData>(null);

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
    // console.log(widmark(drinksCount, standardDrink, weight, gender, 2));
    const bacs = [];
    let lastBac = 1;
    let elapsed = 0;
    while (lastBac !== 0) {
      lastBac = widmark(drinksCount, standardDrink, weight, gender, elapsed);
      bacs.push(lastBac);
      elapsed += 0.5;
    }
    const bacData = createBacData(bacs, startTime);
    setBacData(bacData);
  };

  const data = {
    labels: bacData ? bacData.map(({ bac, time }) => time) : null,
    datasets: [
      {
        backgroundColor: '#000000',
        borderColor: '#AAAAAA',
        fill: false,
        data: bacData ? bacData.map(({ bac, time }) => bac) : null,
      },
    ],
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
      label={'How many standard drinks will you have'}
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

  const options = {
    title: { display: true, text: 'BAC Over Time' },
    scales: {
      xAxes: [{ scaleLabel: { display: true, labelString: 'Time' } }],
      yAxes: [{ scaleLabel: { display: true, labelString: 'BAC' } }],
      ticks: { beginAtZero: true },
    },
    legend: {
      display: false,
    },
    tooltips: {
      display: false,
    },
  };

  const lineChart = bacData ? <Line data={data} options={options} /> : null;

  return (
    <>
      <div className={classes.options}>
        <h1 className={classes.title}>{title}</h1>
        {genderPicker}
        {helpLink}
        {standardPicker}
        {drinkPicker}
        {weightPicker}
        {startTimePicker}
        <div className={classes.submit}>
          <button onClick={sumbitOnClickHandler}>Submit</button>
        </div>
      </div>

      <div className={classes.chart}>{lineChart}</div>
    </>
  );
};

export default App;
