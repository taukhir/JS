class Employee{
    #id;
    #name;

    constructor(id,name){
        this.#id = id;
        this.#name = name;
    }

    get fetchId(){
        return this.#id;
    }

    set setId(id){
        this.#id = id;
    }

    get fetchName(){
        return this.#name;
    }

    set setName(name){
        this.#name = name;
    }

}

let empOne = new Employee(1,'ahmed');
let empTwo = new Employee(2,'sam');

console.log(empOne.fetchName)
empOne.setName = "Tauqeer Ahmed";
console.log(empOne.fetchName)