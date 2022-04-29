import * as Yup from 'yup'

export const addPropertyValidationSchema = Yup.object().shape({
  properties: Yup.array().of(
    Yup.object().shape({
      
    }),
  ),
})
