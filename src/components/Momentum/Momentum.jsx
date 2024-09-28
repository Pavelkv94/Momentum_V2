import { lazy, Suspense, useEffect, useState } from "react";
import "./Momentum.scss";
import GreetingComponent from "./GreetingComponent/GreetingComponent";
import FocusComponent from "./FocusComponent/FocusComponent";
import WeatherComponent from "./WeatherComponent/WeatherComponent";
import { images } from "./imagesImports";
import Preloader from "./Preloader/Preloader";
import RefreshButton from "./RefreshButton/RefreshButton";
import RelaxComponent from "./RelaxComponent/RelaxComponent";

const TimeComponent = lazy(() => import("./TimeComponent/TimeComponent"));

const Momentum = () => {
  // eslint-disable-next-line no-unused-vars
  const [showAmPm, setShowAmPm] = useState(true);
  const [bgImage, setBgImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
    // Set background only after the image is loaded
    img.onload = () => setBgImage(src);
  };

  let bgArray = [];
  let bgArrayMor = [];
  let bgArrayDay = [];
  let bgArrayEvn = [];
  let bgArrayNig = [];

  function fillBgArray() {
    let randomImg;
    for (let i = 0; i < 6; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayMor.includes(randomImg)) {
        randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayMor.push(randomImg);
      bgArray.push(randomImg);
    }

    for (let i = 6; i < 12; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayDay.includes(randomImg)) {
        randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayDay.push(randomImg);
      bgArray.push(randomImg);
    }

    for (let i = 12; i < 18; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayEvn.includes(randomImg)) {
        randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayEvn.push(randomImg);
      bgArray.push(randomImg);
    }

    for (let i = 18; i < 24; i++) {
      randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      while (bgArrayNig.includes(randomImg)) {
        randomImg = Math.abs(Math.floor(Math.random() * (1 - 21)) + 1);
      }
      bgArrayNig.push(randomImg);
      bgArray.push(randomImg);
    }
  }

  function setBgGreet() {
    const today = new Date();
    const hour = today.getHours();
    let selectedImage = "";

    // Choose the appropriate image based on the hour
    if (hour < 6) {
      selectedImage = images.night[Math.floor(Math.random() * images.night.length)];
    } else if (hour < 12) {
      selectedImage = images.morning[Math.floor(Math.random() * images.morning.length)];
    } else if (hour < 18) {
      selectedImage = images.day[Math.floor(Math.random() * images.day.length)];
    } else {
      selectedImage = images.evening[Math.floor(Math.random() * images.evening.length)];
    }

    // Set the selected background image
    preloadImage(selectedImage);
  }

  fillBgArray();

  useEffect(() => {
    setBgGreet();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
 
  return (
    <div className="momentum" style={{ backgroundImage: `url(${bgImage})` }}>
      <WeatherComponent />
      {/* <button onClick={() => setShowAmPm(!showAmPm)}>Change time format</button> */}
      <RefreshButton onClick={() => setBgGreet()} />
      <div className="content">
        <GreetingComponent />
        <Suspense fallback={<div>Loading...</div>}>
          <TimeComponent showAmPm={showAmPm} />
        </Suspense>
        <FocusComponent />
        <RelaxComponent />
      </div>
      {!isLoaded && <Preloader />}
    </div>
  );
};

export default Momentum;
