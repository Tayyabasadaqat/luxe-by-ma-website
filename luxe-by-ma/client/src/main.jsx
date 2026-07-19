import { createRoot } from "react-dom/client";
import "./fonts.css";
import "./index.css";
import App from "./App";
import { ShopProvider } from "./context/ShopContext";

createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <App />
  </ShopProvider>
);