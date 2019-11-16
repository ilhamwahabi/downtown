import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

import Time from "./Time";
import Buttons from "./Buttons";

const InputTime = () => {
  const [counting, setCounting] = useState(true);

  const resumeCounting = () => setCounting(true);
  const pauseCounting = () => setCounting(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css(styles.container)}>
      <Time counting={counting} />
      <Buttons
        counting={counting}
        pauseCounting={pauseCounting}
        resumeCounting={resumeCounting}
      />
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
