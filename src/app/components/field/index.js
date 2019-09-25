import React from 'react';
import { Field } from 'formik';
import './style.css';

const FieldWrapper = (props) => (
    <div className="row">
        <div className="title">
            {props.title}
        </div>
        <Field className="field" {...props}>
            {props.children}
        </Field>
        {props.errors[props.name] && props.touched[props.name] ? (
            <div className="field-error">
                {props.t(props.errors[props.name])}
                </div>
          ) : null}
    </div>
)

export default FieldWrapper;