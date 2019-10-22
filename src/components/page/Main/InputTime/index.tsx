import React from "react";
import { StyleSheet, css } from "aphrodite";

import TimeInput from "./TimeInput";
import StartButton from "./StartButton";

const InputTime = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css(styles.container)}>
      <TimeInput />
      <StartButton />
    </form>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%"
  }
});

export default InputTime;
