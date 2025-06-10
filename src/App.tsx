import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Header from './shared/components/header/header';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
