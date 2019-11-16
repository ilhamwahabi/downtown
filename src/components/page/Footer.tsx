import React from "react";
import { StyleSheet, css } from "aphrodite";

import { ReactComponent as Copyright } from "../../svg/copyright.svg";

export default () => {
  return (
    <footer className={css(styles.footer)}>
      <a
        href="https://github.com/iwgx/downtown"
        className={css(styles.link)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Downtown</span>
        <Copyright className={css(styles.copyrightSvgIcon)} />
        <span>2019 Ilham Wahabi</span>
      </a>
    </footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    padding: "24px 50px"
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: 14,
    color: "var(--tertiary)",
    fontWeight: "lighter"
  },
  copyrightSvgIcon: {
    width: 14,
    height: 14,
    fill: "var(--tertiary)",
    margin: "0 5px",
    paddingBottom: 1,
    fontWeight: "lighter"
  }
});
