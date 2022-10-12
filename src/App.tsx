import React from "react";
import { Route, Routes } from "react-router-dom";
import Pages from "pages";
import Components from "components";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/register" element={<Pages.Register />} />
      </Routes>
    </main>
  );
}

export default App;
