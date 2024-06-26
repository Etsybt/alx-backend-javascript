export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const dept of Object.values(report.allEmployees)) {
      yield* dept;
    }
  }

  return {
    [Symbol.iterator]: iterateEmployees,
  };
}
