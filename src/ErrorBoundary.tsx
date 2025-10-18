import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; message?: string; stack?: string };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: String(error?.message || error), stack: error?.stack };
  }
  componentDidCatch(error: any, info: any) {
    // also log to console so we see full details in DevTools
    console.error("App crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <pre style={{ padding: 16, whiteSpace: "pre-wrap" }}>
{`App error:\n${this.state.message ?? "(no message)"}\n\n${this.state.stack ?? ""}`}
        </pre>
      );
    }
    return this.props.children;
  }
}
