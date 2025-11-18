import { CodeMutator } from "./CodeMutator.js";

export class VariantGenerator {
  static generateVariants(code, count = 3) {
    const variants = [];

    for (let i = 0; i < count; i++) {
      variants.push({
        id: "variant_" + Math.random().toString(36).slice(2, 10),
        code: CodeMutator.mutate(code)
      });
    }

    return variants;
  }
}
