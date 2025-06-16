import { Outlet } from 'react-router-dom';

import Header from '../components/header';

export const ResponsiveLayout = () => (
  <main className="flex h-full min-h-screen w-full min-w-screen justify-center">
    <section className="flex h-full w-full flex-col sm:max-w-7xl sm:px-0">
      <Header />
      <Outlet />
    </section>
  </main>
);
