import React from "react";
import ReactDOM from "react-dom";
import splitbee from '@splitbee/web';

import App from "./App";
import "./index.css";

splitbee.init()

ReactDOM.render(<App />, document.getElementById("root"));
