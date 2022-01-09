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

class App extends Component {
  state = {
    themeImg: 'illustrations',
  };

  setTheme = (theme) => {
    this.setState({ themeImg: theme });
  };

  render() {
    return (
      <Router>
        <AppHeader backgroundImg={this.state.themeImg} />
        <section className='mainApp container'>
          <NavBar changeTheme={this.setTheme} />
          <section>
            <Switch>
              <Route component={ContactPage} path='/contact/'></Route>
              <Route component={RecommendationPage} path='/recommendations/'></Route>
              <Route component={IllustrationPage} path='/illustrations/'></Route>
              <Route component={BrandingPage} path='/branding/'></Route>
              <Route component={HomePage} path='/'></Route>
            </Switch>
          </section>
          <HomeButton buttonImg={this.state.themeImg} />
        </section>
      </Router>
    );
  }
}

export default App;
