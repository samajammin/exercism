export default class Clock {
  HOURS_PER_DAY = 24
  MINUTES_PER_HOUR = 60

  private hours: number
  private minutes: number

  constructor(hours: number, minutes?: number) {
    this.hours = hours
    this.minutes = minutes || 0
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`
  }

  public toString(): string {
    const addedHours = Math.floor(this.minutes / this.MINUTES_PER_HOUR)
    const remainingMinutes =
      this.minutes < 0
        ? this.MINUTES_PER_HOUR + (this.minutes % this.MINUTES_PER_HOUR)
        : this.minutes % this.MINUTES_PER_HOUR
    const initialHours = (this.hours + addedHours) % this.HOURS_PER_DAY
    const finalHours =
      initialHours < 0
        ? this.HOURS_PER_DAY + (initialHours % this.HOURS_PER_DAY)
        : initialHours
    return `${this.pad(finalHours)}:${this.pad(remainingMinutes)}`
  }

  public plus(minutes: number): Clock {
    this.minutes += minutes
    return this
  }
  public minus(minutes: number): Clock {
    this.minutes -= minutes
    return this
  }
  public equals(that: Clock): boolean {
    return this.toString() === that.toString()
  }
}
