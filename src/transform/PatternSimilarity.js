export class PatternSimilarity {
  static compare(hashA, hashB) {
    let mismatches = 0;

    for (let i = 0; i < hashA.length; i++) {
      if (hashA[i] !== hashB[i]) mismatches++;
    }

    return 1 - mismatches / hashA.length;
  }
}
