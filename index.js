function isPalindrome(a){
  return a === a.split('').reverse().join('');
}
// tests

console.assert( isPalindrome("tacocat") === true );
console.assert( isPalindrome("Tacocat") === false );
console.assert( isPalindrome("racecar") === true );
console.assert( isPalindrome("cowboy") === false );