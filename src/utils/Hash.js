import crypto from "crypto";

export class Hash {
  static sha256(input) {
    return crypto.createHash("sha256").update(input).digest("hex");
  }
}
