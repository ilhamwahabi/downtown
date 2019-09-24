import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Layout } from "antd";

import Content from "./Content";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <Layout className={css(styles.layout)}>
      <Content />
      <Footer />
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: "100vh"
  }
});

export default App;
