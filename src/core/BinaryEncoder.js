export class BinaryEncoder {
  static toBinary(str) {
    return str
      .split("")
      .map((c) => c.charCodeAt(0).toString(2))
      .join(" ");
  }
}
