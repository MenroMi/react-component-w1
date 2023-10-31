// basic
import { Component } from 'react';

// components
import { Box } from '../../shared';

// styles
import styles from './ErrorBoundary.module.css';

// interfaces
interface IErrorBoundaryProps {
  alternativeComponent: React.ReactNode;
  children: React.ReactNode;
}

interface IErrorBoundaryStates {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryStates
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <Box className={styles['error-boundary']}>
          {this.props.alternativeComponent}
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
