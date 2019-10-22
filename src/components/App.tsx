import React from "react";
import { StyleSheet, css } from "aphrodite";

import Main from "./page/Main";
import Footer from "./page/Footer";

const App: React.FC = () => {
  return (
    <main className={css(styles.layout)}>
      <Main />
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
