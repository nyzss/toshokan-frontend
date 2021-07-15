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

export const NovelSchema = y.object().shape({
  //i'm not really sure about these, i'll probably look around these again later on
  // this is really bad lmao
  title: y
    .string()
    .max(
      255,
      "Make sure the title is less than 255 characters long. If a novel happens to be longer, be sure to contact me with the informations at the top of this page."
    )
    .required("It is required to provide a title when adding a novel."),
  author: y
    .string()
    .max(
      128,
      "Make sure the name of the author is less than 255 characters long. If the author's name happens to be longer, be sure to contact me with the informations at the top of this page."
    )
    .required("Please provide the name of the author of this novel."),
  artist: y
    .string()
    .transform((value: string, originalValue: string) =>
      originalValue.trim() === "" ? null : value
    )
    .nullable()
    .max(
      128,
      "Make sure the name of the artist is less than 255 characters long. If the artist's name happens to be longer, be sure to contact me with the informations at the top of this page."
    ),
  description: y
    .string()
    .max(
      2000,
      "Please keep the description of the novel less than 2000 characters long."
    )
    .required(
      "A short description or synopsis is required when adding a novel."
    ),
  chapter: y
    .number()
    // .lessThan(
    //   50000,
    //   "If the total chapter count exceeds 50.000 please contact me with the informations provided at the top of the page."
    // )
    //   .typeError(
    //     "The chapter count cannot be blank, please enter 0 if you are unsure about the total."
    // )
    .nullable(true)
    .transform((value: string, originalValue: string) =>
      originalValue.trim() === "" ? null : value
    )
    .positive()
    .integer(),
  releaseYear: y
    .number()
    .positive()
    .integer()
    .transform((value: string, originalValue: string) =>
      originalValue.trim() === "" ? null : value
    )
    //  .required("Please provide a release year.")
    .nullable(true),
  // .lessThan(2035)
  // .moreThan(1970)
  coverUrl: y
    .string()
    .max(500, "Please use a url shortener or upload the image elsewhere.")
    .transform((value: string, originalValue: string) =>
      originalValue.trim() === "" ? null : value
    )
    .nullable(),
});
