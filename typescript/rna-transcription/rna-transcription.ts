class Transcriptor {
  readonly complements: { [dna: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  toRna(dna: string) {
    return dna
      .split('')
      .map(char => {
        if (!this.complements[char]) {
          throw 'Invalid input DNA.';
        }
        return this.complements[char];
      })
      .join('');
  }
}

export default Transcriptor;
