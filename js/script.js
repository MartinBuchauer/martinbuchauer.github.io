mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvYWwiLCJhIjoiY2loZXc2YTJjMDA0d3VsbTR5aHprN2h6YiJ9.w1ayhuSiXwPNxBiJsV6ViA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/geoal/cisjh89dk00e62ymxkc5pmpq1', //stylesheet location
    center: [11.56,48.13], // starting position
    zoom: 9 // starting zoom
}); //mapbox://styles/geoal/cisjh89dk00e62ymxkc5pmpq1

// Map Controls
map.addControl(new mapboxgl.Navigation());

// Geocoder
// map.addControl(new mapboxgl.Geocoder());

// get features under mousepointer
/*
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point);
    document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
});
*/


// Mapbox Fit to Bounding
function changeButton(buttonid){
  // var buttonholder = document.getElementById('fit_to');
  switch (buttonid) {
    case 'Munich':
    map.fitBounds([[
        11.637,48.103
    ], [
        11.498,48.183
    ]]);
    break;
    case 'Alps':
    map.fitBounds([[
        12.419,46.785
    ], [
        9.290,47.702
    ]]);
    break;
    case 'Europe':
    map.fitBounds([[
        -28.787,62.371
    ], [
        46.828,38.112
    ]]);
    break;
    case 'World':
    map.fitBounds([[
        152.801,-63.025
    ], [
        -82.011,83.473
    ]]);
      break;

    default:

  }
}





// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['movies '] });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        // popup.remove();
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(feature.geometry.coordinates)
    .setHTML(feature.properties.url+feature.properties.description)
    .addTo(map);
});









/*Change Style*/
function changeStyle(styleid){
  // var layerlist = document.getElementById('menu');

  switch (styleid) {
    case 'satellite':
      map.setStyle('mapbox://styles/geoal/cisjgk35e00c72xpbrh53zrhf');
      break;
    case 'dark':
      map.setStyle('mapbox://styles/geoal/cisamb24000012wql9xatpiht');
        break;
    default:

       map.setStyle('mapbox://styles/geoal/cisjh89dk00e62ymxkc5pmpq1');
      break;

  }
}
/*

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/geoal/cisjgk35e00c72xpbrh53zrhf');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}



document.getElementById('fit_to').addEventListener('click', function() {
    map.fitBounds([[
        11.637,48.103
    ], [
        11.498,48.183
    ]]);
});
*/
