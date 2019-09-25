import { withFormik } from "formik";
import LoginForm from "./LoginForm";
import axios from 'axios';

const LoginLogicForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  handleSubmit: async (values, { setSubmitting, props }) => {
    // props.history.push('/login')
      let bodyFormData = new FormData();
      bodyFormData.set('username', values.email);
      bodyFormData.set('password', values.password);
      axios({
        method: 'post',
        url: '/api/v1/login',
        data: bodyFormData,
      }).then((response) => {
        if (response.status == 200) {
          // FIXME: do not use reload! 
          // window.location.reload().
          
          // if (props.history.location.pathname === '/login') {
             window.location.reload()
          // } else {
          //  props.history.push('/')
          // }
        }
      }
      ).catch((error) => {
        props.toggleErrorModal(error.message);
      })
    setSubmitting(false);
  },
})(LoginForm);

export default (LoginLogicForm);