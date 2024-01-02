import Geolocation from '@react-native-community/geolocation';
import { format } from 'date-fns';

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

export const getCurrentLocation = ({ store, dispatch }) => {
  Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      store
        ? store.dispatch({ type: 'GET_CURRENT_LOCATION', payload: { latitude, longitude } })
          ? dispatch
          : dispatch({ type: 'GET_CURRENT_LOCATION', payload: { latitude, longitude } })
        : '';
    },
    error => {
      console.error(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  );
};

export function convertToAMPM(timeString) {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  const timeObject = new Date(2000, 0, 1, hours, minutes, seconds);

  const formattedTime = format(timeObject, 'h:mm:ss a');

  return formattedTime;
}

export function isCurrentTimeGreaterThanStartTime(startTime) {
  const startTimeParts = startTime.split(':');
  const startDateTime = new Date();
  startDateTime.setHours(parseInt(startTimeParts[0], 10));
  startDateTime.setMinutes(parseInt(startTimeParts[1], 10));
  startDateTime.setSeconds(parseInt(startTimeParts[2], 10));

  const currentTime = new Date();

  const timeDifference = currentTime.getTime() - startDateTime.getTime();

  const fifteenMinutesInMillis = 15 * 60 * 1000;
  return timeDifference > fifteenMinutesInMillis;
}
