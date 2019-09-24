import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Layout, Icon } from "antd";

const { Footer } = Layout;

export default () => {
  return (
    <Footer className={css(styles.footer)}>
      <a
        href="https://github.com/iwgx/downtown"
        className={css(styles.link)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Downtown <Icon type="copyright" /> 2019 Ilham Wahabi
      </a>
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    textAlign: "center"
  },
  link: {
    color: "inherit"
  }
});
