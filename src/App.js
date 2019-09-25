import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/styles.sass';
import './style/reset.css';

import Main from "./containers/Main/MainLogic";
import withAuthentication from './withAuthentication';
import withRtlDirection from "./withRtlDirection";
import withError from "./withModals";
import history from "./history";
import AuthUserContext from "./context/AuthUserContext"
import DirectionContext from "./context/DirectionContext";
import Header from "./components/Header/Header";
import Auth from './components/Auth/Auth';
import './interceptor';

const App = (props) => (
  <Router history={history} >
    <Switch>
      <Route
        exact path="/login"
        component={Home}
        props={props}
      />
      <Route
        exact path="/**"
        component={Main}
        props={props}
      />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </Router>

);

function NoMatch({ location }) {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        <DirectionContext.Consumer>
          {direction =>
            <div id="main" className={direction.rtl ? "main rtl" : "main"}>
              <Header
                authUser={authUser}
                rtl={direction.rtl}
                changeDirection={direction.changeDirection}
                history={history}
              />
              <div className="add-item__wrapper content">
                <div>
                  <h3>
                    No match for <code>{location.pathname}</code>
                  </h3>
                </div>
              </div>
            </div>
          }
        </DirectionContext.Consumer>
      }
    </AuthUserContext.Consumer>

  );
}

function Home({ props, location }) {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        <DirectionContext.Consumer>
          {direction =>
            <div id="main" className={direction.rtl ? "main rtl" : "main"}>
              <Header
                authUser={authUser}
                rtl={direction.rtl}
                changeDirection={direction.changeDirection}
                history={history}
              />
              <div className="add-item__wrapper content">
                <div>
                  {authUser ? <Redirect to='/requests' /> :
                    <Auth props={props} location={location} history={history} />
                  }
                </div>
              </div>
            </div>
          }
        </DirectionContext.Consumer>
      }
    </AuthUserContext.Consumer>

  );
}

export default withAuthentication(withError(withRtlDirection(App)));