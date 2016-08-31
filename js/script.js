mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvYWwiLCJhIjoiY2loZXc2YTJjMDA0d3VsbTR5aHprN2h6YiJ9.w1ayhuSiXwPNxBiJsV6ViA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/geoal/cisamb24000012wql9xatpiht', //stylesheet location
    center: [11.56,48.13], // starting position
    zoom: 9 // starting zoom
});

// Map Controls
map.addControl(new mapboxgl.Navigation());

// Geocoder
map.addControl(new mapboxgl.Geocoder());

// get features under mousepointer
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point);
    document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
});



// Pop up
/*
var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([11.56,48.13])
    .setHTML('<h1>Hello Munich!</h1>')
    .addTo(map);

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
        -125.044,-61.553
    ], [
        -145.012,83.115
    ]]);
      break;

    default:

  }
}

// Infobox onclick









/*
function popUp(id){

  var title = document.getElementById('location-title');
  var description = document.getElementById('location-description');
  var locations = [{
      "id": "2",
      "title": "JYM",
      "description": "The Junior Year Munich is a wonderful suited institution in the heart of Munich.It's a perfect chance for American students to come as an exchange student to Germany.",
      "camera": {
          center: [11.5631103515625,48.14776316994869],
          zoom: 12.21,
          pitch: 50
      }
  }, {
      "id": "3",
      "title": "Frozen Jogurt",
      "description": "I Love Leo - FrozenJogurt Image Movie: is currently in post-production and will be released in September 2016",
      "camera": {
          center: [11.583709716796875,48.150511924440764],
          bearing: -8.9,
          zoom: 11.68
        }
  },{
      "id": "4",
      "title": "Hochfeiler",
      "description": "The Hochfeiler is the tallest Mountain of the Ziller Valley.",
      "camera": {
          center: [11.7279052734375,46.97275640318637],
          bearing: -8.9,
          zoom: 11.68
        }
  },{
      "id": "5",
      "title": "Silvretta",
      "description": "Students of the University of Applied Science Munich spending 1 Week at the Wiesbadener Hut, Silvretta, Alps.",
      "camera": {
          center: [10.11566162109375,46.86864162233212],
          bearing: -8.9,
          zoom: 11.68
        }
  },{
      "id": "6",
      "title": "33 Monkeys",
      "description": "33 MONKEYS is an experiment: we bring together 33 friends in the middle of the mountains, to cook together, innovate, discuss and dive into virtual reality, mindfulness and innovation. .",
      "camera": {
          center: [9.856109619140625,47.06825108635343],
          bearing: -8.9,
          zoom: 11.68
        }
  }, {
      "id": "7",
      "title": "3DRealityMaps",
      "description": "'Interactive, realistic 3D maps in uncomparable, detailed accuracy - informative, invigorating, navigable.''",
      "camera": {
          center: [11.309051513671875,47.61356975397396],
          bearing: -8.9,
          zoom: 11.68
        }
  },{
      "id": "8",
      "title": "Rofan",
      "description": "Outdoor Guides is the perfect App for people who enjoy Hiking,Cycling or Rock-climbing in the Alps.",
      "camera": {
          center: [11.7938232421875,47.4578085307503],
          bearing: -8.9,
          zoom: 11.68
        }
  },{
      "id": "9",
      "title": "3 Old man of Hoy",
      "description": "In September 2016, 3 women will embark on a unique adventure. Their goal is to climb all three of Scotland’s iconic sea stacks; 'The 3 Old Men', in three consecutive days.",
      "camera": {
          center: [-3.43048095703125,58.886200146156],
          bearing: -8.9,
          zoom: 11.68
        }
  },{
      "id": "10",
      "title": "The Lorax Project",
      "description": "THE LORAX PROJECT is currently in post-production and will be released later in 2016.",
      "camera": {
          center: [145.82977294921875,-42.26917949243504],
          bearing: -8.9,
          zoom: 11.68
  }
  }];

  switch (id) {
    case 'Munich':
    var popup = new mapboxgl.Popup({closeOnClick: false})
  //  description.textContent = locations[index].description;
      // .setLngLat([11.599266529083252,
        //    48.14877965360884])
    //  .setHTML(locations.title)
    //  .addTo(map);
      var popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat([11.557670831680298,
            48.12018158031333])
        .setHTML('<h1>I Love Leo - FrozenJogurt Image Movie: is currently in post-production and will be released in September 2016</h1>')
        .addTo(map);

      break;

    default:

  }


  function playback(index) {
      title.textContent = locations[index].title;
      description.textContent = locations[index].description;
  map.once('moveend', function() {
      // Duration the slide is on screen after interaction
      window.setTimeout(function() {
          // Increment index
          index = (index + 1 === locations.length) ? 0 : index + 1;
          playback(index);
      }); // After callback, show the location for 3 seconds.
  });
  }

  // Display the last title/description first
  title.textContent = locations[locations.length - 1].title;
  description.textContent = locations[locations.length - 1].description;







  playback(0);

}


*/








// Pop up on Click

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['movies '] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(feature.properties.url)
        .setHTML(feature.properties.description)
        .addTo(map);

});


map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['movies '] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

});





/*Change Style*/
function changeStyle(styleid){
  // var layerlist = document.getElementById('menu');

  switch (styleid) {
    /*case: 'dark':
      map.setStyle('mapbox://styles/geoal/cisamb24000012wql9xatpiht');
      break;*/
    case 'satellite':
      map.setStyle('mapbox://styles/mapbox/' + styleid + '-v9');
      break;
    case 'light':
      map.setStyle('mapbox://styles/mapbox/' + styleid + '-v9');
        break;
    default:

  }
}

/*
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}
*/

/*
document.getElementById('fit_to').addEventListener('click', function() {
    map.fitBounds([[
        11.637,48.103
    ], [
        11.498,48.183
    ]]);
});

*/

// Pop up on Hover


/*
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['movies '] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

});

if (!features.length) {
       popup.remove();
       return;
   }

   var feature = features[0];

   var popup = new mapboxgl.Popup({
       closeButton: false,
       closeOnClick: false
   });

   // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(feature.geometry.coordinates)
        .setHTML(feature.properties.url)
        .addTo(map);

*/

/* Google Markers

var marker = new Marker({
	map: map,
	position: new google.maps.LatLng(11.56,48.13),
	icon: {
		path: SQUARE_PIN,
		fillColor: '#00CCBB',
		fillOpacity: 1,
		strokeColor: '',
		strokeWeight: 0
	},
	map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
});
*/

// Camera Slideshow
function popUp(id){
var title = document.getElementById('location-title');
var description = document.getElementById('location-description');

var locations = [{
    "id": "2",
    "title": "JYM",
    "description": "The Junior Year Munich is a wonderful suited institution in the heart of Munich.It's a perfect chance for American students to come as an exchange student to Germany.",
    "camera": {
        center: [11.5631103515625,48.14776316994869],
        zoom: 12.21,
        pitch: 50
    }
}, {
    "id": "3",
    "title": "Frozen Jogurt",
    "description": "I Love Leo - FrozenJogurt Image Movie: is currently in post-production and will be released in September 2016",
    "camera": {
        center: [11.583709716796875,48.150511924440764],
        bearing: -8.9,
        zoom: 11.68
      }
},{
    "id": "4",
    "title": "Hochfeiler",
    "description": "The Hochfeiler is the tallest Mountain of the Ziller Valley.",
    "camera": {
        center: [11.7279052734375,46.97275640318637],
        bearing: -8.9,
        zoom: 11.68
      }
},{
    "id": "5",
    "title": "Silvretta",
    "description": "Students of the University of Applied Science Munich spending 1 Week at the Wiesbadener Hut, Silvretta, Alps.",
    "camera": {
        center: [10.11566162109375,46.86864162233212],
        bearing: -8.9,
        zoom: 11.68
      }
},{
    "id": "6",
    "title": "33 Monkeys",
    "description": "33 MONKEYS is an experiment: we bring together 33 friends in the middle of the mountains, to cook together, innovate, discuss and dive into virtual reality, mindfulness and innovation. .",
    "camera": {
        center: [9.856109619140625,47.06825108635343],
        bearing: -8.9,
        zoom: 11.68
      }
}, {
    "id": "7",
    "title": "3DRealityMaps",
    "description": "'Interactive, realistic 3D maps in uncomparable, detailed accuracy - informative, invigorating, navigable.''",
    "camera": {
        center: [11.309051513671875,47.61356975397396],
        bearing: -8.9,
        zoom: 11.68
      }
},{
    "id": "8",
    "title": "Rofan",
    "description": "Outdoor Guides is the perfect App for people who enjoy Hiking,Cycling or Rock-climbing in the Alps.",
    "camera": {
        center: [11.7938232421875,47.4578085307503],
        bearing: -8.9,
        zoom: 11.68
      }
},{
    "id": "9",
    "title": "3 Old man of Hoy",
    "description": "In September 2016, 3 women will embark on a unique adventure. Their goal is to climb all three of Scotland’s iconic sea stacks; 'The 3 Old Men', in three consecutive days.",
    "camera": {
        center: [-3.43048095703125,58.886200146156],
        bearing: -8.9,
        zoom: 11.68
      }
},{
    "id": "10",
    "title": "The Lorax Project",
    "description": "THE LORAX PROJECT is currently in post-production and will be released later in 2016.",
    "camera": {
        center: [145.82977294921875,-42.26917949243504],
        bearing: -8.9,
        zoom: 11.68
}
}];




function highlightBorough(code) {
    // Only show the polygon feature that cooresponds to `borocode` in the data
    map.setFilter('highlight', ["==", "borocode", code]);
}

function playback(index) {
    title.textContent = locations[index].title;
    description.textContent = locations[index].description;

    highlightBorough(locations[index].id ? locations[index].id : '');

    // Animate the map position based on camera properties

      switch (id) {
        case 'Munich':
        map.flyTo(locations[index].camera);
        // var popup = new mapboxgl.Popup({closeOnClick: false})
      //  description.textContent = locations[index].description;
          // .setLngLat([11.599266529083252,
            //    48.14877965360884])
        //  .setHTML(locations.title)
        //  .addTo(map);
        //  var popup = new mapboxgl.Popup({closeOnClick: false})
      /*      .setLngLat([11.557670831680298,
                48.12018158031333])
            .setHTML('<h1>I Love Leo - FrozenJogurt Image Movie: is currently in post-production and will be released in September 2016</h1>')
            .addTo(map);
    */
          break;
          case 'Alps':
            map.flyTo(locations[index].camera);

        default:

      }


    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
            // Increment index
            index = (index + 1 === locations.length) ? 0 : index + 1;
            playback(index);
        }, 3000); // After callback, show the location for 3 seconds.
    });
}

// Display the last title/description first
title.textContent = locations[locations.length - 1].title;
description.textContent = locations[locations.length - 1].description;

map.on('load', function() {

    // Polygon fill for each borough of new york city.
    // Used to highlight when its borough is active.
    map.addSource("boroughs", {
        "type": "vector",
        "url": "mapbox://mapbox.8ibmsn6u"
    });


    map.addLayer({
        "id": "highlight",
        "type": "fill",
        "source": "boroughs",
        "source-layer": "original",
        "paint": {
            "fill-color": "#fd6b50",
            "fill-opacity": 0.25
        },
        "filter": ["==", "borocode", ""]
    }, 'neighborhood_small_label'); // Place polygon under the neighborhood labels.

    // Start the playback animation for each borough
    playback(0);
});

}
