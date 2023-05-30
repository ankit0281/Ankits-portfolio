const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '97145477b1msha80df4111fcad1ep14a8a2jsne4a8e52bb90b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));