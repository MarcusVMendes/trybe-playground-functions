// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


// Desafio 3
function splitSentence(word) {
  return word.split(' ')
}

// Desafio 4
function concatName(words) {
  return words[words.length -1] + ', ' + words[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3
  let empate = ties * 1
  let pontos = vitoria + empate
    return pontos;
}

// Desafio 6
function highestCount(array) {
  let highNumber = Math.max.apply(null, array) //panta
  let count = 0;
  for(index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      count += 1
    }
  }
  return count
}


highestCount([2,5,8,9,10])

  //   for(let index = 0; index < array.length; index += 1) {
//     if (array[index] > highNumber) {
//       highNumber = array[index]
//     } for (index2 in array) {
//       if (array[index2] = highNumber) {
//         count += 1
//       }
//     }
//     return count 
//   }
// }
// Math.max.apply bruna vottri

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
