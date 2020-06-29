import React from "react";
import { StyleSheet, css } from "aphrodite";

import Main from "./components";
import Footer from "./components/Footer";

import { ContextProvider } from "./context";

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
    width: "100%",
    display: "flex",
    flex: "auto",
    flexDirection: "column",
    backgroundColor: "var(--secondary)",
  },
});

export default App;
