import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';
import { RevealerProvider } from './contexts/RevealerContext';
import './app.css';



function App() {
  return (
    <Router>
      <RevealerProvider>
        <Switch>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='/portfolio'>
            <PortfolioPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </RevealerProvider>
    </Router>
  );
}

export default App;
