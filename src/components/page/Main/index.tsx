import React from "react";
import { StyleSheet, css } from "aphrodite";

import InputTime from "./InputTime";

export default () => {
  return (
    <main className={css(styles.content)}>
      <InputTime />
    </main>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
