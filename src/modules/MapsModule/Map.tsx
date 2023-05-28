import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../utils/helpers";
import { useMediaQuery } from "react-responsive";
import { CovidCountries } from "./store/mapScreen.type";

type Props = {
  countries: CovidCountries[];
  casesType: any;
  center: any;
  zoom: number;
};
const Map = ({ countries, casesType, center, zoom }: Props) => {
  const tablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={`w-full tablet:h-96	bg-white p-4 ${tablet ? "" : "h-full"}`}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {showDataOnMap(countries, casesType)}
    </MapContainer>
  );
};

export default Map;
