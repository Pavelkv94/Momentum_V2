import { useEffect, useState } from "react";
import "./WeatherComponent.scss";

const WeatherComponent = () => {
  const [city, setCity] = useState("[Enter City]");
  const [weatherData, setWeatherData] = useState(null);
  const [inputFocusStyle, setInputFocusStyle] = useState({});

  const getWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
      const data = await response.json();

      if (data.cod === "404") {
        setCity("City Not Found");
      } else {
        setWeatherData(data);
        localStorage.setItem("city", city);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const changeCity = (e) => {
    setCity(e.currentTarget.value);
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("city");
    if (savedCity) {
      setCity(savedCity);
      getWeather(savedCity);
    }
  }, []);

  const focusStyle = {
    borderColor: "white",
  };

  const onFocusCity = () => {
    setInputFocusStyle(focusStyle);
  };

  const onBlurCity = () => {
    if (city.trim() !== "") {
      getWeather(city);
    }
    setInputFocusStyle({});
  };
  const onPress = (e) => {
    if (e.keyCode === 13) {
      if (city.trim() !== "") {
        getWeather(city);
        e.target.blur();
      }
    }
  };

  return (
    <div className="weather-wrapper">
      <div className="city">
        {weatherData && weatherData.weather && <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" width={50} />}
        <input value={city} onChange={changeCity} onBlur={onBlurCity} onFocus={onFocusCity} style={inputFocusStyle} onKeyUp={onPress} />
      </div>

      {weatherData && weatherData.main && weatherData.cod !== "404" && (
        <div className="weather-info">
          <div className="temperature">{weatherData.main.temp.toFixed(0)}°C</div>
          <div className="weather-humidity">Humidity: {weatherData.main.humidity} %</div>
          <div className="weather-wind">Wind: {weatherData.wind.speed} km/h</div>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
