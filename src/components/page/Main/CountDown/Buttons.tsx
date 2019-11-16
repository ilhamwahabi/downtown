import React from "react";
import { StyleSheet, css } from "aphrodite";

import { useContextReducer } from "../../../../context";
import { EStageActionType } from "../../../../reducers";

interface IButtonsProps {
  counting: boolean;
  resumeCounting: Function;
  pauseCounting: Function;
}

const Buttons = (props: IButtonsProps) => {
  const { counting, resumeCounting, pauseCounting } = props;

  const {
    stage: [, dispatchStage]
  } = useContextReducer();

  const reset = () =>
    !counting && dispatchStage({ type: EStageActionType.TO_INPUT_STAGE });

  const renderCountingButton = () => {
    if (counting)
      return (
        <button className={css(styles.button)} onClick={() => pauseCounting()}>
          PAUSE
        </button>
      );
    return (
      <button className={css(styles.button)} onClick={() => resumeCounting()}>
        RESUME
      </button>
    );
  };

  const renderResetButton = () => {
    return (
      <button className={css(styles.button)} onClick={reset}>
        RESET
      </button>
    );
  };

  return (
    <div className={css(styles.container)}>
      {renderCountingButton()}
      {renderResetButton()}
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50vw",
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "transparent",
    color: "var(--tertiary)",
    borderRadius: 5,
    border: "2.5px solid var(--tertiary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 15px",
    height: 50,
    width: 125,
    marginTop: 75,
    cursor: "pointer",
    fontSize: 20,
    outline: "none",
    transition: "color .25s, background-color .25s",

    ":hover": {
      backgroundColor: "var(--tertiary)",
      color: "var(--secondary)"
    },

    ":active": {
      backgroundColor: "var(--tertiary)",
      color: "var(--secondary)"
    }
  }
});

export default Buttons;
