import { Component, ReactNode } from 'react';
import { Header } from '../components';

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
      <>
        <Header />
      </>
    );
  };
}

export default App;
