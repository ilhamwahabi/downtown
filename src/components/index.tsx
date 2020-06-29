import React from "react";
import { StyleSheet, css } from "aphrodite";

import Time from "./Time";
import Buttons from "./Buttons";
import Notice from "./Notice";

const InputTime = () => {
  return (
    <form
      onSubmit={event => event.preventDefault()}
      className={css(styles.container)}
    >
      <Time />
      <Buttons />
      <Notice />
    </form>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default InputTime;
