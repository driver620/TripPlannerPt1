const mapboxgl = require("mapbox-gl")
const {createMarker} = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmVyNjIwIiwiYSI6ImNqdjJpdTN3MDFqeXYzeW80ZmNjYXZoamUifQ.tMh2lwZQh6PFmZ8G0oQ3KA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

createMarker('activity', [-74.009151, 40.705086]).addTo(map)


console.log('WORKING!!!')
