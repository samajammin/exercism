class NucleotideCount {
  static nucleotideCounts(dna: string) {
    const nucleotideCount: { [key: string]: number } = {
      A: 0,
      G: 0,
      T: 0,
      C: 0
    };
    for (const nucleotide of dna) {
      if (nucleotideCount[nucleotide] === undefined) {
        throw new Error('Invalid nucleotide in strand');
      }
      nucleotideCount[nucleotide] += 1;
    }
    return nucleotideCount;
  }
}

export default NucleotideCount;
