import React, { Component } from 'react';
import { translate } from "react-i18next";
import "./Header.css";
import SignOutButton from '../Auth/SignOut/SignOutButton';
import logo from '../../assets/icons/logo.png'
import smallLogo from '../../assets/icons/logo.png'
import siteLogo from '../../assets/icons/site-logo.png'
import Navbar from '../Navbar/Navbar'

class Header extends Component {
  state = {
    activeBtn: "en",
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  changeLanguage = (lng) => {
    const { i18n, changeDirection } = this.props;
    this.setState({ activeBtn: lng });

    if (lng === "ar") {
      changeDirection(true);
    } else {
      changeDirection(false);
    }
    i18n.changeLanguage(lng);
  };

  resize() {
    this.setState({ currentWidth: window.screen.width });
  }

  render() {
    const { activeBtn, currentWidth } = this.state;
    const { authUser } = this.props;
    const { t, history, rtl, i18n } = this.props;
    const active = rtl ? "ar" : activeBtn;
    return (
      <div>
        <header className="header">
          <div style={{ display: "inline-block", margin: i18n.language === 'en' ? '0px auto 0px 0px' : '0px 0px 0px auto' }}>
            <img width="160" src={siteLogo}/>
            <span className='badget'>نسخة تجريبية</span>
          </div>
          {authUser ?
            <SignOutButton
              history={history}
              t={t}
            />
            : null}

          <div className='lang'>
            <div
              className={"ar" === active ? "lngBtn active" : "lngBtn"}
              onClick={() => this.changeLanguage("ar")}>
              {t("code.ar")}
            </div>
            <div
              className={"en" === active ? "lngBtn active" : "lngBtn"}
              onClick={() => this.changeLanguage("en")}>
              {t("code.en")}
            </div>
          </div>
        </header>
        {
          authUser?
            <Navbar t={t} authUser={authUser} />
          : null
        }
      </div>
    )
  }
}

export default translate("common")(Header);
