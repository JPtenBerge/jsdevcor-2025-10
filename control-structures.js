if (4 > 8) {
} else {
}

// 5 manieren om een var aan te maken:

// "hoisting"

var ding1 = "hoi"; // lexical scope
let ding2 = "hoi"; // block scope
const ding3 = "hoi"; // block scope
ding4 = "hoi"; // globale var
window.ding5 = 'expliciet'; // expliciete globale var

console.log(ding5);


const config = { baseUrl: 'https://... ', x: 24, y: 'hoi', doe() {}};
config.baseUrl = 'djkhfkdshkjfds';
console.log(config);

// global object: window in browser, global op server, globalThis


// console.log("i voor for:", i);

for (let i = 0; i < 5; i++) {
  console.log("i:", i);
}
// console.log("i buiten for:", i);

test();

console.log(huh);

function test() {
    console.log('hoi vanaf test');

    huh = 'noway';
}

ding1 = 42;

switch(ding1) {
    case 42: console.log('nope'); break;
    case 'bla': console.log('haha');
    default: console.log('wow!')

}

let lijstje = [4,5,8,9];


// for (let member in config) { // reflection - door elke members in object - hoor je niet meer te gebruiken
//     console.log('member:', member, config[member]);
// }
for (let member of Object.keys(config)) { // reflection - door elke members in object - hoor je niet meer te gebruiken
    console.log('member:', member, config[member]);
}
for (let item of lijstje) {
    console.log('item:', item);
    
}
console.log('============');
for (let member in lijstje) { // reflection - door elke members in object - hoor je niet meer te gebruiken
    console.log('member:', member, lijstje[member]);
}


try {
    throw new Error('ga weg');
    // throw Error('ga weg');
    // throw { msg: 'ga weg' };
    // throw 'ga weg'; // geen metadata in catch
}
catch(err) {
    console.dir(err); 
}
// finally {
//     console.log('opruimen resources')
// }


// var x = hoi()
// ;(x || y).doSomething()


function bla() { // function declaratoin

}

var bla = function() {}; // function expression