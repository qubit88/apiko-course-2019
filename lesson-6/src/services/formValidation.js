export function required(value) {
  if (value.trim().length === 0) {
    return 'Is required';
  }

  return null;
}
