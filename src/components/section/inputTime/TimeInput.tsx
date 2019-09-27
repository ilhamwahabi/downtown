import React from "react";
import { StyleSheet, css } from "aphrodite";

const TimeInput = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.inputContainer)}>
        <input className={css(styles.input)} type="text" />
        <input className={css(styles.input)} type="text" />
      </div>
      <span className={css(styles.separator)}>:</span>
      <div className={css(styles.inputContainer)}>
        <input className={css(styles.input)} type="text" />
        <input className={css(styles.input)} type="text" />
      </div>
      <span className={css(styles.separator)}>:</span>
      <div className={css(styles.inputContainer)}>
        <input className={css(styles.input)} type="text" />
        <input className={css(styles.input)} type="text" />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%"
  },
  separator: {
    fontSize: 75,
    color: "#263238"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: 175
  },
  input: {
    height: 150,
    width: 75,
    border: "1px solid #607D8B",
    borderRadius: 10,
    fontSize: 75,
    textAlign: "center",
    color: "#263238",
    outline: "none"
  }
});

export default TimeInput;
