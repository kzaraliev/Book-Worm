import * as Yup from "yup";

import { CreateFormKeys } from "../../../utils/constants";

const currentYear = new Date().getFullYear();

export const editBookValidation = Yup.object({
  [CreateFormKeys.Title]: Yup.string()
    .min(2, "Minimum length of the title is 2 characters.")
    .required("Title is required."),
  [CreateFormKeys.Author]: Yup.string()
    .min(2, "Minimum length of the author's name is 2 characters.")
    .required("Author's name is required."),
  [CreateFormKeys.Year]: Yup.number()
    .integer()
    .min(1, "Year of the Book cannot be empty.")
    .max(currentYear, "Time travel?")
    .required("Year of the Book is required."),
  [CreateFormKeys.Genre]: Yup.string()
    .min(3, "Genre of the book cannot be empty.")
    .required("Genre is required."),
  [CreateFormKeys.Description]: Yup.string()
    .min(10, "Minimum length of the description is 10 characters.")
    .required("Description is required."),
  [CreateFormKeys.ImageUrl]: Yup.string().required("Image is required."),
});
