import { useCallback, useEffect, useState } from "react";
import "./TimeComponent.scss";
import { dayNames, months } from "../../../constants";
import PropTypes from "prop-types";

const TimeComponent = ({ showAmPm }) => {
  // Utility function to add zero padding to numbers less than 10
  function addZeros(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }

  // Helper function to get the current time string
  const getCurrentTime = () => {
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";
    const amPmHour = hour % 12 || 12; // 12-hour format

    return `${showAmPm ? amPmHour : hour}:${addZeros(min)}:${addZeros(sec)} ${showAmPm ? amPm : ""}`;
  };

  // Helper function to get the current date string
  const getCurrentDate = () => {
    const today = new Date();
    const day = dayNames[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];

    return `${day}, ${date} ${month}`;
  };

  // Initialize state with the current time and date
  const [time, setTime] = useState(getCurrentTime);
  const [date, setDate] = useState(getCurrentDate);

  // Function to update the time
  const showTime = useCallback(() => {
    setTime(getCurrentTime());
  }, [showAmPm]);

  // Function to update the date
  const showDate = useCallback(() => {
    setDate(getCurrentDate());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      showTime();
      showDate();
    }, 1000);

    return () => clearInterval(interval);
  }, [showTime, showDate]);

  return (
    <div className="time-wrapper">
      <time>{time}</time>
      <h1 id="date">{date}</h1>
    </div>
  );
};

export default TimeComponent;

TimeComponent.propTypes = {
  showAmPm: PropTypes.bool,
};
