import React from "react";
import { StyleSheet, css } from "aphrodite";

import { ETimeActionType } from "../../../../reducers/timeInput";
import { useContextReducer } from "../../../../context";

const {
  CHANGE_HOUR_FIRST_DIGIT,
  CHANGE_HOUR_SECOND_DIGIT,
  CHANGE_MINUTE_FIRST_DIGIT,
  CHANGE_MINUTE_SECOND_DIGIT,
  CHANGE_SECOND_FIRST_DIGIT,
  CHANGE_SECOND_SECOND_DIGIT
} = ETimeActionType;

const TimeInput = () => {
  const {
    timeInput: [{ hour, minute, second }, dispatch]
  } = useContextReducer();

  const actionSelectField = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const actionFocusToNextInput = (
    event: React.FormEvent<HTMLInputElement>,
    dispatchType: ETimeActionType
  ) => {
    const target = event.target as EventTarget & HTMLInputElement;

    const currentForm = target.form as HTMLFormElement;
    const nextInput = currentForm.elements[dispatchType + 1] as
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

    if (parseInt(value) > maxValue) return;
    dispatch({
      type: dispatchType,
      payload: value
    });
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
      value={initValue}
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
  container: {
    width: "50%"
  },
  separator: {
    fontSize: 75,
    color: "#263238"
  },
  inputsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: 175
  },
  input: {
    height: 150,
    width: 75,
    border: "1px solid #607D8B",
    borderRadius: 5,
    fontSize: 100,
    textAlign: "center",
    color: "#263238",
    outline: "none"
  }
});

export default TimeInput;
