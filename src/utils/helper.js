// capitalize the first letter
export function titleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// capitalize the first letter & remove hyphen
export function titleCaseRemoveHyphen(string) {
  return string
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}
