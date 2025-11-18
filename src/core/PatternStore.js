export class PatternStore {
  constructor() {
    this.store = new Map();
  }

  add(signature) {
    this.store.set(signature.id, signature);
  }

  get(id) {
    return this.store.get(id);
  }

  searchByEntropy(maxEntropy) {
    return [...this.store.values()].filter(s => s.entropy <= maxEntropy);
  }
}
