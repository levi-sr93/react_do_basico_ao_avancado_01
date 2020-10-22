class Animal {
    constructor(family){
        this.family = family
    }

    walk = () => {
        return 'walking'
    }
}

class Cachorro extends Animal {

    constructor(name, age) {
        super('canine');
        this.name = name
        this.age = age
    }

    latir() {
        return `${this.name}: auu auu`
    }
}

const rex = new Cachorro('Rex', 2)
console.log(rex)
console.log(rex.name)

let max = new Cachorro('max', 1)

console.log(max.latir())
console.log(max.walk())
console.log(rex.family)