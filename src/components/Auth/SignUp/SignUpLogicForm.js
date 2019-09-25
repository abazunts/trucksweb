import SignUpForm from "./SignUpForm";
import {withFormik} from "formik/dist/index";
import swal from 'sweetalert'
import {string, number, object, ref, addMethod} from "yup";
import axios from 'axios';
import "../auth.css";

//addMethod(string, "equalTo", equalTo);

const SignUpLogicForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    idNumber: '',
  }),
  // validationSchema:  (props => object().shape({
  //   name: string().required(props.t("errorMessage.errorname")),
  //   email: string().email().required(props.t("errorMessage.errorEmail")),
  //   password: string().min(6, props.t("errorMessage.errorPassword")),
  //   confirmPassword: string().equalTo(ref("password"), props.t("errorMessage.errorConfirmPassword")),
  //   mobile: number().integer(props.t("errorMessage.errorMobile")),
  //   idNumber: number().required(props.t("errorMessage.errorIdNumber")),
  // })),
  handleSubmit: async (values, { props, setSubmitting }) => {
    
      axios({
        method: 'post',
        url: '/api/v1/users/register',
        data: {
          email: values.email,
          idNumber: values.idNumber,
          mobile: values.mobile,
          name: values.name,
          password: values.password,
          using2FA: false
        },
      }).then(() => 
      // FIXME: do not use reload! 
      swal(props.t('signup.done'), props.t('signup.plsCheckLink'), "success").then(() => window.location.reload())
      ).catch(error => { props.toggleErrorModal(error.message);
      })
    setSubmitting(false);
  },
})(SignUpForm);

export default SignUpLogicForm;