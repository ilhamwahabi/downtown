import React from "react";
import { StyleSheet, css } from "aphrodite";

const Buttons = () => {
  return (
    <div className={css(styles.container)}>
      <button className={css(styles.button)}>Pause</button>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50vw",
    display: "flex",
    justifyContent: "space-around"
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
    }
  }
});

export default Buttons;
