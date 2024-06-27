import React from "react";
import { createRoot } from "react-dom"; // Import createRoot from react-dom
import App from "./App";

// Use createRoot().render() instead of ReactDOM.render()
createRoot(document.getElementById("root")).render(<App />);
