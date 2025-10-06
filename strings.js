
// GEEN VERSCHIL
let tekst1 = 'hoi ${tekst1}';
let tekst2 = "hoi ${tekst1}";




let tekst3 = `hoi
${tekst1}




whoa!`; // backtick

console.log(tekst3);
console.log('blablablabla'.replaceAll('bla', 'hoi'));

let whaat = '👍🔥🤮';
console.log(whaat.length);
console.log([...whaat].length);
// console.log(whaat.getTrueLength());

// var tekst = "qq"; // array van characters

let postalCode = '19234 AA';
let regex = /^[0-9]{4} ?[a-zA-Z]{2}$/;
// new RegExp
if(regex.test(postalCode)) {
    console.log('yay!', postalCode);
}
else {
    console.log('nee!', postalCode);
}