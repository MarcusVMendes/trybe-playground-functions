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
  let highNumber = Math.max.apply(null, array) // Função Math.max.apply sugestão do Panta.
  let count = 0;

  for(index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      count += 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse() {
  // olhar math.abs dica do john 
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for(index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz')
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz') 
    } else if (array[index] % 3 ===0) {
      newArray.push('fizz')
    } else {
      newArray.push('bug!')
    }
  }
  return newArray
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
