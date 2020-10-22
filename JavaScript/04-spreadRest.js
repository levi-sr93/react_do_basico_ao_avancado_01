const numbers = [1, 2, 3, 4]

// const plusNumbers = [...numbers]
// plusNumbers.push(5)
const plusNumbers = [...numbers, 5]
console.log(numbers)
console.log(plusNumbers)

const rex = {
    nome: 'Rex'
}

const max = {...rex, idade: 4, familia: 'carnivoro'};

max.nome = 'Max'
console.log(rex);
console.log(max);

// REST OPERATOR
function somar(...numbers){
    return numbers.reduce((a, b) => a + b, 0)
}

console.log(somar(1, 2, 4, 6, 10))