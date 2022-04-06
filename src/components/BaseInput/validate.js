import { isEmpty, isEmail, isLength } from "validator";

const validationMaps = {
  required: (str) => !isEmpty(str),
  email: (str) => isEmail(str),
  minLength: (str, min) => isLength(str, { min }),
  maxLength: (str, max) => isLength(str, { max }),
};

export function validateInput(str, validate) {
  let errors = {};
  const rules = Object.keys(validate);
  for (let index = 0; index < rules.length; index++) {
    const rule = rules[index];
    const { message, value } = validate[rule];
    const validateFn = validationMaps[rule];
    if (!validateFn(str, value)) {
      errors[rule] = message
    }
  }

  return errors;
}
