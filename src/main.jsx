import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import AuthState from "./context";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthState>
      <App />
    </AuthState>
  </BrowserRouter>
);
