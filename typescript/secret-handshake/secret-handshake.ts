export default class HandShake {
  private readonly secret: number

  constructor(secret: number) {
    this.secret = secret
  }

  public commands(): string[] {
    const commands: string[] = []
    let binary = Number(this.secret.toString(2))
    let shouldReverse = false

    while (binary > 0) {
      if (binary >= 10000) {
        shouldReverse = !shouldReverse
        binary -= 10000
      } else if (binary >= 1000) {
        commands.unshift('jump')
        binary -= 1000
      } else if (binary >= 100) {
        commands.unshift('close your eyes')
        binary -= 100
      } else if (binary >= 10) {
        commands.unshift('double blink')
        binary -= 10
      } else if (binary >= 1) {
        commands.unshift('wink')
        binary -= 1
      }
    }

    return shouldReverse ? commands.reverse() : commands
  }
}
