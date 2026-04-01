import './CSS/App.css';
import Image from './ASSETS/Ashok-Final-Logo-2.png';
import BackgroundImg from './ASSETS/bc.jpg';
import { ButtonCon } from './COMPONENTS/Button';
import { useCallback, useMemo } from "react";
import { useState, useEffect } from 'react';
import { DateTime } from './COMPONENTS/DateTime';

function App() {
  const [value, setValue] = useState(true);
  
  const targetDate = useMemo(() => {
  return new Date(2026, 3, 24);
  }, []);
  const [timeLeft, setTimeLeft] = useState({});
  
  const targetvalue = (val) =>{
    setValue(val);
  };
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const diff = targetDate - now;
    
  if (diff > 0) {
    return {
      // days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      // hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      hours: 24 - now.getHours(),
      minutes: 60 - now.getMinutes(),
      seconds: 60 - now.getSeconds(),
      days: 23 - now.getDate()
    };
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
}, [targetDate]);

  useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, [calculateTimeLeft]);

  return (
    <div className='BlackScreen'>
      <div className='PopupScreen'>
        <img id="bc" src={BackgroundImg} alt='BackgroundImg'></img>
        <div className='AshokLogo'>
          <img src={Image} alt='Logo'></img>
          <p>உங்கள் ஒரு வாக்கு, சமூக முன்னேற்றத்திற்கு ஒரு படி – சிறந்த எதிர்காலத்தை உருவாக்க வாக்களியுங்கள்</p>

          { value ?
            <ButtonCon func={targetvalue}/>:
          <DateTime date={timeLeft.days} hrs={timeLeft.hours} min={timeLeft.minutes} sec={timeLeft.seconds}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
