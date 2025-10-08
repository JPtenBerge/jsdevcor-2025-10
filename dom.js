// DOM API: 3 manieren

/*
<tr>
    <td>Mechelen</td>
    <td>Bovenste verdieping in gedeeld pand. Heeft altijd een schaakbord klaarstaan. Lunch met lekker uitgebreide bestellijst. Geinige mensen. Tafelvoetbal++</td>
    <td>8.5</td>
    <td><img src="https://www.infosupport.com/wp-content/uploads/2023/12/Screenshot-2023-12-07-152724-aspect-ratio-393-269.png"></td>
</tr>
*/

// dit is HET PROBLEEM wat Angular, Vue, Svelte, React ..... ALLEMAAL willen oplossen




// 1. lekker snel, maar wel omslachtig qua code, en ook niet fantastisch qua onderhoudbaarheid - document.createElement()
// const addLocation = () => {
// 	console.time();
// 	let newTr = document.createElement('tr');

// 	let newTdLocation = document.createElement('td');
// 	let locationTextNode = document.createTextNode('Ede');
// 	newTdLocation.appendChild(locationTextNode);
// 	newTr.appendChild(newTdLocation);

// 	let newTdDescription = document.createElement('td');
// 	let descriptionTextNode = document.createTextNode('Nieuwe pand!!');
// 	newTdDescription.appendChild(descriptionTextNode);
// 	newTr.appendChild(newTdDescription);

// 	let newTdRating = document.createElement('td');
// 	let ratingTextNode = document.createTextNode('9');
// 	newTdRating.appendChild(ratingTextNode);
// 	newTr.appendChild(newTdRating);

// 	let newTdPhoto = document.createElement('td');
// 	let photo = document.createElement('img');
// 	photo.setAttribute(
// 		'src',
// 		'https://d9lvv9pgijbyhb.archive.is/N7HgS/321c0575233a2b8cd21bfa8d74f9bcd0be41b71e.webp'
// 	);
// 	newTdPhoto.appendChild(photo);
// 	newTr.appendChild(newTdPhoto);

// 	document.querySelector('table tbody').appendChild(newTr);
//     console.timeEnd();
// };

// 2. best wel traag, en behoorlijk lelijk, niet fantastisch qua onderhoudbaarheid. maar wel lekker kort - innerHTML
// const addLocation = () => {
//     console.time();
//     let tbody = document.querySelector('table tbody');
//     tbody.innerHTML += `<tr>
//             <td>Ede</td>
//             <td>Nieuwe pand via innerHTML!</td>
//             <td>9</td>
//             <td><img src="https://d9lvv9pgijbyhb.archive.is/N7HgS/321c0575233a2b8cd21bfa8d74f9bcd0be41b71e.webp"></td>
//         </tr>`;
//     console.timeEnd();
// };

// 3. lekker snel, redelijk kort, best ok qua onderhoudbaarheid - <template>
const addLocation = () => {
    console.time();
    let template = document.querySelector('#location-template').content;
    let clone = template.cloneNode(true);

    // template.createInstance({ location: '...' });
    clone.querySelector('.location').innerText = 'Ede';
    clone.querySelector('.description').innerText = 'Nieuwe pand via template!';
    clone.querySelector('.rating').innerText = '9';
    clone.querySelector('.photo').setAttribute('src', 'https://d9lvv9pgijbyhb.archive.is/N7HgS/321c0575233a2b8cd21bfa8d74f9bcd0be41b71e.webp');

    document.querySelector('table tbody').appendChild(clone);
    console.timeEnd();
};

// 4. framework/library
