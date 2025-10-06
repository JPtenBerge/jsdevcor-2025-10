let lijstje = [4, 8, 15, 16, 23, 42];

console.log(lijstje.map(x => x * 10));

console.log(lijstje);

lijstje.length = 3;
lijstje.length = 9;
// lijstje.length = 0;

lijstje[-9] = 108;
console.log('met 108:', lijstje);

for(let i = -9; i < lijstje.length; i++) {
    console.log(lijstje[i]);
}


lijstje.push(); // toevoegen aan eind
lijstje.unshift(); // toevoegen aan begin
lijstje.pop() // verwijderen aan eind
lijstje.shift() // verwijderen aan begin

// lijstje.filter(x => x.id === 4);
// lijstje.splice(lijstje.indexOf(item), 1);




let obj = { x: 24, y: 'hoi' };
obj['hoi dit is mijn prop 🤮🔥🔥 \\)(*&^%$^&*()*&%$'] = 'JP';


console.log(obj.x);
console.log(obj['x']);
console.log(obj['0']);
console.log(obj['hoi dit is mijn prop 🤮🔥🔥 \\)(*&^%$^&*()*&%$']);
console.log(obj);

// console.log(obj.🤮);


let nrStrings = ['1', '2', '3', '4'];
let nrs = nrStrings.map((item, index) => parseInt(item));
console.log(nrs);