import { Formik, useField } from 'formik'
import { Button, StyleSheet, View } from 'react-native'
import { StyledTextInput } from '../components/StyledTextInput'
import { StyleText } from '../components/StyleText'
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = { email: '', password: '' }

// const validate = values => {
//     const errors = {}

//     if (!values.email) {
//         errors.email = 'Email is required !'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) (
//         errors.email = 'Invalid email address !'
//     )

//     console.log(errors)

//     return errors
// }

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                error={!!meta.error}
                {...props}
            />
            {meta.error && <StyleText style={styles.error}>{meta.error}</StyleText>}
        </>
    )
}

export const Login = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
            // validate={validate}
            validationSchema={loginValidationSchema}
        >
            {({ handleSubmit }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            name='email'
                            placeholder='Email'
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button
                            title='Login'
                            onPress={handleSubmit}
                        />
                    </View>
                )
            }}
        </Formik>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 12,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    }
})