export function processInitialsCustomerName(firstName, lastName) {
  if (!lastName && !firstName) return "";
  if (!lastName)
    return firstName
      .split(" ")
      .slice(0, 2)
      .filter(Boolean)
      .slice(0, 2)
      .map((x) => x[0])
      .join("");
  return [firstName, lastName]
    .filter(Boolean)
    .map((x) => x[0])
    .join("");
}
