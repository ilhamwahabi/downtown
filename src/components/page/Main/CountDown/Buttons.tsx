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
          Pause
        </button>
      );
    return (
      <button className={css(styles.button)} onClick={() => resumeCounting()}>
        Resume
      </button>
    );
  };

  const renderResetButton = () => {
    return (
      <button className={css(styles.button)} onClick={reset}>
        Reset
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
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    borderRadius: 2.5,
    border: "1px solid black",
    padding: "0 15px",
    height: 40,
    width: 100,
    marginTop: 75,
    cursor: "pointer",
    fontSize: 16,
    outline: "none",
    transition: "color .25s, background-color .25s",

    ":hover": {
      backgroundColor: "black",
      color: "white"
    }
  }
});

export default Buttons;
