let person = { 
    name : 'Max',
    age : 29,
    greet(){
        console.log("Hello : " + this.name);
    },
}

console.log(person.name);
person.greet();

let hobbies = ['programming' , 'sports' , 'cricket' , 'singing' , 'speaking']

// for(let i = 0; i < hobbies.length ; i++){
//     console.log(hobbies[i]);
// }
// for (let hobby of hobbies){
//     console.log(hobby);
// }
function changeinput(arg){
    return arg + '!';
}
//console.log(hobbies.map(changeinput) , hobbies);

console.log(hobbies.map(arg => arg + '!'));










