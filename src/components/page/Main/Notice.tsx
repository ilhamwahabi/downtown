import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useContextReducer } from "../../../context";
import { EStageActionType } from "../../../reducers";

const Notice = () => {
  const {
    timeInput: [{ hour, minute, second }],
    stage: [stage, dispatchStage]
  } = useContextReducer();

  if (
    !(
      hour === "00" &&
      minute === "00" &&
      second === "00" &&
      stage === "counting"
    )
  )
    return null;

  return (
    <div onClick={() => dispatchStage({ type: EStageActionType.INPUT })}>
      <div className={css(styles.notice)}>
        <span className={css(styles.text)}>TIME'S</span>
        <span className={css(styles.text)}>UP</span>
      </div>
      <div className={css(styles.backdrop)}></div>
    </div>
  );
};

const zoomOutKeyframes = {
  from: {
    transform: "scale(0)"
  },
  to: {
    transform: "scale(1)"
  }
};

const backgroundKeyframes = {
  from: {
    backgroundColor: "transparent"
  },
  to: {
    backgroundColor: "var(--secondary)"
  }
};

const styles = StyleSheet.create({
  notice: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    cursor: "default"
  },
  text: {
    fontFamily: "Oswald",
    fontSize: 240,
    transform: "scale(0)",
    color: "var(--quartenary)",
    margin: "0 15px",
    animationName: [zoomOutKeyframes],
    animationDuration: "1s",
    animationDelay: ".5s",
    animationFillMode: "forwards"
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0.9,
    animationName: [backgroundKeyframes],
    animationDuration: "1s",
    animationDelay: ".5s",
    animationFillMode: "forwards"
  }
});

export default Notice;
