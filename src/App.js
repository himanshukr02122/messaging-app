import Layout from './components/Layout/Layout';
import AppRoutes from './routes/Routes';
import './sass/main.scss';

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>

  );
}

export default App;
