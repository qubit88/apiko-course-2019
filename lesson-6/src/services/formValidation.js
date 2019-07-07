export function required(name, value, node) {
  if (node && node.type === 'file') {
    if (node.files.length > 0) {
      return null;
    }
    return 'image is required';
  }

  if (value.trim().length === 0) {
    return 'Is required';
  }

  return null;
}

export function sameAs(firstName, secondName) {
  let firstValue;
  let secondValue;

  return function check(name, value, type) {
    if (name === firstName) {
      firstValue = value;
    }
    if (name === secondName) {
      secondValue = value;
    }

    if (firstValue && secondValue) {
      if (firstValue === secondValue) {
        return null;
      } else {
        return `${firstName} and ${secondName} should be identical`;
      }
    }

    return null;
  };
}
