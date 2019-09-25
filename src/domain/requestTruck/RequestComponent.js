import React, {Component} from 'react';
import { translate } from "react-i18next";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../../app/components/button'
import Field from '../../app/components/field'
import BackButton from "../../app/components/button/back"
import Content from '../../components/Main/Content';
import './request.css'
import GoogleSuggest from './googleSearch';

const AddFormSchema = Yup.object().shape({
    weight: Yup.number()
        .required('request.missing-weight')
        .min(0, "request.error-min-weight")
        .max(100000, "request.error-max-weight"),
    origin: Yup.string()
        .required('request.missing-origin'),
    destination: Yup.string()
        .required('request.missing-destination'),
    description: Yup.string()
        .required('request.missing-description'),
    truckId: Yup.number()
        .required('request.missing-type'),
    numberOfTrucks: Yup.number()
        .required('request.missing-numberOfTrucks')
        .min(1, "request.error-min-trucks")
        .max(50, "request.error-max-trucks"),
});

const AddForm = (props) => (
    <Formik
        initialValues={{ 
            origin: '',
            destination: '',
            weight: '',
            description: '',
            truckId: '',
            numberOfTrucks: '',
            originLat: '',
            originLong: '',
            destinationLat: '',
            destinationLong: ''
         }}
        validationSchema={AddFormSchema}
        onSubmit={values => {
            props.onSubmit(values)
        }}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="origin"
                    title={props.t("request.origin")}
                    component={GoogleSuggest}
                    errors={errors} touched={touched} t={props.t} />
                <Field name="originLat"
                    title={props.t("request.originLat")}
                    disabled
                    errors={errors} touched={touched} t={props.t} />
                <Field name="originLong"
                    title={props.t("request.originLong")}
                    disabled
                    errors={errors} touched={touched} t={props.t} />
                <Field name="destination"
                    component={GoogleSuggest}
                    title={props.t("request.destination")}
                    errors={errors} touched={touched} t={props.t} />
                <Field name="destinationLat"
                    title={props.t("request.destinationLat")}
                    disabled
                    errors={errors} touched={touched} t={props.t} />
                <Field name="destinationLong"
                    title={props.t("request.destinationLong")}
                    disabled
                    errors={errors} touched={touched} t={props.t} />
                <Field name="weight"
                    title={props.t("request.weight")}
                    errors={errors} touched={touched} t={props.t} />
                <Field name="description"
                    title={props.t("request.description")}
                    errors={errors} touched={touched} t={props.t} />
                <Field
                    name="truckId"
                    title={props.t("request.truckId")}
                    component="select" 
                    placeholder={props.t("request.missing-type")}
                    errors={errors} touched={touched} t={props.t}>
                        <option value=''>{props.t("request.missing-type")}</option>
                        {props.truckTypes.map(tt =>
                             <option key={tt.value} value={tt.value}>{props.i18n.language === 'ar'? tt.labelAr: tt.labelEn}</option>
                            )}

                </Field>
                <Field name="numberOfTrucks"
                    title={props.t("request.numberOfTrucks")}
                    errors={errors} touched={touched} t={props.t} />
                <Button label={props.t("addItem.submit")} />
            </Form>
        )}
    </Formik>
)

class RequestComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            request: {},
        }
    }

    componentWillMount(){       
        this.props.onGetTrucks().then(res => {
            const trucks = []
            res.data.forEach(d => {
                trucks.push({labelAr: d.arabicName, labelEn : d.englishName, value: d.id})
            })
            this.setState({ truckTypes: trucks })
        })
    }


    render() {
        let { t } =  this.props
        return (
            <Content title={this.props.t("addItem.title")}>
                <BackButton title={t("request.back-btn")} link="/requests" />
                {this.state.truckTypes && this.state.truckTypes.length > 0 ? <AddForm {...this.props} truckTypes={this.state.truckTypes} /> : null }
            </Content>
        )
        }
}

export default translate("common")(RequestComponent);