import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

import { useState, useEffect } from "react";

function App() {
  const [states, setStates] = useState(() => {
    const savedStates = window.localStorage.getItem("saved-feedback");
    return savedStates !== null ? JSON.parse(savedStates) : {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(states));
  },[states]);

  const totalFeedback = states.good + states.bad + states.neutral;
  const positiveFeedback = Math.round((states.good / totalFeedback) * 100);

  const updatedStates = (statesType) => {
    setStates({
      ...states,
      [statesType]: states[statesType] + 1,
    });
  };
  const reset = () => {
    setStates({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description
        title={"Sip Happens Café"}
        explanation={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options handleClick={updatedStates} reset={reset} />

      {totalFeedback > 0 ? (
        <Feedback
          states={states}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
