function isLeapYear(year: number) {
  const isDivisibleBy4: boolean = year % 4 === 0;
  const isDivisibleBy100: boolean = year % 100 === 0;
  const isDivisibleBy400: boolean = year % 400 === 0;

  if (isDivisibleBy100) {
    return isDivisibleBy400 ? true : false;
  }

  return isDivisibleBy4 ? true : false;
}

export default isLeapYear;
