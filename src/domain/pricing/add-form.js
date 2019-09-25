import React from 'react';
import {translate} from "react-i18next";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import Button from '../../app/components/button'
import BackButton from "../../app/components/button/back"
import Content from '../../components/Main/Content';
import Field from '../../app/components/field'

const PricingSchema = Yup.object().shape({
    discount: Yup.number()
        .required('pricing.discountField'),
    distance: Yup.number()
        .required('pricing.distanceField'),
    freightId: Yup.number()
        .required('pricing.freightIdField'),
    numberOfTrucks: Yup.number()
        .required('pricing.numberOfTrucksField'),
    totalPrice: Yup.number()
        .required('pricing.totalPriceField'),
    truckId: Yup.number()
        .required('pricing.truckIdField')
});

const PricingForm = (props) => {
    return (
        <Formik
            initialValues={{
                discount: '',
                distance: '',
                freightId: '',
                numberOfTrucks: '',
                totalPrice: '',
                truckId: ''

            }}
            validationSchema={PricingSchema}
            onSubmit={values => {
                props.onSubmit(values)
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <Field name="discount"
                           title={props.t("pricing.discountField")}
                           errors={errors} touched={touched} t={props.t}/>

                    <Field name="distance"
                           title={props.t("pricing.distanceField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Field name="freightId"
                           title={props.t("pricing.freightIdField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Field name="numberOfTrucks"
                           title={props.t("pricing.numberOfTrucksField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Field name="totalPrice"
                           title={props.t("pricing.totalPriceField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Field name="truckId"
                           title={props.t("pricing.truckIdField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Button label={props.t("pricing.add-submit-btn")}/>
                </Form>
            )}
        </Formik>
    )
};

const AddForm = (props) => (
    <Content title={props.t("pricing.add-form-title")}>
        <BackButton title={props.t("pricing.back-btn")} link="/pricing"/>
        <PricingForm {...props} />
    </Content>
)

export default translate("common")(AddForm)