import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "layout/Layout";
import "./styles/App.css";
import Pages from "pages";
import Components from "components";

function App() {
  const roles = new Set(["user", "manager", "admin"]);
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/register" element={<Pages.Register />} />
      <Route path="/unauthorized" element={<Components.Unauthorized />} />
      {/* Protected routes */}
      <Route element={<Components.RequireAuth allowedRoles={roles} />}>
        <Route path="/*" element={<Pages.Homepage />} />
      </Route>
      <Route path="/*" element={<Components.Missing />} />
      {/* </Route> */}
    </Routes>
    // <main className="App">
    //   <Routes>
    //     <Route path="/login" element={<Pages.Login />} />
    //     <Route path="/register" element={<Pages.Register />} />
    //   </Routes>
    // </main>
  );
}

export default App;
