import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
