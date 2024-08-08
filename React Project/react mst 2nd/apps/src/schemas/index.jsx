import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(25, 'Name cannot be more than 25 characters')
    .required('Please enter your name'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),

  password: Yup.string()
    .matches(/^r.*M.*9$/, 'Password must be start from r__M__9')
    .min(6, 'Password must be at least 6 characters long')  // Adjust length as needed
    .required('Please enter your password'),

  confirm_password: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});