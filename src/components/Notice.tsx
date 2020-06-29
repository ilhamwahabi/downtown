import React from "react";
import { StyleSheet, css } from "aphrodite";

import { useStore } from "../context";
import { EStageActionType } from "../reducers";
import {
  zoomOutKeyframes,
  toBackgroundSecondaryKeyframes
} from "../keyframes";

const Notice = () => {
  const {
    timeInput: [{ hour, minute, second }],
    stage: [stage, dispatchStage]
  } = useStore();

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
    margin: "0 50px",
    animationName: [zoomOutKeyframes],
    animationDuration: ".5s",
    animationTimingFunction: "ease-out",
    animationDelay: ".5s",
    animationFillMode: "forwards",

    "@media (min-width: 768px) and (max-width: 1024px)": {
      fontSize: 144,
      margin: "0 25px"
    },
    "@media (min-width: 481px) and (max-width: 767px) and (orientation: landscape)": {
      fontSize: 120,
      margin: "0 15px"
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      fontSize: 75,
      margin: "0 15px"
    },
    "@media (max-width: 320px)": {
      fontSize: 60,
      margin: "0 15px"
    }
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: 0.9,
    animationName: [toBackgroundSecondaryKeyframes],
    animationDuration: ".5s",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards"
  }
});

export default Notice;
