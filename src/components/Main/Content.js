import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from "react-i18next";
import Button from '../../app/components/button'
import './style.css'

const Content = (props) => (
  <div className="content-wrapper">
    <div className="content-header">
      <h2 className="page-title">
        {props.title}
      </h2>
      {props.addButtonTitle?
        <Link to={props.addLink}>
          <Button label={props.addButtonTitle} />
        </Link>
        : null
      }
    </div>
    <div className="content">
      {props.children}
    </div>
  </div>
);

export default Content;