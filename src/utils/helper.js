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

export const convertMinutesToRange = minutes => {
  if (minutes < 60) {
    // If less than 60 minutes, use it as it is
    return `Takes ${minutes} min`;
  } else {
    // If 60 minutes or more, convert to hours and minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
      return `Takes ${hours} hour${hours > 1 ? 's' : ''}`;
    } else if (remainingMinutes > 0 && remainingMinutes <= 30) {
      return `Takes ${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} min`;
    } else {
      return `Takes ${hours}-${hours + 1} hours`;
    }
  }
};
