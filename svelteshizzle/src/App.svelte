<script lang="ts">
	import { createLocation, type Location } from "./entities/location";

	const addLocation = () => {
		locations.push(newLocation);
		locations = locations;
	};

	let newLocation = createLocation();

	let locations: Location[] = [
		{
			location: "Veenendaal",
			description:
				"Het hoofdkantoor. Digitaal lunch bestellen, nice. Begane grond is vrij mooi, rest mwoa. Tafelvoetbal++.",
			rating: 8,
			photoUrl:
				"https://www.infosupport.com/wp-content/uploads/2023/12/Screenshot-2023-12-07-152430-aspect-ratio-393-269.png",
		},
		{
			location: "Utrecht",
			description:
				"WC's stinken, zijn koud in winter, soms wespen aanwezig, soms zeep niet aanwezig. Utrecht is wel awesome. Appelsap aanwezig. Semi-hip buitenmeubilair. Je kan wel door Utrecht heenlopen en bier drinken.",
			rating: 8,
			photoUrl: "https://www.infosupport.com/wp-content/uploads/2023/12/Trainingslocatie-Utrecht-aspect-ratio-393-269.png",
		},
		{
			location: "Mechelen",
			description:
				"Bovenste verdieping in gedeeld pand. Heeft altijd een schaakbord klaarstaan. Lunch met lekker uitgebreide bestellijst. Geinige mensen. Tafelvoetbal++",
			rating: 8.5,
			photoUrl:
				"https://www.infosupport.com/wp-content/uploads/2023/12/Screenshot-2023-12-07-152724-aspect-ratio-393-269.png",
		},
	];
</script>

<main>
	<form on:submit|preventDefault={addLocation}>
		<ol>
			<li>
				<label for="input-location">Waar?</label>
				<input id="input-location" bind:value={newLocation.location} />
			</li>
			<li>
				<label for="input-description">Beschrijving:</label>
				<input id="input-description" bind:value={newLocation.description} />
			</li>
			<li>
				<label for="input-rating">Rating:</label>
				<input id="input-rating" bind:value={newLocation.rating} type="number" step="0.5" />
			</li>
			<li>
				<label for="input-photo-url">Foto URL:</label>
				<input id="input-photo-url" type="url" bind:value={newLocation.photoUrl} />
			</li>
			<li><button>Add locatie</button></li>
		</ol>
	</form>

	<table>
		<thead>
			<tr>
				<th>Waar</th>
				<th>Beschrijving</th>
				<th>Rating</th>
				<th>Foto</th>
			</tr>
		</thead>
		<tbody>
			{#each locations as location}
				<tr>
					<td>{location.location}</td>
					<td>{location.description}</td>
					<td>{location.rating}</td>
					<td>
						<img src={location.photoUrl} alt="Locatie van {location.location}" />
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
	form ol {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: min-content 1fr;
		column-gap: 1.5rem;
		row-gap: 0.5rem;

		li:not(:has(button, pre)) {
			grid-column: span 2;
			display: grid;
			grid-template-columns: subgrid;
		}

		input {
			max-width: 14rem;
		}
	}

	td img {
		max-width: 120px;
	}

	main {
		display: flex;
		gap: 2rem;
	}
</style>
