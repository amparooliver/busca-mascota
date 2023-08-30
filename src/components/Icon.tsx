import L from 'leaflet';
import markerIcon from '../assets/marker.svg';

const iconCustom = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: L.point(30, 45),
  iconAnchor: L.point(15, 45), // Half of iconSize for centering
  popupAnchor: L.point(0, -45), // Above the marker
  shadowUrl: null, // No shadow
  shadowSize: null,
  shadowAnchor: null,
  className: ''
});

export { iconCustom };
