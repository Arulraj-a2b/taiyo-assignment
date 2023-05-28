import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import { CovidCountries } from "../modules/MapsModule/store/mapScreen.type";

export const prettyPrintStat = (stat: any) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

const casesTypeColors: any = {
  cases: {
    hex: "#f87171",
    multiplier: 300,
  },
  recovered: {
    hex: "#4ade80",
    multiplier: 400,
  },
  deaths: {
    hex: "#f87171",
    multiplier: 2000,
  },
};

// Map Circle helper
export const showDataOnMap = (data: CovidCountries[], casesType: string) =>
  data?.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        // @ts-ignore:next-line
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div>
          <div
            className="bg-cover	mb-2 rounded"
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
              height: 80,
              width: "100%",
            }}
          />
          <div className="text-neutral-950 font-semibold">
            {country.country}
          </div>
          <div className="text-neutral-950 font-semibold">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="text-neutral-950 font-semibold">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="text-neutral-950 font-semibold">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

// Sort the covid case helper
export const sortData = (data: CovidCountries[]) => {
  const sortedData = [...data];
  return sortedData?.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
