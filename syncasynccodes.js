//setTimeout(callback , timeout in milliseconds)
const myFunc = () => { // Promise
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Timer Done!');
        } , 2500);
    });
    return promise;
};

// const fetchData = () => {
//     console.log("Fetch Data Done!");
// }

//sio(fetchData)

// console.log(myFunc());
// console.log("Hello, World");
// console.log('Hi, World');


myFunc();
// const result = await myFunc();
// console.log(result);
