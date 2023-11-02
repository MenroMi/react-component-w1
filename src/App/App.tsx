import { Header, Error, ErrorBoundary, RenderError, Main } from '../components';

const App = () => {
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

export default App;
