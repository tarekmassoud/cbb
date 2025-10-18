import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

// Minimal inline error UI if the import of App fails at module load
function BootError({ error }: { error: unknown }) {
  const msg = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;
  return (
    <pre style={{ padding: 16, whiteSpace: "pre-wrap" }}>
{`App failed to start:\n${msg}\n\n${stack ?? ""}`}
    </pre>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

(async () => {
  try {
    // Dynamically import App so we can catch module-level errors
    const { default: App } = await import("./App");
    root.render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    );
  } catch (e) {
    // Print full details to console and UI
    console.error("Boot error:", e);
    root.render(<BootError error={e} />);
  }
})();
