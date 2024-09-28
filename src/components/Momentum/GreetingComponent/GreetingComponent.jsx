import { useEffect, useState } from "react";
import "./GreetingComponent.scss";

const GreetingComponent = () => {
  const [greeting, setGreeting] = useState("Hello");
  const initName = "[Enter Name]";
  const [name, setName] = useState(initName);
  const [inputFocusStyle, setInputFocusStyle] = useState({});

  const savedName = localStorage.getItem("name");

  //greeting
  const showGreeting = () => {
    const today = new Date();
    const hour = today.getHours();
    setGreeting(hour < 6 ? "Good Night, " : hour < 12 ? "Good Morning, " : hour < 18 ? "Good Afternoon, " : "Good Evening, ");
  };
  useEffect(() => {
    const interval = setInterval(showGreeting, 1000);

    return () => clearInterval(interval);
  }, []);

  //name
  const changeName = (e) => {
    setName(e.currentTarget.value);
  };

  useEffect(() => {
    savedName && setName(savedName);
  }, [savedName]);

  const focusStyle = {
    borderColor: "white",
  };

  const onFocusName = () => {
    setInputFocusStyle(focusStyle);
  };

  const onBlurName = () => {
    if (name.trim() === "") {
      setName(initName);
      localStorage.removeItem("name");
    } else {
      localStorage.setItem("name", name);
    }
    setInputFocusStyle({});
  };

  return (
    <div className="greeting-wrapper">
      <h1>
        <span>{greeting}</span> <input value={name} onChange={changeName} onBlur={onBlurName} onFocus={onFocusName} style={inputFocusStyle} />
      </h1>
    </div>
  );
};

export default GreetingComponent;
