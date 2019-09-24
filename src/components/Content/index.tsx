import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Layout } from "antd";

import Main from "./Main";

const { Content } = Layout;

export default () => {
  return (
    <Content className={css(styles.content)}>
      <Main />
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
