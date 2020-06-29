import React from "react";
import { StyleSheet, css } from "aphrodite";

import { zoomOutKeyframes } from "../keyframes";

export const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className={css(styles.tooltip)}>{text}</div>
);

const styles = StyleSheet.create({
  tooltip: {
    backgroundColor: "var(--quartenary)",
    fontSize: 18,
    color: "var(--secondary)",
    top: -60,
    position: "absolute",
    width: "max-content",
    padding: "5px 10px",
    borderRadius: 5,
    transform: "scale(0)",
    animationName: [zoomOutKeyframes],
    animationDuration: ".2s",
    animationFillMode: "forwards",

    "@media (min-width: 481px) and (max-width: 767px) and (orientation: landscape)": {
      top: -35,
      fontSize: 10,
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      top: -50,
      fontSize: 12,
    },
  },
});
