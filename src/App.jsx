import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/app-header';
import { HomeButton } from './cmps/home-button';
import { NavBar } from './cmps/nav-bar';
import { BrandingPage } from './pages/branding-page';
import { ContactPage } from './pages/contact-page';
import { HomePage } from './pages/home-page';
import { IllustrationPage } from './pages/illustration-page';
import { RecommendationPage } from './pages/recommendation-page';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  state = {
    showMenu: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu };
    });
  };

  render() {
    console.log('this.state.showMenu: ', this.state.showMenu);
    return (
      <Router>
        <AppHeader />
        <section className='mainApp container'>
          {!this.state.showMenu && (
            <button onClick={this.toggleMenu} className='nav-btn'>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
          <NavBar showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
          <section className='content-area'>
            <Switch>
              <Route component={ContactPage} path='/contact/'></Route>
              <Route component={RecommendationPage} path='/recommendations/'></Route>
              <Route component={IllustrationPage} path='/illustrations/'></Route>
              <Route component={BrandingPage} path='/branding/'></Route>
              <Route component={HomePage} path='/'></Route>
            </Switch>
          </section>
          <HomeButton />
        </section>
      </Router>
    );
  }
}

export default App;
