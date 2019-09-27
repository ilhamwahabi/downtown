import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Layout } from "antd";

import Section from "./section";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <Layout className={css(styles.layout)}>
      <Section />
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
