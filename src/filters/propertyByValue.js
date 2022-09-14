export default function(value, { mapping = {}, defaultValue = "" } = {}) {
  if (`${ value }` in mapping) {
    return mapping[value];
  }
  return defaultValue;
}
