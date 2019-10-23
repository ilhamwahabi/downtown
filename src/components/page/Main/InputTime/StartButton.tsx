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
        Start
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    textAlign: "center"
  },
  button: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 2.5,
    border: "1px solid black",
    padding: "0 15px",
    height: 40,
    width: 100,
    marginTop: 75,
    cursor: "pointer",
    fontSize: 16,
    outline: "none",
    transition: "color .25s, background-color .25s",

    ":hover": {
      backgroundColor: "black",
      color: "white"
    },

    ":active": {
      backgroundColor: "black",
      color: "white"
    }
  }
});

export default StartButton;
