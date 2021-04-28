import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
});