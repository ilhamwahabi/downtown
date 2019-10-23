import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

import { useContextReducer } from "../../../../context";
import { useInterval } from "../../../../hooks/setInterval";

const Counter = () => {
  const {
    timeInput: [{ hour, minute, second }]
  } = useContextReducer();

  const timeInSeconds =
    parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);

  const [time, setTime] = useState(timeInSeconds);

  useInterval(() => {
    setTime(time - 1);
  }, 1000);

  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor((time % (60 * 60)) % 60);

  return (
    <div className={css(styles.time)}>
      {hours}:{minutes}:{seconds}
    </div>
  );
};

const styles = StyleSheet.create({
  time: {
    borderRadius: 5,
    fontSize: 150,
    textAlign: "center",
    color: "#263238"
  }
});

export default Counter;
