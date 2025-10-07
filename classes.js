class LivingBeing {
	constructor() {
		if (new.target === LivingBeing) {
			throw 'dat hoort niet';
		}
	}
}

class Human extends LivingBeing {
	_name;
    #birthYear;
	static nrOfHumans = 0;

	constructor(name) {
		super();

		this._name = name;
	    Human.nrOfHumans++;
        
		console.log('Weer een human!', Human.nrOfHumans);
	}
}
let martin = new Human('Martin');
martin.age = 21;

console.log(martin);

// new LivingBeing();
new Human('JP');
new Human('Arvid');

// console.log(martin.#birthyear);