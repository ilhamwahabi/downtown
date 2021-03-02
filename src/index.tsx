import React from "react";
import ReactDOM from "react-dom";
import splitbee from '@splitbee/web';

import App from "./App";
import "./index.css";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
})

ReactDOM.render(<App />, document.getElementById("root"));
