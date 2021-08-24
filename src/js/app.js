export default class Validator {
  constructor(name) {
    this.username = name;
  }

  validateUsername() {
    const first = this.username.match(/\d{4,}/);
    if (first === null) {
      const second = this.username.match(/^[a-z][\w-]+$/i);
      if (second !== null) {
        const third = this.username.match(/[a-z]$/i);
        if (third) {
          return true;
        }
        return false;
      }
      return false;
    }
    return false;
  }
}
