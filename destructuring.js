let ik = {
	name: 'JP',
	age: 26,
	favorieteChips: ['Wokkels', 'Nibbit'],
};

let {
	name: n,
	age = 42,
	favoriteColor = 'qwerty',
	favorieteChips,
	favorieteChips: [meestFavoChips],
} = ik;
age = 33;

console.log(favorieteChips, meestFavoChips);

console.log(ik.name);
console.log(ik.age);

console.log(n);
console.log(age);
console.log(favoriteColor);

let lijstje = [4, 8, 15, 16, 23, 42];
let [eerste, tweede, , vierde, ...rest] = lijstje;
console.log(eerste, tweede, vierde, rest);

// nuttige toepassingen
let propnaam = 'artikel.naam';
let props = propnaam.split('.');
let [mainProp, subProp] = propnaam.split('.');

// obj[props[0]][props[1]]
// obj[mainProp][subProp]

let datumString = '2024-05-06';
let regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

console.log('is match:', regex.test(datumString));

let [, year, month, day] = datumString.match(regex);
console.log('matches:', year, month, day);

const getLocation = ({ city, latitude } = {}) => {
    console.log('city/lat', city, latitude);
};
getLocation();
getLocation({ city: 'Amsterdamned' });
getLocation({ latitude: 41.69843930 });
