import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

import Time from "./Time";
import Buttons from "./Buttons";
import { useContextReducer } from "../../../context";

const InputTime = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css(styles.container)}>
      <Time />
      <Buttons />
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
