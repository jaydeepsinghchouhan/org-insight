import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { ThemeContextProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { FallbackLoader } from "./components/FallBackLoader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<FallbackLoader />}>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </Suspense>
  </Provider>
);
