export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

export function lowercase(s) {
  return s.toLowerCase();
}

export function uppercase(s) {
  return s.toUpperCase();
}

export function shortenString(string, length) {
  if (string && string.length > (length ?? 20)) {
    const shortString = string.slice(0, length ?? 20);
    return `${shortString}...`;
  }
  return string;
}

export function isValidEmail(string) {
  const emailRegex =
    /^([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])$/;

  return emailRegex.test(string);
}

export function isValidPhoneNumber(string) {
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return phoneRegex.test(string);
}

export function trimObjStrings(obj) {
  Object.keys(obj).forEach((k) => {
    obj[k] = obj[k].trim();
  });
  return obj;
}
