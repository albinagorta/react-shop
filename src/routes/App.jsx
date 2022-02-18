import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // usaremos esas 3 herramientas

//containers
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";

//pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

//styles
import '../styles/global.css';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;