import { BinaryEncoder } from "./BinaryEncoder.js";
import { EntropyEstimator } from "./EntropyEstimator.js";
import { PatternSignature } from "./PatternSignature.js";
import { Hash } from "../utils/Hash.js";
import { TimeLabel } from "../utils/TimeLabel.js";
import { NetworkIntent } from "../utils/NetworkIntent.js";

export class CodeAnalyzer {
  static analyze(code) {
    const binary = BinaryEncoder.toBinary(code);
    const entropy = EntropyEstimator.estimate(binary);
    const hash = Hash.sha256(code);
    const id = "pat_" + hash.slice(0, 12);

    return new PatternSignature({
      id,
      entropy,
      hash,
      preview: code.slice(0, 100)
    });
  }

  static event(code) {
    const signature = CodeAnalyzer.analyze(code);

    let event = {
      type: "code_analyzed",
      code_length: code.length,
      signature: signature,
      timestamp: new Date().toISOString()
    };

    event = TimeLabel.apply(event);
    event = NetworkIntent.apply(event);

    return event;
  }
}
