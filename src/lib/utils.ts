/**
 * Clamps a number between a min and max
 * @param value the number to be clamped
 * @param min the minimum value
 * @param max the maximum value
 * @returns the clamped value
 */
export const clamp = (value: number, min: number, max: number) => {
  return value < min ? min : value > max ? max : value;
}

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)/;
export const PHONE_NUMBER_REGEX = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
export const WORDS_REGEX = /\p{L}/u;


/**
 * Changes Date to a human-readable format
 * @param date the date
 * @returns formatted date
 */
export const formatDate = (date: Date): string => {
  const newDate = new Date(new Date(date).getTime() + (4 * 60 * 60 * 1000));
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = newDate.getDate();
  let firstDigit = (day % 10) - 1;
  firstDigit = firstDigit === -1 ? 3 : firstDigit;
  // 10-19 must be th
  firstDigit = day < 20 && day > 10 ? 3 : firstDigit;
  const suffixList = ["st", "nd", "rd", "th"];
  return `${monthNames[newDate.getMonth()]} ${day}${suffixList[Math.min(firstDigit, suffixList.length - 1)]}, ${newDate.getFullYear()}`;
}

/**
 * Changes Date and time to a human-readable format
 * @param date the date and time
 * @returns formatted date and time
 */
export const formatDateTime = (datetime: Date): string => {
  const newDateTime = new Date(new Date(datetime).getTime() + (4 * 60 * 60 * 1000));
  const dateString = formatDate(datetime);
  const ampm = newDateTime.getHours() < 12 ? 'AM' : 'PM';
  let hour = newDateTime.getHours() % 12;
  hour = hour === 0 ? 12 : hour;
  return `${dateString} @ ${hour}:${newDateTime.getMinutes()} ${ampm}`;
}