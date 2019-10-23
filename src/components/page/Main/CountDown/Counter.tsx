import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

import { useContextReducer } from "../../../../context";
import { useInterval } from "../../../../hooks/setInterval";

interface ICounterProps {
  counting: boolean;
}

const Counter = (props: ICounterProps) => {
  const { counting } = props;

  const {
    timeInput: [{ hour, minute, second }]
  } = useContextReducer();

  const timeInSeconds =
    parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);

  const [time, setTime] = useState(timeInSeconds);

  useInterval(() => setTime(time - 1), time === 0 || !counting ? null : 1000);

  const printTimeFragment = (time: number) => {
    if (time < 10) return `0${time}`;
    return time;
  };

  const printTime = () => {
    const hours = Math.floor(time / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor((time % (60 * 60)) % 60);

    return (
      <>
        <span>{printTimeFragment(hours)}</span>:
        <span>{printTimeFragment(minutes)}</span>:
        <span>{printTimeFragment(seconds)}</span>
      </>
    );
  };

  return <div className={css(styles.time)}>{printTime()}</div>;
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
