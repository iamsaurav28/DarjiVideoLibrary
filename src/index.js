import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { VideoProvider } from "./Components/VideoContext";
import { ToastProvider } from "./Components/ToastContext";
import App from "./App";

const rootElement = document.getElementById( "root");
ReactDOM.render(
  <StrictMode>
    <VideoProvider>
    <ToastProvider>
          <App />
        </ToastProvider>
    </VideoProvider>
  </StrictMode>,
  rootElement
);
