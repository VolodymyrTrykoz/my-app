import React from "react";
import { withFormik, Form, Field  } from "formik";
import schema  from './schemaSrorage'

const FormComponent = ({
    errors,
    touched
                       }) => (
    <Form>
        <div>
            { touched.email && errors.email && <p>{  errors.email }</p> }
            <Field type="email" name="email" placeholder="Email" />
        </div>
        <div>
            { touched.password && errors.password && <p>{  errors.password }</p> }
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit">Submit</button>
    </Form>
);

const FormikApp = withFormik({
    mapPropsToValues(){
        return {
            email: '',
            password: ''
        }
    },
    validationSchema: schema.first,
    handleSubmit(values){
        console.log(values)
    }
})(FormComponent);


export default FormikApp;