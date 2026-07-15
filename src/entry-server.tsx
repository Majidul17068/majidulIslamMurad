import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Server entry used only by the `build:static` prerender step.
// Produces the fully-rendered app HTML so crawlers/unfurlers see real
// content instead of an empty <div id="root">.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
