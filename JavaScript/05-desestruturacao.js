const frutas = ['laranja', 'banana', 'uva']

let [fruta1, , fruta3] = frutas

console.log(fruta1)
// console.log(fruta2)
console.log(fruta3)

const pessoa = {
    nome: 'joao',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Portugues'
}

let {idade, idioma} = pessoa
console.log(idade)
console.log(idioma)

const localidade = ({pais, idioma}) => `Você mora no ${pais} e fala ${idioma}`
console.log(localidade(pessoa))

let ola =  (nome) => {
    console.log(`Olá ${nome}`)
}

ola('fulano')