import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Counters from "./components/Counters";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Counters />, document.getElementById("root"));
registerServiceWorker();
