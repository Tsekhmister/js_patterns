function isUnique(string) {
  // const chars = new Set();
  
  // for (let index = 0; index < string.length; index++) {
  //   const current = string[index];

  //   if (chars.has(current)) {
  //     return false;
  //   }
    
  //   chars.add(current);
  // }

  // return true;

  return new Set(string).size === string.length;
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false

//////////////////////////////////////////

function flatten(array) {
  const res = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i])
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j])
      }
    } else {
      res.push(array[i])
    }
  }

  return res
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]



// //// Recursion /////////////////////////

// function fac(n) {
//  if (n < 0 ) return;
 
//  if (n === 1) return n;

//  return n * fac( n - 1);
// }

// console.log(fac(5));

// //// Recursion /////////////////////////


/////////////////// 3 ////////////////////////////////

function removeDupes(str) {


  let obj = {} ;
  let arr = [];

  for (let index = 0; index < str.length; index++) {
    if (!obj[str[index]]) {
      obj[str[index]] = true ;
      arr.push(str[index]);
    }
  }

  return arr.join('');

    // return [...new Set(str)].join(''); 
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'


////////////////////////////
function highestFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqStr = array[0];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current];
      maxFreqStr = current;
    }
  }

  return maxFreqStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi



/////////////////////

function isStringRotated(source, test) {
  return source.length === test.length && (source + test).includes(test);
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false


//////////////////

function arraySubset(source, subset) {

  if (source.lenght < subset.length) {
    return false;
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);

    if (index === -1) {
      return false;
    }
    delete source[index];
  }
  
  return true
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false


////////////////

function allAnagrams(array) {
  const sorted = array.map(arr => arr.split('').sort().join(''));

  for (let index = 0; index < array.length; index++) {
   if (sorted[index] !== array[0] )
      return false;
  }

  return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false



/////////////////

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(source) {
  const newMatrix = source[0].map(() => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[0].length; j++) {
      newMatrix[j][source.length - 1 - i] = source[i][j]
    }
  }

  return newMatrix
}

function rotate180(source) {
  return rotate(rotate(source))
}

function rotate270(source) {
  return rotate180(rotate(source))
}

console.log(rotate(matrix))

//////////////////


function search(array, target) {
  return array.findIndex(ar => ar === target);
}

console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 12)) // -> -1
console.log(search([1, 3, 6, 13, 17], 17)) // -> 4
console.log(search([1, 3, 6, 13, 17], 1)) // -> 0

/////////////////////////

//Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), []. Вернуть true если они сбалансированы, иначе false.

function isBalanced(string) {
  const start = '({['
  const end = ']})'

  const map = {
    '}': '{',
    ')': '(',
    ']': '['
  }

  const queue = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    if (start.includes(char)) {
      queue.push(char)
    } else if (end.includes(char)) {
      const last = queue.pop()

      if (map[char] !== last) {
        return false
      }
    }
  }

  return !queue.length
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false



/////////////////
//Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра
function deepEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true
  }


  if (typeof a !== typeof b) {
    return false
  }

  if (typeof a !== 'object' || a === null || b === null) {
    return a === b
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }

  for (const key of Object.keys(a)) {
    if (!deepEqual(a[key], b[key])) {
      return false
    }
  }

  return true
}

const source = {a: 1, b: {c: 1}}
const test1 = {a: 1, b: {c: 1}}
const test2 = {a: 1, b: {c: 2}}
console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> false
console.log(deepEqual(NaN, NaN)) // -> true
console.log(deepEqual('test', 'test!')) // -> false
console.log(deepEqual()) // -> true

/////////////////////

function fibonacci(n) {
  const sequence = [1, 1]

  if (n < 2) {
    return sequence.slice(0, n)
  }

  while (sequence.length < n) {
    const last = sequence[sequence.length - 1]
    const prev = sequence[sequence.length - 2]
    sequence.push(last + prev)
  }

  return sequence
}

console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]


//////////////////

function add(a, b) {
  if (!a) {
    return add
  }
  if (!b) {
    return function calc(c) {
      if (!c) return calc
      return a + c
    }
  }

  return a + b
}

add(20, 22) // -> 42
add(20)(22) // -> 42
add(20)()(22) // -> 42
add(20)()()()(22) // -> 42
add(20)()()()()()()()()()()()(22) // -> 42
add()(20)(22) // -> 42
add()()()()(20)(22) // -> 42
add()(20)()(22) // -> 42
add()()()()()(20)()()()(22) // -> 42




function f(arr) {
  for( let i = 0; i < arr.length; i++) {
    setTimeout(() => console.log(arr[i]), 1000)
  }

}

f([1, 2, 3, 4, 5]);
