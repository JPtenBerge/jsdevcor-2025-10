"use strict";

// undefined = 'hoi'; // ES3  IE6

// if (bla === undefined) { // bla === 'hoi'

// }

let obj = { x: 24, y: "hoi" };

// clone obj:
// - JSON.parse(JSON.stringify(obj)) // deep clone
//      let obj2 = { x: 3n };  JSON.stringify(obj2)
// - let clone = { ...obj }; // shallow clone
// - libraries: lodash _.cloneDeep(obj)
// - native: structuredClone()

console.log(structuredClone(obj));
console.log(delete obj.x);
console.log(obj);
console.log(delete obj.x);

let uuuhhh = 4 > 8 ? "ja" : 12 > 20 ? "misschien" : "nee";

// let succes = 4 && 8;
let and = null && 8;
console.log("and:", and);

// Angular: <input (keydown.arrowdown)="doe()">
// Svelte: <input on:keydown="{e => e.key === 'arrowdown' && handleKeydown()}">

// let or = null || false || 8;
// console.log('or:', or);

// function getLocation(config) {
//     config.city = config.city || 'Amsterdam'; // idiomatic
// }

let nullish = null ?? false ?? 8; // enkel null en undefined
console.log("or:", nullish);

function getLocation(config) {
  config.city = config.city || "Amsterdam"; // idiomatic
}

let bla54 = null;
bla54 ??= "frgtyhjuk";

// document.getElementById('heading').innerText ||= 'Mijn heading';

// ...  spread/rest

let lijstje1 = [1, 2, 3];
let lijstje2 = [4, 5, 6];
let alles = [...lijstje1, ...lijstje2];

console.log(lijstje1.concat(lijstje2));

console.log(alles);

let obj1 = { x: 24, y: "hoi" };
let obj2 = { y: 48, z: "bla" };
let combined = { ...obj1, ...obj2 };
console.log(combined);

function bla(p1, p2, ...rest) {

}

let ohnee = (4, 8, 15, 16, 23, 42);


// niet meer nodig maar op verzoek

// namespace pattern
!function(ns) {
    let width = 7; // private
    let height = 6;

    ns.getSize = function() { // public
        return width * height;
    };
}(
    (window.com = window.com ?? {},
    com.infoSupport = com.infoSupport ?? {},
    com.infoSupport.graphics = com.infoSupport.graphics ?? {},
    com.infoSupport.graphics.utilities = com.infoSupport.graphics.utilities ?? {})
);

console.log(com);
console.log(com.infoSupport.graphics.utilities.getSize());
