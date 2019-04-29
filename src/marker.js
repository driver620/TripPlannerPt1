const mapboxgl = require("mapbox-gl")

function createMarker(type, coords) {
const div = document.createElement('div')
div.style.width = "32px";
div.style.height = "39px";
if (type === 'activity') {
  div.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
} else if (type === 'hotel') {
  div.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
} else if (type === 'restaurant') {
  div.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
}


  return new mapboxgl.Marker(div).setLngLat(coords);
}

module.exports = {createMarker}
