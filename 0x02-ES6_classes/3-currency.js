export default class Currency {
  constructor(code, name) {
    this._code = Currency._validateString(code, 'Code');
    this._name = Currency._validateString(name, 'Name');
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = Currency._validateString(newCode, 'Code');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = Currency._validateString(newName, 'Name');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
}
