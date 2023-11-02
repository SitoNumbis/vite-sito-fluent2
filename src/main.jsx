import ReactDOM from "react-dom/client";

import { FluentProvider, webDarkTheme } from "@fluentui/react-components";

// app
import App from "./App.jsx";

// contexts
import { LanguageProvider } from "./contexts/LanguageProvider";
import { UserProvider } from "./contexts/UserProvider";

// styles
import "./index.css";
// animations
import "./assets/animations/agrow.css";
import "./assets/animations/shake.css";
import "./assets/animations/appear.css";
import "./assets/animations/entrance.css";

// tippy
import "tippy.js/dist/tippy.css"; // optional

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <UserProvider>
      <FluentProvider theme={webDarkTheme}>
        <App />
      </FluentProvider>
    </UserProvider>
  </LanguageProvider>
);
