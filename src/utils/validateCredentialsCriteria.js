import validator from "validator";

const validateCredentialsCriteria = (email, password, name, isSignedIn) => {
  if (!isSignedIn) {
    if (name == "NA NA" || !email || !password)
      return "Please fill in all the fields.";
  }

  if (!email || !password) return "Please fill in all the fields.";

  if (name !== null) {
    if (name.length < 4)
      return "Not a valid name, Must be atleast 3 characters.";
  }

  const password_criteria = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  };

  if (!validator.isEmail(email)) {
    return "Email is not valid.";
  } else if (!validator.isStrongPassword(password, [password_criteria])) {
    return "Password must be minimum of 8 characters, Containing 1 lowercase character, 1 uppercase character, 1 number and 1 special symbol.";
  } else {
    return null;
  }
};

export default validateCredentialsCriteria;
