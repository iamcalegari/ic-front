import React from "react";
import { AppRoutes } from "./routes/Routes";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppRoutes />);
