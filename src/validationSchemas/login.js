import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Escribe un email valido !')
        .required('El email es requerido !'),
    password: yup
        .string()
        .min(5, 'Too short !')
        .max(1000, 'Too long !')
        .required(),
})