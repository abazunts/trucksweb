import React from 'react';
import { translate } from "react-i18next";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../../app/components/button'
import Field from '../../app/components/field';

const RejectFormSchema = Yup.object().shape({
    reason: Yup.string()
        .required('request.missing-reason')
        .max(1024, "The reason should be less than 1024 characters")
});

const RejectForm = (props) => (
    <Formik
        initialValues={{ reason: '' }}
        validationSchema={RejectFormSchema}
        onSubmit={values => { props.onSubmit(props.requestId, values.reason) }}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="reason"
                    title={props.t("request.reason-label")}
                    errors={errors} touched={touched} t={props.t}/>

                <Button label={props.t("request.reject-btn")} />
            </Form>
        )}
    </Formik>
)

class RejectRequestForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            request: {}
        }
    }

    render() {
        const requestId = this.props.requestId
        return (
            <div className="large-modal">
                <h2>{this.props.t("request.reject-form-title")}</h2>
                <RejectForm {...this.props} requestId={requestId}/>
            </div>
        )
    }
}

export default translate("common")(RejectRequestForm)