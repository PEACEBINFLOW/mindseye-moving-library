export class CodeMutator {
  static mutate(code) {
    const lines = code.split("\n");
    const randomIndex = Math.floor(Math.random() * lines.length);

    lines[randomIndex] += " // mutated";
    return lines.join("\n");
  }
}
