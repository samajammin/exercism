class ProteinTranslation {
  static readonly codonProteinMap: { [codon: string]: string } = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGC: 'Cysteine',
    UGU: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };

  static proteins(codonString: string): string[] {
    let codons: string[] = codonString.match(/.{1,3}/g) || [];
    let proteins: string[] = [];
    for (let codon of codons) {
      if (this.codonProteinMap[codon] === 'STOP') {
        return proteins;
      }
      proteins.push(this.codonProteinMap[codon]);
    }
    return proteins;
  }
}

export default ProteinTranslation;
