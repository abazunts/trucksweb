import React from 'react';
import {translate} from "react-i18next";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import "./style.css";

import Button from '../../app/components/button'
import BackButton from "../../app/components/button/back"
import Content from '../../components/Main/Content';
import Field from '../../app/components/field'

const ContractSchema = Yup.object().shape({
    customerId: Yup.number()
        .required('contracts.customerIdField'),
    startContract: Yup.date()
        .required('contracts.startContractField'),
    finishContract: Yup.date()
        .required('contracts.finishContractField'),
    totalPrice: Yup.number()
        .required('contracts.totalPriceField')
});

const ContractsForm = (props) => {
debugger
    return (
        <Formik
            initialValues={{
                startContract: '',
                finishContract: '',
                totalPrice: ''
            }}
            validationSchema={ContractSchema}
            onSubmit={values => {
                props.onSubmit(values)
            }}
        >
            {({errors, touched}) => (
                <Form className='formWrapper'>
                    <Field name="customerId"
                           title={props.t("contracts.customerIdField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Field name="startContract"
                           title={props.t("contracts.startContractField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Field name="finishContract"
                           title={props.t("contracts.finishContractField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <Field name="totalPrice"
                           title={props.t("contracts.totalPriceField")}
                           errors={errors} touched={touched} t={props.t}/>
                    <div className='checkbox'>
                        <Field name="approved" type="checkbox"
                               title={props.t("contracts.approvedField")}
                               errors={errors} touched={touched} t={props.t}/>
                        <Field name="complete" type="checkbox"
                               title={props.t("contracts.completeField")}
                               errors={errors} touched={touched} t={props.t}/>
                    </div>
                    <Button label={props.t("contracts.add-submit-btn")}/>
                </Form>
            )}
        </Formik>
    )
};

const AddForm = (props) => (
    <Content title={props.t("contracts.add-form-title")}>
        <BackButton title={props.t("contracts.back-btn")} link="/contracts"/>
        <ContractsForm {...props} />
    </Content>
)

export default translate("common")(AddForm)