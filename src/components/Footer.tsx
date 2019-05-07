import React from "react";
import { Layout, Icon } from "antd";

const { Footer } = Layout;

export default () => {
  return (
    <Footer style={{ backgroundColor: "white", textAlign: "center" }}>
      <a
        href="https://github.com/iwgx/downtown"
        style={{ color: "inherit" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Downtown <Icon type="copyright" /> 2019 Ilham Wahabi
      </a>
    </Footer>
  );
};
