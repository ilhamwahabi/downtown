import React from "react";
import { StyleSheet, css } from "aphrodite";

import { useContextReducer } from "../../context";

import { ReactComponent as SettingsIcon } from "../../svg/settings.svg";

const Header: React.FC = () => {
  const {
    stage: [stage]
  } = useContextReducer();

  if (stage === "input") return null;

  return (
    <header className={css(styles.header)}>
      <div>
        <SettingsIcon className={css(styles.icon)} />
      </div>
    </header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "25px 50px",
    width: "100%",
    position: "fixed",
    boxSizing: "border-box"
  },
  icon: {
    width: 25,
    padding: 10,
    border: "1px solid black",
    borderRadius: "50%",
    cursor: "pointer"
  }
});

export default Header;
