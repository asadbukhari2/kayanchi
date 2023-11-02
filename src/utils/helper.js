export const capitalizeEachWord = str => {
  const words = str.split(' ');

  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return capitalizedWords.join(' ');
};

export const isEmailValid = e => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(e);
};

export const isPasswordStrong = password => {
  // Check for minimum length (e.g., at least 8 characters)
  if (password.length < 8) {
    return false;
  }
  return true;
  // // Check for at least one lowercase letter, one uppercase letter, one digit, and one special character
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!*_])[A-Za-z\d@#$%^&!*_]+$/;
  // return passwordRegex.test(password);
};
