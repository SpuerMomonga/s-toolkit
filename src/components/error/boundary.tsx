import React, { ComponentType } from 'react';

interface ErrorBoundaryProps {
  /** Reanders on error */
  error?: ComponentType;
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // 更新状态以便下次渲染可以显示降级后备 UI
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 可以渲染任何自定义降级后的 UI
      const Error = this.props.error;
      return Error ? <Error /> : <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
