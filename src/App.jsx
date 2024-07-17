import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnderWork from "./Waiting/UnderWork";
import EventRegister from "./EventRegister/EventRegister";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={UnderWork} />
          <Route path="/register" Component={EventRegister} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
