import React from "react";
import { StyleSheet, css } from "aphrodite";

import InputTime from "./InputTime";
import { useContextReducer } from "../../../context";

export default () => {
  const {
    stage: [stage]
  } = useContextReducer();

  const renderSection = () => {
    if (stage === "input") return <InputTime />;
    if (stage === "count") return <p>count</p>;
  };

  return <main className={css(styles.content)}>{renderSection()}</main>;
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
