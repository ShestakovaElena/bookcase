import * as yup from 'yup';

const date = new Date();
const dateNow = date.getFullYear();


export const validationSchema = yup.object({
  title: yup.string().required("Title is required").min(1, "Title is too short - should be 1 chars min"),
  author: yup.string().required("Author is required").min(2, "Name is too short - should be 2 chars min"),
  published_at: yup.number('Date should be a number').required("Date is required").positive().integer().max(dateNow, 'Date cannot be in the future'
  ),
  isbn: yup.string().required("ISBN is required")
});

export const signInSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars min")
});

export const initialValues = {
  email: "",
  password: ""
};