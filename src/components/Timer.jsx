import React, { useEffect, useState } from "react";

export default function Timer() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const date = new Date(2024, 2, 2, 14, 0, 0);

  const timer = () => {
    let timeleft = new Date(date - new Date());
    setDays(timeleft.getDate());
    setHours(timeleft.getHours());
    setMinutes(timeleft.getMinutes());
  };
  setInterval(timer, 10000);
  useEffect(() => {
    timer();
  }, [days, hours, minutes]);

  return (
    <div className="Timer">
      <h1>
        {
          days &&
            (days >= 10 ? days : "0" + days) +
              ":" +
              (hours >= 10 ? hours : "0" + hours) +
              ":" +
              (minutes >= 10 ? minutes : "0" + minutes)
          // ":" +
          // (seconds >= 10 ? seconds : "0" + seconds)
        }
      </h1>
    </div>
  );
}
