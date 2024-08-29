const whereAmI = (lat, lng) => {
	const url = `https://geocode.xyz/${lat},${lng}?geoit=json.`;
	fetch(url)
		.then((response) => {
			if (!response.ok)
				console.log(`Problem with geocoding! (${response.status})`);
			return response.json();
		})
		.then((data) => {
			const city = data.city;
			const region = data.region;
			console.log(`You are in ${city}, ${region}.`);
		})
		.catch((err) => {
			console.error(`Something went wrong: ${err.message}`);
		});
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
