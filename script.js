// 1 užd.
function minutesToSeconds(minutes, callback) {
    const seconds = callback(minutes);
    return `${seconds} seconds`;
  }
  
  function convertToSeconds(minutes) {
    return minutes * 60;
  }
  
  const result = minutesToSeconds(3, convertToSeconds);
  console.log(result); 
  



// 3 užd.
function calculateSquare(number, callback) {
    const square = callback(number);
    return square;
  }
  
  const rezultatas1 = calculateSquare(5, (num) => num * num);
  console.log(rezultatas1); 
  

//   4 užd.

function apskaiciuotiPlota(aukstis, plotis, callback) {
  const plotas = callback(aukstis, plotis);
  return plotas;
}
const trikampioPlotas = (aukstis, plotis) => (aukstis * plotis) / 2;

const rezultatas2 = apskaiciuotiPlota(10, 10, trikampioPlotas);
console.log(rezultatas2);


//   5 užd.
const last = (name) => name.charAt(name.length - 1);
    console.log(last("Petras")); 



//  6 užd.
function lowerize(name){
    return `${name.toLowerCase()}`
}

function user(name, callback){
    return callback(name);
}

console.log(user('PETRAS', lowerize));

// 7 užd.

function didziausiasNeigiamasSkaicius(skaiciai) {
  const neigiamiSkaiciai = skaiciai.filter(skaicius => skaicius < 0);
  if (neigiamiSkaiciai.length === 0) {
    return "Neigiamų skaičių nėra";
  }
  const didziausiasNeigiamas = Math.max(...neigiamiSkaiciai);
  return didziausiasNeigiamas.toString();
}

const skaiciai = [-1, -100, -5, 10, 0, 11];
const didziausiasNeigiamas = didziausiasNeigiamasSkaicius(skaiciai);
console.log("Didžiausias neigiamas skaičius yra:", didziausiasNeigiamas);

  


  









