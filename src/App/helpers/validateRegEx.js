export function validateEmail(email) {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email));
}
export function validateName(name) {
  const re = /^.{2,60}$/im
  return re.test(String(name));
}
export function validatePhone(phone) {
  const re = /^(\+38)?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/mi
  return re.test(String(phone));
}

