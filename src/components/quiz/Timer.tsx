import { useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(30);
  if (time === 0) {
    alert("Time's up!");
    setTime(30);
    document.getElementById('skipBtn')?.click();
  }
  setTimeout(() => {
    setTime(time - 1);
  }, 1000);
  return <>
    <span className='decoration-from-font bg-blue-400 text-white font-bold py-2 px-4 rounded'>Timer{` ${time}`}</span>
  </>;
}
