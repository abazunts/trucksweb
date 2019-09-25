import { withFormik } from "formik/dist/index";
import { string, object } from "yup";
import axios from 'axios';

import ForgotForm from "./ForgotForm"

const ForgotLogicForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
  }),
  validationSchema: object().shape({
    email: string().email().required("Email is required"),
  }),
  handleSubmit: async (values, { props, setSubmitting }) => {
    axios({
      method: 'get',
      url: '/api/v1/passwordReset',
      data: values.email,
    }).then( props.changeSendStatus()
    ).catch(error => { props.toggleErrorModal(props.t("errorMessage.errorForgot"));
    })
    setSubmitting(false);
  },
})(ForgotForm);

export default ForgotLogicForm;