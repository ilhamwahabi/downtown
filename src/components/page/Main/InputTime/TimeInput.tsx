import React from "react";
import { StyleSheet, css } from "aphrodite";

import {
  useTimeInputReducer,
  ETimeActionType
} from "../../../../reducers/timeInput";

const TimeInput = () => {
  const [state, dispatch] = useTimeInputReducer();

  const renderInput = (initValue: string, dispatchType: ETimeActionType) => (
    <input
      className={css(styles.input)}
      type="text"
      onFocus={event => event.target.select()}
      onInput={event => {
        const target = event.target as EventTarget & HTMLInputElement;

        const currentForm = target.form as HTMLFormElement;
        const nextInput = currentForm.elements[dispatchType + 1] as
          | HTMLInputElement
          | HTMLButtonElement;

        nextInput.focus();
      }}
      onChange={event => {
        dispatch({
          type: dispatchType,
          payload: event.target.value
        });
      }}
      value={initValue}
    />
  );

  const renderHourSection = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(state.hour[0], ETimeActionType.CHANGE_HOUR_FIRST_DIGIT)}
      {renderInput(state.hour[1], ETimeActionType.CHANGE_HOUR_SECOND_DIGIT)}
    </div>
  );

  const renderMinuteSection = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(state.minute[0], ETimeActionType.CHANGE_MINUTE_FIRST_DIGIT)}
      {renderInput(state.minute[1], ETimeActionType.CHANGE_MINUTE_SECOND_DIGIT)}
    </div>
  );

  const renderSecondSection = () => (
    <div className={css(styles.inputContainer)}>
      {renderInput(state.second[0], ETimeActionType.CHANGE_SECOND_FIRST_DIGIT)}
      {renderInput(state.second[1], ETimeActionType.CHANGE_SECOND_SECOND_DIGIT)}
    </div>
  );

  return (
    <div className={css(styles.inputsContainer)}>
      {renderHourSection()}
      <span className={css(styles.separator)}>:</span>
      {renderMinuteSection()}
      <span className={css(styles.separator)}>:</span>
      {renderSecondSection()}
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
    fontSize: 75,
    textAlign: "center",
    color: "#263238",
    outline: "none"
  }
});

export default TimeInput;
