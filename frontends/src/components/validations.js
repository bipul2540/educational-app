const createValidations = (value) => {
  const errors = {};
  if (!value.profession) {
    errors.profession = "*field required";
  } else if (value.profession.length < 2) {
    errors.profession = "enter at least 5 letter";
  }

  if (!value.fname) {
    errors.fname = "*field required";
  }

  if (!value.lname) {
    errors.lname = "*field required";
  }

  if (!value.email) {
    errors.email = "*field required";
  } else if (value.email < 6) {
    errors.email = "email valid email";
  }

  if (!value.number) {
    errors.number = "*field required";
  } else if (value.number.length < 10) {
    errors.number = "*number should be 10 character long";
  }

  if (!value.password) {
    errors.password = "*field required";
  } else if (value.password.length < 8) {
    errors.password = "*password must be 8 character long";
  }

  return { errors };
};

export default createValidations;
