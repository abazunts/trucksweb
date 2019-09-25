import React, { Component } from "react";
import PropTypes from "prop-types"

class LoginForm extends Component {
  render() {
    const {
      values,
      touched,
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      changeScreenAuth,
      t
    } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <input
            name="email"
            placeholder={t('login.email')}
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email
                ? "form__input error"
                : "form__input"
            }
          />
        </div>
        <div className="form__field">
          <input
            name="password"
            placeholder={t('login.password')}
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.password && touched.password
                ? "form__input error"
                : "form__input"
            }
          />
        </div>
        <p
          className="link forgot"
          onClick={() => changeScreenAuth(false, false, true)}>
          {t('login.forgotPassword')}
        </p>
        <button
          className="btn btn__login submit"
          type="submit"
          disabled={!values.email || !values.password}>
          {t('login.buttonTitle')}
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  changeScreenAuth: PropTypes.func,
};

export default LoginForm;
