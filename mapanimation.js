// This array contains the coordinates for all bus stops Tenlytown and Georgetown
const busStops = [
   [-77.077252, 38.943323],
   [-77.076309, 38.939605],
   [-77.074022, 38.937449],
   [-77.072566, 38.934356],
   [-77.072755, 38.931998],
   [-77.073220, 38.929169],
   [-77.073304, 38.927642],
   [-77.073307, 38.924194],
   [-77.072786, 38.922129],
   [-77.071607, 38.920206],
   [-77.069173, 38.917325],
   [-77.068019, 38.915892],
   [-77.066863, 38.913860],
   [-77.065300, 38.910931],
   [-77.064467, 38.909362],
   [-77.063366, 38.907274],
   [-77.062296, 38.905093]]

  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmxrb3JkaXMiLCJhIjoiY2t0ZGQyeDdxMmVnMzJubXVmbzg0NjczOSJ9.7NTrXCBGteqObUFM2r5Itg';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-77.069173, 38.917325],
    zoom: 12,
  });
  
  let marker = new mapboxgl.Marker().setLngLat(busStops[0]).addTo(map);
  let counter = 1;

  function move() {
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }