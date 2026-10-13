import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-void text-white">
          <p className="font-mono text-sm text-zinc-400">Terjadi kesalahan. Muat ulang halaman.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
