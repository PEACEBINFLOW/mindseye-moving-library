export class EntropyEstimator {
  static estimate(binaryStr) {
    const bits = binaryStr.replace(/ /g, "");
    const ones = bits.split("1").length - 1;
    const zeroes = bits.length - ones;
    const ratio = ones / (zeroes + ones);
    return Number((Math.abs(0.5 - ratio) * 2).toFixed(3));
  }
}
