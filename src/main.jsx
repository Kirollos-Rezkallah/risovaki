import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/animations.css";
import "./styles/main.css";
import "./styles/responsive.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
