import React from "react";
import { StyleSheet, css } from "aphrodite";

import { ETimeActionType } from "../../../reducers/timeInput";
import { useContextReducer } from "../../../context";
import { useInterval } from "../../../hooks/setInterval";
import { EStageActionType } from "../../../reducers";

const {
  CHANGE_HOUR_FIRST_DIGIT,
  CHANGE_HOUR_SECOND_DIGIT,
  CHANGE_MINUTE_FIRST_DIGIT,
  CHANGE_MINUTE_SECOND_DIGIT,
  CHANGE_SECOND_FIRST_DIGIT,
  CHANGE_SECOND_SECOND_DIGIT,
  DECREASE_TIME
} = ETimeActionType;

const Time: React.FC = () => {
  const {
    timeInput: [{ hour, minute, second }, dispatchTime],
    stage: [stage, dispatchStage]
  } = useContextReducer();

  useInterval(
    () => {
      dispatchTime({ type: DECREASE_TIME });
      if (hour === "00" && minute === "00" && second === "01") {
        setTimeout(() => {
          dispatchStage({ type: EStageActionType.INPUT });
        }, 1000);
      }
    },
    (hour === "00" && minute === "00" && second === "00") ||
      stage === "input" ||
      stage === "paused"
      ? null
      : 1000
  );

  const actionSelectField = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const actionFocusToNextInput = (
    event: React.FormEvent<HTMLInputElement>,
    dispatchType: ETimeActionType
  ) => {
    const target = event.target as EventTarget & HTMLInputElement;

    const form = target.form as HTMLFormElement;
    const nextInput = form.elements[dispatchType + 1] as
      | HTMLInputElement
      | HTMLButtonElement;

    nextInput.focus();
  };

  const actionChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    maxValue: number,
    dispatchType: ETimeActionType
  ) => {
    const { value } = event.target;

    if (!/\d/.test(value)) return;
    if (parseInt(value) > maxValue) return;
    dispatchTime({
      type: dispatchType,
      payload: value
    });
  };

  const actionDeselectElement = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const selection = window.getSelection();
      if (selection) selection.removeAllRanges();
    }
  };

  const renderInput = (
    initValue: string,
    dispatchType: ETimeActionType,
    maxValue: number
  ) => (
    <input
      className={css(styles.input)}
      type="text"
      onFocus={actionSelectField}
      onInput={event => actionFocusToNextInput(event, dispatchType)}
      onChange={event => actionChangeValue(event, maxValue, dispatchType)}
      onKeyDown={actionDeselectElement}
      value={initValue}
      disabled={stage === "counting"}
    />
  );

  const renderHourInput = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(hour[0], CHANGE_HOUR_FIRST_DIGIT, 2)}
      {renderInput(hour[1], CHANGE_HOUR_SECOND_DIGIT, 3)}
    </div>
  );

  const renderMinuteInput = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(minute[0], CHANGE_MINUTE_FIRST_DIGIT, 5)}
      {renderInput(minute[1], CHANGE_MINUTE_SECOND_DIGIT, 9)}
    </div>
  );

  const renderSecondInput = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(second[0], CHANGE_SECOND_FIRST_DIGIT, 5)}
      {renderInput(second[1], CHANGE_SECOND_SECOND_DIGIT, 9)}
    </div>
  );

  return (
    <div className={css(styles.inputsContainer)}>
      {renderHourInput()}
      <span className={css(styles.separator)}>:</span>
      {renderMinuteInput()}
      <span className={css(styles.separator)}>:</span>
      {renderSecondInput()}
    </div>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  separator: {
    fontSize: 100,
    color: "var(--tertiary)",
    margin: "0 15px",
    "@media (min-width: 320px) and (max-width: 480px)": {
      fontSize: 50,
      margin: "0 7.5px"
    }
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: 225,
    "@media (min-width: 768px) and (max-width: 1024px)": {
      width: 175
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      width: 75
    },
    "@media (max-width: 320px)": {
      width: 65
    }
  },
  input: {
    height: 150,
    width: 100,
    fontSize: 150,
    border: "none",
    borderBottom: "5px solid var(--primary)",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "var(--tertiary)",
    outline: "none",
    transition: "border 0.25s ease-in",

    ":disabled": {
      borderColor: "var(--secondary)"
    },

    "::selection": {
      backgroundColor: "var(--quartenary)",
      color: "white"
    },

    "@media (min-width: 768px) and (max-width: 1024px)": {
      width: 75,
      fontSize: 125
    },
    "@media (min-width: 320px) and (max-width: 480px)": {
      width: 30,
      height: 50,
      fontSize: 50
    },
    "@media (max-width: 320px)": {
      width: 25,
      fontSize: 45
    }
  }
});

export default Time;
