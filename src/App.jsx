import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@cmp/layout/Layout";
import { Main } from "@pages/Main";
import { Started } from "@pages/Started";
import { ErrorPage } from "@pages/ErrorPage";
import "./style.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="started" element={<Started />} />
          <Route path="404" element={<ErrorPage code={404} />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
