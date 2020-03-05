import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

import { useContextReducer } from "../../../context";
import { EStageActionType } from "../../../reducers/stage";
import { slideDown } from "../../../keyframes";

const Buttons: React.FC = () => {
  const {
    stage: [stage, dispatchStage],
    timeInput: [{ hour, minute, second }]
  } = useContextReducer();

  const [showWarning, setShowWarning] = useState(false);

  const actionStageToCount = () => {
    if (hour === "00" && minute === "00" && second === "00") {
      setShowWarning(true);
      return;
    }
    dispatchStage({ type: EStageActionType.COUNT });
  };

  const renderPauseButton = () => (
    <button
      className={css(styles.button)}
      onClick={() => dispatchStage({ type: EStageActionType.PAUSE })}
    >
      PAUSE
    </button>
  );

  const renderResumeButton = () => (
    <button
      className={css(styles.button)}
      onClick={() => dispatchStage({ type: EStageActionType.COUNT })}
    >
      RESUME
    </button>
  );

  const renderStartButton = () => (
    <div className={css(styles.startButtonContainer)}>
      <button
        className={css(styles.button)}
        onClick={actionStageToCount}
        onBlur={() => setShowWarning(false)}
      >
        START
      </button>
      {showWarning && (
        <p className={css(styles.warning)}>time can't be zero to start</p>
      )}
    </div>
  );

  return (
    <div className={css(styles.buttonContainer)}>
      {stage === "input" && renderStartButton()}
      {stage === "counting" && renderPauseButton()}
      {stage === "paused" && renderResumeButton()}
    </div>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    textAlign: "center",
    width: "50vw",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "transparent",
    color: "var(--tertiary)",
    borderRadius: 5,
    border: "2.5px solid var(--tertiary)",
    padding: "0 15px",
    height: 50,
    width: 125,
    marginTop: 75,
    cursor: "pointer",
    fontSize: 20,
    outline: "none",
    transition: "color .25s, background-position .25s",
    backgroundSize: "200% 200%",
    backgroundImage:
      "linear-gradient(to top, var(--tertiary) 50%, transparent 50%)",

    ":hover": {
      color: "var(--secondary)",
      backgroundPosition: "0 100%",
      backgroundImage:
        "linear-gradient(to top, var(--tertiary) 51%, transparent 50%)"
    },

    ":active": {
      color: "var(--secondary)",
      backgroundPosition: "0 100%",
      backgroundImage:
        "linear-gradient(to top, var(--tertiary) 51%, transparent 50%)"
    },

    ":focus": {
      color: "var(--secondary)",
      backgroundPosition: "0 100%",
      backgroundImage:
        "linear-gradient(to top, var(--tertiary) 51%, transparent 50%)"
    },

    ":disabled": {
      cursor: "not-allowed"
    },

    "@media(min-width: 1281px)": {
      height: 55,
      width: 131.25,
      fontSize: 22,
      marginTop: 85
    },
    "@media (min-width: 481px) and (max-width: 767px) and (orientation: landscape)": {
      marginTop: 25,
      height: 35,
      width: 82.5,
      fontSize: 14
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      height: 40,
      width: 100,
      fontSize: 16,
      marginTop: 50
    }
  },
  startButtonContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center"
  },
  warning: {
    position: "absolute",
    width: "max-content",
    color: "var(--quartenary)",
    top: 135,
    animationName: [slideDown],
    animationDuration: ".5s",
    animationTimingFunction: "ease-out-in",

    "@media(min-width: 1281px)": {
      top: 150,
      fontSize: 16
    },
    "@media (min-width: 481px) and (max-width: 767px) and (orientation: landscape)": {
      top: 60,
      fontSize: 12
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      top: 100,
      fontSize: 12
    }
  }
});

export default Buttons;
