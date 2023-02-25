export function getRandomString(length: number) {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let specialChars = '!@#$%^&*()';
  let charLength = chars.length;
  var result = '';
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  result += result + numbers.charAt(Math.random()) + specialChars.charAt(Math.random());
  return result;
}
