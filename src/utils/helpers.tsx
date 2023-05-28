import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

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

export const showDataOnMap = (data: any, casesType: string) =>
  data?.map((country: any) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
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

export const sortData = (data: any) => {
  const sortedData = [...data];
  return sortedData?.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
