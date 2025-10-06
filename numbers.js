
// string number boolean undefined null

// undefined vs null?
// - null is altijd bewust door een developer ingesteld
// - undefined is default geen waarde

let obj = {};
console.log(obj.whatever);

function wauw() {}
console.log(wauw());

console.log(document.getElementById('ditdingbestaatnietgaweg'));
console.log(undefined === null);
console.log(2 === '2');



let getal = 14;
console.log(getal);

getal = 12.1;
console.log(getal);
console.log('getal * iets', getal * 9);
console.log('0.1 + 0.2', 0.1 + 0.2);
console.log('0.3 - 0.2', 0.3 - 0.2);

console.log('getal * iets afgerond heel getal', Math.round(getal * 9));
console.log('getal * iets afgerond', (getal * 9).toFixed(3));
console.log('getal * iets afgerond naar getal', +(getal * 9).toFixed(3));

console.log('7 / "bla"', 7 / 'bla');
console.log('typeof 7 / "bla"', typeof (7 / 'bla'));
console.log('NaN == NaN', NaN == NaN);
console.log('null == null', null == null);

if (7 / 'bla' == 4 / 'hoi') {

}

console.log('7 * 7n', 7 * 7n);