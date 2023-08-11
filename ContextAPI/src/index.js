import App from "./App";
import { createRoot } from "react-dom/client";
import { CP } from "./context/CP";
import { TCP } from "./context/TCP";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <TCP>
    <CP>
      <App />
    </CP>
  </TCP>
);
