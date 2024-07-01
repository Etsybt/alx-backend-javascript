export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const filteredStrings = Array.from(set).filter((value) => typeof value === 'string' && value.startsWith(startString));

  return filteredStrings.map((value) => value.slice(startString.length)).join('-');
}
