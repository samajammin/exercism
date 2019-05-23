package protein

import (
	"errors"
)

var (
	// ErrStop is raised when a stop codon is encountered.
	ErrStop = errors.New("stop codon")
	// ErrInvalidBase is raised when an invalid codon is encountered.
	ErrInvalidBase = errors.New("invalid codon")
)

var codonToProtein = map[string]string{
	"AUG": "Methionine",
	"UUU": "Phenylalanine",
	"UUC": "Phenylalanine",
	"UUA": "Leucine",
	"UUG": "Leucine",
	"UCU": "Serine",
	"UCC": "Serine",
	"UCA": "Serine",
	"UCG": "Serine",
	"UAU": "Tyrosine",
	"UAC": "Tyrosine",
	"UGU": "Cysteine",
	"UGC": "Cysteine",
	"UGG": "Tryptophan",
	"UAA": "STOP",
	"UAG": "STOP",
	"UGA": "STOP",
}

// FromCodon translates a codon to its corresponding protein.
func FromCodon(codon string) (string, error) {
	protein, ok := codonToProtein[codon]
	if !ok {
		return "", ErrInvalidBase
	}
	if protein == "STOP" {
		return "", ErrStop
	}
	return protein, nil
}

// FromRNA translates a sequence of codons to a sequence of proteins.
func FromRNA(rna string) (proteins []string, err error) {
	for i := 0; i <= len(rna)-3; i += 3 {
		protein, err := FromCodon(rna[i : i+3])
		if err == ErrStop {
			break
		}
		if err != nil {
			return proteins, err
		}
		proteins = append(proteins, protein)
	}
	return proteins, nil
}
