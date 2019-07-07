export default class Clock {
  private static MINUTES_PER_HOUR = 60
  private static MINUTES_PER_DAY = Clock.MINUTES_PER_HOUR * 24
  private totalMinutes: number

  constructor(hours: number, minutes: number = 0) {
    this.totalMinutes = minutes + hours * Clock.MINUTES_PER_HOUR
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`
  }

  public toString(): string {
    const remainingMinutes = this.totalMinutes % Clock.MINUTES_PER_DAY
    const adjustedMinutes =
      remainingMinutes < 0
        ? remainingMinutes + Clock.MINUTES_PER_DAY
        : remainingMinutes

    const hours = Math.floor(adjustedMinutes / Clock.MINUTES_PER_HOUR)
    const minutes = adjustedMinutes % Clock.MINUTES_PER_HOUR
    return `${this.pad(hours)}:${this.pad(minutes)}`
  }

  public plus(minutes: number): Clock {
    this.totalMinutes += minutes
    return this
  }
  public minus(minutes: number): Clock {
    this.totalMinutes -= minutes
    return this
  }
  public equals(that: Clock): boolean {
    return this.toString() === that.toString()
  }
}
