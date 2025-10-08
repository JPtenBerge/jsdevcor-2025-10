export interface Location {
	location: string;
	description: string;
	rating: number;
	photoUrl: string;
}

export const createLocation = (overrides?: Partial<Location>): Location => {
	return {
		location: '',
		description: '',
		rating: 0,
		photoUrl: '',
		...overrides,
	};
};
