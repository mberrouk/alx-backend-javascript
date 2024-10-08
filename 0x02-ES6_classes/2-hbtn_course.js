export default class HolbertonCourse {
  constructor(name, length, student) {
    this.name = name;
    this.length = length;
    this.student = student;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get student() {
    return this._student;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set student(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!(value.every((student) => typeof student === 'string'))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._student = value;
  }
}
