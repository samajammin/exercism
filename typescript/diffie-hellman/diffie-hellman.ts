export default class DiffieHellman {
  readonly p: number;
  readonly g: number;

  constructor(p: number, g: number) {
    if (p < 1 || g > p) {
      throw new Error('Arguments out of range');
    }
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Arguments are not prime');
    }
    if (!this.isPrimitiveRootModulo(p, g)) {
      throw new Error(`${g} is not a primitive root modulo of ${p}`);
    }
    this.p = p;
    this.g = g;
  }

  private isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  private isPrimitiveRootModulo(p: number, g: number): boolean {
    const set = new Set();
    for (let i = 1; i < p; i++) {
      set.add(g ** i % p);
    }
    return set.size === p - 1;
  }

  getPublicKeyFromPrivateKey(privateKey: number): number {
    if (privateKey < 2) {
      throw new Error('Private key must be greater than one');
    }
    if (privateKey >= this.p) {
      throw new Error(
        `Private key must be less than modulus parameter, ${this.p}`
      );
    }
    return this.g ** privateKey % this.p;
  }

  getSharedSecret(aPrivateKey: number, bPublicKey: number): number {
    return bPublicKey ** aPrivateKey % this.p;
  }
}
