function isLeapYear(year: number) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0 ? true : false;
    }
    return true;
  }
  return false;
}

export default isLeapYear;
