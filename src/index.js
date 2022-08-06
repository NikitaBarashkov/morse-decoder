const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    const firstArr = [];
  
  for(let i = 0; i < expr.length; i++){
    firstArr.push(expr[i] + expr[i + 1]);
    i += 1;
  }
  
  const arrForFive = []

  for(let i = 0; i < firstArr.length; ){
    let smallArr = firstArr.slice(i, i + 5);
    arrForFive.push(smallArr);
    i += 5;
  }

  // let someArr;

  arrForFive.forEach(arr => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === '00'){
        arr.splice(i, 1)
        i -= 1;
      } else if(arr[i] === '10'){
        arr.splice(i, 1, '.');
      } else if(arr[i] === '11'){
        arr.splice(i, 1, '-')
      } 
    }
    // console.log(arr.join())
    // someArr += arr.join('')
    // console.log(someArr)
  })

let arrayStr = []

for(let i = 0; i < arrForFive.length; i++){
  arrayStr.push(arrForFive[i].join(''));
//   console.log(arrayStr[i])
}

const answer = []

for(let i = 0; i < arrayStr.length; i++){
  for(let key in MORSE_TABLE){
    if(arrayStr[i] === key){
      answer.push(MORSE_TABLE[key]);
    } 
  }
  if(arrayStr[i] === '**********'){
    answer.push(' ');
  }
}

return answer.join('');

}

module.exports = {
    decode
}