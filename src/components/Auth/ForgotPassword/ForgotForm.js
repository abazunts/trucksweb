import React, { Component } from "react";
import PropTypes from "prop-types"

class ForgotForm extends Component {
  render() {
    const {
      values,
      touched,
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      dirty,
      t
    } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <input
            name="email"
            placeholder={t("forgot.email")}
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
        <button
          className="btn submit"
          type="submit"
          disabled={!dirty}>
          {t("forgot.btnTitle")}
        </button>
      </form>
    );
  }
}

ForgotForm.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  dirty: PropTypes.bool,
};

export default ForgotForm;
