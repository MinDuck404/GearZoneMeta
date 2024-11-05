import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultComponents from './Components/DefaultComponents/DefaultComponents';
import Header from './Components/Header';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import { routes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponents : Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {route.isShowHeader && <Header />}
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
