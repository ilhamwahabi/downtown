import React from "react";
import { Layout } from "antd";

import Duration from "./Duration";
import Begin from "./Begin";
import Main from "./Main";

const { Content } = Layout;

export default () => {
  return (
    <Content
      style={{
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* <Duration /> */}
      {/* <Begin /> */}
      <Main />
    </Content>
  );
};
