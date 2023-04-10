import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
  info?: ErrorInfo;
};

const ErrorComponent = () => {
  return <h1>Something went wrong</h1>;
};

export class AppError extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ error, info });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}
