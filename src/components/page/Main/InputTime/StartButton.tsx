import React from "react";
import { StyleSheet, css } from "aphrodite";

const StartButton = () => {
  return (
    <div className={css(styles.buttonContainer)}>
      <button className={css(styles.button)}>Start</button>
    </div>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    textAlign: "center"
  },
  button: {
    backgroundColor: "#0091EA",
    color: "white",
    borderRadius: 2.5,
    border: "none",
    padding: "0 15px",
    height: 40,
    width: 100,
    marginTop: 75,
    cursor: "pointer",
    fontSize: 16
  }
});

export default StartButton;
