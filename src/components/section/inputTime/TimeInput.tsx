import React from "react";
import { StyleSheet, css } from "aphrodite";

import { useTimeInputReducer, ETimeActionType } from "../../reducers/timeInput";

const TimeInput = () => {
  const [state, dispatch] = useTimeInputReducer();

  const renderHourSection = () => (
    <div className={css(styles.inputContainer)}>
      <input
        autoFocus
        className={css(styles.input)}
        type="text"
        onChange={event =>
          dispatch({
            type: ETimeActionType.CHANGE_HOUR_FIRST_DIGIT,
            payload: event.target.value
          })
        }
        value={state.hour[0]}
      />
      <input
        className={css(styles.input)}
        type="text"
        onChange={event =>
          dispatch({
            type: ETimeActionType.CHANGE_HOUR_SECOND_DIGIT,
            payload: event.target.value
          })
        }
        value={state.hour[1]}
      />
    </div>
  );

  const renderMinuteSection = () => (
    <div className={css(styles.inputContainer)}>
      <input
        className={css(styles.input)}
        type="text"
        onChange={event =>
          dispatch({
            type: ETimeActionType.CHANGE_MINUTE_FIRST_DIGIT,
            payload: event.target.value
          })
        }
        value={state.minute[0]}
      />
      <input
        className={css(styles.input)}
        type="text"
        onChange={event =>
          dispatch({
            type: ETimeActionType.CHANGE_MINUTE_SECOND_DIGIT,
            payload: event.target.value
          })
        }
        value={state.minute[1]}
      />
    </div>
  );

  const renderSecondSection = () => (
    <div className={css(styles.inputContainer)}>
      <input
        className={css(styles.input)}
        type="text"
        onChange={event =>
          dispatch({
            type: ETimeActionType.CHANGE_SECOND_FIRST_DIGIT,
            payload: event.target.value
          })
        }
        value={state.second[0]}
      />
      <input
        className={css(styles.input)}
        type="text"
        onChange={event =>
          dispatch({
            type: ETimeActionType.CHANGE_SECOND_SECOND_DIGIT,
            payload: event.target.value
          })
        }
        value={state.second[1]}
      />
    </div>
  );

  return (
    <div className={css(styles.container)}>
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%"
  },
  separator: {
    fontSize: 75,
    color: "#263238"
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
    borderRadius: 10,
    fontSize: 75,
    textAlign: "center",
    color: "#263238",
    outline: "none"
  }
});

export default TimeInput;
