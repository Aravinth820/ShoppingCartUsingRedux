import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import Counter from "./counter";
import reducer from "./Reducer/Index";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore({
  reducer: reducer,
  middleware: [logger]
});

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
