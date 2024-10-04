export default function createIteratorObject(report) {
  return (function* generator() {
    for (const depart of Object.values(report.allEmployees)) {
      for (const employ of depart) {
        yield employ;
      }
    }
  }());
}
