import React from "react";
import { Layout } from "antd";

import Duration from "./Duration";

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
      <Duration />
    </Content>
  );
};
