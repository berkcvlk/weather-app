import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import WeatherContextProvider from "./store/weather-context";

ReactDOM.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
  document.getElementById("root")
);
