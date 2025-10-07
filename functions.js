'use strict';


bla();

function Customer() {

}
new Customer();


function bla(p1, p2) {
    console.log('hallo vanaf bla met params', p1, p2);
}

function bla(...rest) {
    console.log('hallo vanaf bla', rest);
}

bla(14, 28);
window.bla(509, 1234);

const geefWaarde = () => 'wow';

const mandatory = () => { throw new Error('this param is mandatory')};

const arrow = (p1 = mandatory(), p2 = p1) => {
    console.log('hallo vanaf arrow met params', p1, p2);

}; // this  geen arguments  geen new
arrow(4, 8);
arrow();
arrow(undefined);
arrow(null);