import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Component/Navibar';
import Footer  from './Component/Footer';


import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

import { Home } from './Home'
import { Users } from './Users';
import { About } from './About';



function App() {
  return (
    <>
    <Router>
    <NaviBar />
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/about" component={About} />
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
