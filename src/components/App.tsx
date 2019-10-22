import React from "react";
import { StyleSheet, css } from "aphrodite";

import Main from "./page/Main";
import Footer from "./page/Footer";
import { ContextProvider } from "../context";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <main className={css(styles.layout)}>
        <Main />
        <Footer />
      </main>
    </ContextProvider>
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
