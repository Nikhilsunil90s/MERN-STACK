//Spread and Rest Operators

let arr = [10,20,30,40,50];
let newarr = arr.splice(0,);
console.log(newarr , arr);
let arr2 = arr;
console.log(arr2);
let copy_arr = [...newarr] // spread Operators for Destrcturing
console.log(copy_arr);
let myarray = [100,200,300,400,500,600,700,800];
[...myarray] // Destructring
let hobbies = ['programming' , 'cooking' , 'driving'];
//let [hobby1 , hobby2] = hobbies;
let [h1, h2 , h3] = hobbies;
console.log(h1,h2 ,h3, hobbies);

// For objects
person = {
    name: 'Red',
    age: 89,
    greet(){
        console.log('Hello, ' , this.name);
    }
};

const helloPerson = ({name,age}) => {
    //console.log("Hello, " + personData.name);
    console.log(name, age);
}


//helloPerson(person.name);
helloPerson(person)

console.log(person)
const greetFunc = person.greet
greetFunc()

const {name, greet} = person
console.log(name, greet)

const convertToArray = (...myarray) => { //RestOperator For Structuring
    return myarray;
}

console.log(convertToArray(100,200,300));
console.log(convertToArray(100,200,300,400,500,600));
