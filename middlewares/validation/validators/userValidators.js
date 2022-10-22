const yup = require("yup");

const userValidator = {
  login: yup.object({
    body: yup.object({
      email: yup.string().email("Valid email is required").required(),
      password: yup.string().min(4, "Mininum 4 characters").required(),
    }),
  }),

  register: yup.object({
    body: yup.object({
      firstName: yup.string().min(3, "Mininum 3 characters").required(),
      lastName: yup.string().min(2, "Mininum 2 characters").required(),
      email: yup.string().email("Valid email is required").required(),
      password: yup.string().min(4, "Mininum 4 characters").required(),
      imageUrl: yup.string(),
      drugAllergies: yup.object(),
    }),
  }),

  editProfile: yup.object({
    body: yup.object({
      firstName: yup.string().min(3, "Mininum 3 characters").required(),
      lastName: yup.string().min(2, "Mininum 2 characters").required(),
      // gender: yup.string().required(),
      email: yup.string().email("Valid email is required").required(),
      imageUrl: yup.string(),
      drugAllergies: yup.object(),
    }),
  }),
};

module.exports = userValidator;
