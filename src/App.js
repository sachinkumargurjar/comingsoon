import "./App.css";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";

function App() {
  const [timeDay, setTimeDay] = useState("00");
  const [timeHours, setTimeHours] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");

  let interval = useRef();

  const Timer = () => {
    var countdate = new Date("Jan 16, 2024 19:32:00").getTime();

    interval = setInterval(() => {
      var current = new Date().getTime();

      var difftime = countdate - current;

      var days = Math.floor(difftime / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (difftime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((difftime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difftime % (1000 * 60)) / 1000);

      if (difftime < 0) {
        // days = 0;
        // hours = 0;
        // minutes = 0;
        // seconds = 0;
        clearInterval(interval.current);
      } else {
        setTimeDay(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    Timer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="App">
      <section>
        <div className="firstcontent">
          <h1 className="Coming">Coming Soon</h1>
          <h3 className="Construction">We are under construction</h3>
          <h4 className="Launch">We Will Launch After</h4>
        </div>
      </section>
      <section className="content">
        <div className="time">
          <section style={{ padding: "5px", margin: "5px" }}>
            <p>{timeDay}</p>
            <p>Days</p>
          </section>

          <section style={{ padding: "5px", margin: "5px" }}>
            <p>{timeHours}</p>
            <p>Hours</p>
          </section>

          <section style={{ padding: "5px", margin: "5px" }}>
            <p>{timeMinutes}</p>
            <p>Minutes</p>
          </section>

          <section style={{ padding: "5px", margin: "5px" }}>
            <p>{timeSeconds}</p>
            <p>Seconds</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
