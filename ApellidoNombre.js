const Usuario = class {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return this.nombre + ' ' + this.apellido
    }

    addMascotas(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        this.libros.push({nombre:nombre, autor:autor});
    }

    getBookNames(){
        const names = []
        for (const i of this.libros) {
            names.push(i.nombre)
        }
        return names
    }

}

const maxo = new Usuario('maxo', 'lopez')
console.log(maxo.getFullName());
maxo.addMascotas('perro')
maxo.addMascotas('gato')
console.log(maxo.countMascotas());
maxo.addBook('Sherlock Holmes', 'Sir Arthur Conan Doyle')
console.log( maxo.getBookNames())