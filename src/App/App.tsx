// basic
import { Component, ReactNode } from 'react';

// components
import { Main, Header } from '../components';
import { Error, RenderError, ErrorBoundary } from '../components/Errors';

// interfaces
interface State {
  [x: string]: never;
}
interface Props {
  [x: string]: never;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render = (): ReactNode => {
    return (
      <ErrorBoundary
        alternativeComponent={
          <Error>
            <RenderError />
          </Error>
        }
      >
        <Header />
        <Main />
      </ErrorBoundary>
    );
  };
}

export default App;
