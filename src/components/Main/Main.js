import React  from 'react';
import { ToastContainer } from 'react-toastify';
import ErrorModal from "../Modal/ErrorModal";
import SuccessModal from "../Modal/SuccessModal";
import Content from "../../containers/Content/ContentLogic";
import Header from "../Header/Header";
import Auth from "../Auth/Auth"
import "../../style/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { Switch, Route } from 'react-router-dom';

import Truck from '../../domain/truck'
import Request from '../../domain/request'
import Driver from '../../domain/driver'
import Pricing from '../../domain/pricing'
import Contracts from '../../domain/contracts'

const Main = props => (
  <div className={props.rtl ? "main rtl" : "main"}>
    {
      // TODO: move autoClode to config file!
    }
    <ToastContainer autoClose={8000}/>
    <Header
      authUser={props.authUser}
      rtl={props.rtl}
      changeDirection={props.changeDirection}
      history={props.history}
    />
    <ErrorModal />
    <SuccessModal />
    <div className="main">
      {
        // TODO: refactor the routers
      }
      <Switch>
        <Route path="/requests" component={Request}/>
        <Route path="/trucks" component={Truck}/>
        <Route path="/drivers" component={Driver}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/contracts" component={Contracts}/>
      </Switch>
    </div>
  </div>
);

export default Main;