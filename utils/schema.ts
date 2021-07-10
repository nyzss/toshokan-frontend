import * as y from "yup";

export const RegisterSchema = y.object().shape({
  username: y
    .string()
    .min(3, "Please make sure your username is more than 3 characters long.")
    .max(
      32,
      "Please make sure to enter a username that is less than 32 characters long."
    )
    .required("Please enter a username."),
  email: y
    .string()
    .email("Please enter a valid email.")
    .required("Please enter an email."),
  password: y
    .string()
    .min(6, "Please make sure your password is at least 6 characters long.")
    .required("Please enter a password.")
    .max(
      128,
      "Please make sure to enter a password that is less than 128 characters long."
    ),
  passwordConfirmation: y
    .string()
    .oneOf(
      [y.ref("password"), null],
      "Please make sure that the password match."
    ),
});

export const LoginSchema = y.object().shape({
  email: y
    .string()
    .email("Please enter a valid email.")
    .required("Please enter an email."),
  password: y.string().required("Please provide a password."),
});
