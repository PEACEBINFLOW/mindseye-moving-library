import fs from "fs";

export class LocalStore {
  static save(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  }

  static load(path) {
    return JSON.parse(fs.readFileSync(path));
  }
}
