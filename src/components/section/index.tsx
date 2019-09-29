import React from "react";
import { StyleSheet, css } from "aphrodite";

import Main from "./inputTime";

export default () => {
  return (
    <section className={css(styles.content)}>
      <Main />
    </section>
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
