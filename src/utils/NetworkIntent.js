export class NetworkIntent {
  static apply(evt) {
    return {
      ...evt,
      channel: "library",
      priority: "normal",
      reliability: "must_deliver",
      source: "moving-library"
    };
  }
}
