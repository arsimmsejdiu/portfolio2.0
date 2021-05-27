import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./Sections/Header";
import Contact from "./components/Contact";
import MainContent from './Sections/MainContent';
//import Footer from './Sections/Footer';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent}/>
        <Route exact path="/contact" component={Contact} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
