export default function cleanSet(set, startString) {
  const result = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.substring(startString.length));
    }
  });

  return result.join('-');
}
