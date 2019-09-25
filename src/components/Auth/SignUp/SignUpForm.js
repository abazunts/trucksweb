import React, { Component } from "react";
import PropTypes from "prop-types"

class SignUpForm extends Component {
  render() {
    const {
      values,
      touched,
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      dirty,
      t,
      history
    } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <input
            name="name"
            placeholder={t("signup.name")}
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.name && touched.name
                ? "form__input error"
                : "form__input"
            }
          />
          {errors.name &&
          touched.name &&
          <span className="error__message">{errors.name}</span>
          }
        </div>
        <div className="form__field">
          <input
            name="idNumber"
            placeholder={t("signup.idNumber")}
            type="text"
            value={values.idNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.idNumber && touched.idNumber
                ? "form__input error"
                : "form__input"
            }
          />
          {errors.idNumber &&
          touched.idNumber &&
          <span className="error__message">{errors.idNumber}</span>
          }
        </div>
        <div className="form__field">
          <input
            name="email"
            placeholder={t("signup.email")}
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
          {errors.email &&
            touched.email &&
              <span className="error__message">{errors.email}</span>
          }
        </div>
        <div className="form__field">
          <input
            name="password"
            placeholder={t("signup.password")}
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
          {errors.password &&
            touched.password &&
              <span className="error__message">{errors.password}</span>
          }
        </div>
        <div className="form__field">
          <input
            name="confirmPassword"
            placeholder={t("signup.confirmPass")}
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "form__input error"
                : "form__input"
            }
          />
          {errors.confirmPassword &&
            touched.confirmPassword &&
                <span className="error__message">{errors.confirmPassword}</span>
          }
        </div>
        <div className="form__field">
          <input
            name="mobile"
            placeholder={t("signup.mobile")}
            type="text"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.mobile && touched.mobile
                ? "form__input error"
                : "form__input"
            }
          />
          {errors.mobile &&
            touched.mobile &&
                <span className="error__message">{errors.mobile}</span>
          }
        </div>
        <button
          className="btn submit"
          type="submit"
          disabled={!dirty}
        >
          {t("signup.buttonTitle")}
        </button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  dirty: PropTypes.bool,
};

export default SignUpForm;
