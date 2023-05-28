import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import numeral from "numeral";
import { useState } from "react";
import { prettyPrintStat, sortData } from "../../utils/helpers";
import Map from "./Map";
import InfoCard from "./InfoCard";
import LineGraph from "./LineGraph";
import LiveCasesTable from "./LiveCasesTable";

const MapsScreen = () => {
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  const { isLoading, data } = useQuery({
    queryKey: ["covid-all"],
    queryFn: () =>
      axios.get("https://disease.sh/v3/covid-19/all").then((res) => res.data),
  });

  const { data: dataCountries } = useQuery({
    queryKey: ["countries-all"],
    queryFn: () =>
      axios
        .get("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.data),
  });

  const { data: historicalData } = useQuery({
    queryKey: ["historical-all"],
    queryFn: () =>
      axios
        .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((res) => res.data),
  });

  return (
    <div className="h-full w-full flex flex-row">
      <div style={{ flex: 9 }}>
        <div className="flex flex-row">
          <InfoCard
            isRightMargin
            title={"Coronavirus Cases"}
            onClick={() => setCasesType("cases")}
            active={casesType === "cases"}
            cases={prettyPrintStat(data?.todayCases)}
            total={numeral(data?.cases).format("0.0a")}
          />
          <InfoCard
            isRightMargin
            isGreen
            title={"Recovered"}
            onClick={() => setCasesType("recovered")}
            active={casesType === "recovered"}
            cases={prettyPrintStat(data?.todayRecovered)}
            total={numeral(data?.recovered).format("0.0a")}
          />
          <InfoCard
            title={"Deaths"}
            cases={prettyPrintStat(data?.todayDeaths)}
            total={numeral(data?.deaths).format("0.0a")}
            onClick={() => setCasesType("deaths")}
            active={casesType === "deaths"}
          />
        </div>
        <div
          className="w-full mt-4 bg-white rounded p-4"
          style={{ height: 472 }}
        >
          <Map
            countries={dataCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
      </div>
      <div
        style={{ flex: 3, height: window.innerHeight - 100 }}
        className="bg-white p-4 rounded ml-4"
      >
        <span className="text-neutral-950 font-bold text-1xl mt-8 mb-4">
          Live Cases by Country
        </span>
        <LiveCasesTable
          countries={sortData(dataCountries ? dataCountries : [])}
        />
        <span className="text-neutral-950 font-bold text-1xl">
          World wide new {casesType}
        </span>
        <div className="mt-3">
          <LineGraph data={historicalData} casesType={casesType} />
        </div>
      </div>
    </div>
  );
};

export default MapsScreen;
