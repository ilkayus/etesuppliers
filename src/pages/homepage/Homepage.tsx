import React from "react";
import { Route, Routes } from "react-router-dom";
import Components from "components";
import "./style/Homepage.css";
import { SearchProvider } from "context/SearchProvider";

const Homepage = () => {
  return (
    <div className="homepage">
      <SearchProvider>
        <Components.Header />
        <Components.Navbar />
        <Routes>
          <Route path="/home" element={<Components.Home />} />
          <Route path="/companies" element={<Components.Companies />} />
          {/* <Route path="/companies/:id" element={<Components.Company />} /> */}
          <Route path="/products" element={<Components.Products />} />
          {/* <Route path="/products/:id" element={<Components.Product />} /> */}
          <Route path="/unauthorized" element={<Components.Unauthorized />} />
          <Route path="*" element={<Components.Missing />} />
        </Routes>
      </SearchProvider>
    </div>
  );
};

export default Homepage;
