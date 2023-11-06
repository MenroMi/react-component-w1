import { Outlet } from 'react-router-dom';
import { Error, ErrorBoundary, Header, RenderError } from '../components';
import Pagination from '../components/Pagination';
import PageSettings from '../components/Settings';

const Home = () => {
  return (
    <ErrorBoundary
      alternativeComponent={
        <Error>
          <RenderError />
        </Error>
      }
    >
      <Header />
      <PageSettings />

      <Outlet />

      <Pagination />
    </ErrorBoundary>
  );
};

export default Home;
