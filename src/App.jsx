import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const basePath = process.env.REACT_APP_BASE_PATH || "/";

// Ленивая загрузка страниц
const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyLastNews = lazy(() => import("./pages/LastNews/LastNews"));
const LazyPage3 = lazy(() => import("./pages/Page3/Page3"));
const LazyPrice = lazy(() => import("./pages/Price/Price"));

const App = () => {
  return (
    <BrowserRouter basename={basePath}>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/news" element={<LazyLastNews />} />
            <Route path="/preservation_of_youth" element={<LazyPage3 />} />
            <Route path="/price" element={<LazyPrice />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/preservation_of_youth" && <Header />}
      {children}
      <Footer />
    </>
  );
};

export default App;
