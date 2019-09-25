import React from 'react';
import { translate } from "react-i18next";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../../app/components/button'
import BackButton from "../../app/components/button/back"
import Content from '../../components/Main/Content';
import Field from '../../app/components/field'

const TruckSchema = Yup.object().shape({
    arabicName: Yup.string()
        .required('truck.missing-ar-name'),
    englishName: Yup.string()
        .required('truck.missing-en-name')
});

const TruckForm = (props) => (
    <Formik
        initialValues={{
            arabicName: '',
            englishName: ''
        }}
        validationSchema={TruckSchema}
        onSubmit={values => {
            props.onSubmit(values)
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="arabicName"
                    title={props.t("truck.arabicNameField")}
                    errors={errors} touched={touched} t={props.t} />

                <Field name="englishName"
                    title={props.t("truck.englishNameField")}
                    errors={errors} touched={touched} t={props.t} />
                <Button label={props.t("truck.add-submit-btn")} />
            </Form>
        )}
    </Formik>
);

const AddForm = (props) => (
    <Content title={props.t("truck.add-form-title")}>
        <BackButton title={props.t("truck.back-btn")} link="/trucks" />
        <TruckForm {...props} />
    </Content>
)

export default translate("common")(AddForm)