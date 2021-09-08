const contador = class{
    static globalCount = 0
    constructor(name){
        this.name =  name
        this.count = 0
    }

    obtenerResponsable(){
        return this.name
    }

    obtenerCuentaIndividual(){
        return this.count
    }

    static obtenerCuentaGlobal(){
        return contador.globalCount
    }

    contar(){
        this.count++
        contador.globalCount++
    }
}

const count1 = new contador('Lapices')
const count2 = new contador('Libretas')

for (let i = 0; i < 7; i++) {
    count1.contar()
}

for (let i = 0; i < 3; i++) {
    count2.contar()
}

console.log(contador.obtenerCuentaGlobal());
console.log(count1.obtenerCuentaIndividual());
console.log(count2.obtenerCuentaIndividual());