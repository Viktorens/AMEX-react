import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          const LazyRouteComponent = lazy(() =>
          import(`../pages/${routeItem.element}`)
          );
          return (
            <Route
              key={routeItem.element}
              path={routeItem.path}
              element={
                <Suspense fallback={null}>
                  <LazyRouteComponent />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
