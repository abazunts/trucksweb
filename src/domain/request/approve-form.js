import React from 'react';
import { translate } from "react-i18next";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../../app/components/button'
import Content from '../../components/Main/Content';
import Field from '../../app/components/field'

const ApproveFormSchema = Yup.object().shape({
    price: Yup.number()
        .required('request.missing-price')
        .min(0, "request.error-min-price")
        .max(100000, "request.error-max-price")
});

const ApproveForm = (props) => (
    <Formik
        initialValues={{ price: '' }}
        validationSchema={ApproveFormSchema}
        onSubmit={values => { props.onSubmit(props.requestId, values.price) }}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="price"
                    title={props.t("request.price-field-label")}
                    errors={errors} touched={touched} t={props.t} />

                <Button label={props.t("request.approve-btn")} />
            </Form>
        )}
    </Formik>
)

class ApproveRequestForm extends React.Component {

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
            <div className='large-modal'>
                <h2>{this.props.t("request.approve-form-title")} </h2>
                <ApproveForm {...this.props} requestId={requestId}/>
            </div>
        )
    }
}

export default translate("common")(ApproveRequestForm)