import React from "react";
import { Layout } from "antd";

import Content from "./Content";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content />
      <Footer />
    </Layout>
  );
};

export default App;
