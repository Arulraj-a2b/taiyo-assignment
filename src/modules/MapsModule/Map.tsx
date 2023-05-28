import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../utils/helpers";

type Props = {
  countries: any;
  casesType: any;
  center: any;
  zoom: number;
};
const Map = ({ countries, casesType, center, zoom }: Props) => {
  return (
    <MapContainer center={center} zoom={zoom} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {showDataOnMap(countries, casesType)}
    </MapContainer>
  );
};

export default Map;
