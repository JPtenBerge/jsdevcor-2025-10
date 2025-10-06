
// best practices
// - let of const  ipv var
// - ===
// - () => {}  arrow function
// - geen vanilla JS doen

// [TestMethod]  attribute
// @Test  annotation
// @Component({ ... })  TypeScript   decorator

let bla = {
    toString() {
        return 'hoi';
    }
};

console.log(bla.toString());

if (bla === 'hoi') {
    console.log('wel hoi')
}
else {
    console.log('geen hoi');
}

// truthy / falsey: null undefined '' 0 -0 false NaN 0n

let value = 'qwert';
mijnService.doe(!!value);

if (window.localStorage) {

}
else {

}

let verdieping = 0;
if (verdieping === undefined || undefined === null) {
    console.log('verdieping niet ingevuld')
}
else {
    console.log('all good');
}


