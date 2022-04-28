import * as Yup from "yup";

export const addPropertyValidationSchema = Yup.object().shape( {
    email: Yup.string().email().required( "email is required" ),
} );