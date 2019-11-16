import React from "react";
import { StyleSheet, css } from "aphrodite";

import { useContextReducer } from "../../../../context";
import { EStageActionType } from "../../../../reducers/stage";

const StartButton = () => {
  const {
    stage: [, stageDispatch],
    timeInput: [{ hour, minute, second }]
  } = useContextReducer();

  const actionStageToCount = () => {
    if (hour === "00" && minute === "00" && second === "00") return;
    stageDispatch({ type: EStageActionType.TO_COUNT_STAGE });
  };

  return (
    <div className={css(styles.buttonContainer)}>
      <button className={css(styles.button)} onClick={actionStageToCount}>
        START
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    textAlign: "center"
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
    transition: "color .25s, background-color .25s",

    ":hover": {
      backgroundColor: "var(--tertiary)",
      color: "var(--secondary)"
    },

    ":active": {
      backgroundColor: "var(--tertiary)",
      color: "var(--secondary)"
    }
  }
});

export default StartButton;
