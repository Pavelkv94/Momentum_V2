import { useEffect, useState } from "react";
import "./FocusComponent.scss";

const FocusComponent = () => {
  const initGoal = "[Enter Focus]";
  const [goal, setGoal] = useState(initGoal);
  const [inputFocusStyle, setInputFocusStyle] = useState({});

  const savedGoal = localStorage.getItem("goal");

  const onChange = (e) => {
    setGoal(e.currentTarget.value);
  };

  useEffect(() => {
    savedGoal && setGoal(savedGoal);
  }, [savedGoal]);

  const focusStyle = {
    borderColor: "white",
  };

  const onFocusName = () => {
    setInputFocusStyle(focusStyle);
  };

  const onBlurName = () => {
    if (goal.trim() === "") {
      setGoal(initGoal);
      localStorage.removeItem("goal");
    } else {
      localStorage.setItem("goal", goal);
    }
    setInputFocusStyle({});
  };

  return (
    <div className="focus-component">
      <h2>What is your focus for today?</h2>
      <textarea value={goal} onChange={onChange} onBlur={onBlurName} onFocus={onFocusName} style={inputFocusStyle} rows={5} />
    </div>
  );
};

export default FocusComponent;
