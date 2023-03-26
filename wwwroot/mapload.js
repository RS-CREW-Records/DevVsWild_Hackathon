mapboxgl.accessToken = 'pk.eyJ1IjoiYnRlcnBwZXJvbmkiLCJhIjoiY2xmbzIzb2k2MHJweTN6cDZpcDVibTVvYSJ9.uEgVxquIx9x4HeVUMJOmOA';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [3,51], // starting position [lng, lat]
zoom: 7, // starting zoom
});


