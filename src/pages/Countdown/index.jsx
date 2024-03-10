import { useState, useEffect } from "react";
import "./style.scss"

export const Countdown = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      days,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
    <div>
      <h3 className="countdown">Do tábora zbývá {timeRemaining.days} dní</h3>
    </div>
  );
};
