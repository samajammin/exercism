export default class Gigasecond {
  initDate: Date;

  constructor(initDate: Date) {
    this.initDate = initDate;
  }

  date(): Date {
    return new Date(this.initDate.getTime() + Math.pow(10, 12));
  }
}
