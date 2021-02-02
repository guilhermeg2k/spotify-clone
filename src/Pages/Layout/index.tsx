import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from '../Home';
import Premium from '../Premium';
import Support from '../Support';
import Download from '../Download';


function Layout() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <TopBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/premium">
          <Premium />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Layout;
