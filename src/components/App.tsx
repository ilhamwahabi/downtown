import React from "react";
import { StyleSheet, css } from "aphrodite";

import Section from "./section";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <main className={css(styles.layout)}>
      <Section />
      <Footer />
    </main>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: "100vh",
    display: "flex",
    flex: "auto",
    flexDirection: "column"
  }
});

export default App;
