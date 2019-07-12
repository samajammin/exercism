export default class HandShake {
  private readonly handShakeCommands: string[]

  constructor(secret: number) {
    const commands: string[] = []
    if (secret & 1) {
      commands.push('wink')
    }
    if (secret & 2) {
      commands.push('double blink')
    }
    if (secret & 4) {
      commands.push('close your eyes')
    }
    if (secret & 8) {
      commands.push('jump')
    }
    if (secret & 16) {
      commands.reverse()
    }
    this.handShakeCommands = commands
  }

  public commands(): string[] {
    return this.handShakeCommands
  }
}
