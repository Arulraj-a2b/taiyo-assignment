import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import numeral from "numeral";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { prettyPrintStat, sortData } from "../../utils/helpers";
import Map from "./Map";
import InfoCard from "./InfoCard";
import LineGraph from "./LineGraph";
import LiveCasesTable from "./LiveCasesTable";
import Loader from "../../packages/Loader/Loader";
import {
  covidAllApi,
  covidCountriesApi,
  covidhistoricalApi,
} from "../../routes/apiRoutes";

const MapsScreen = () => {
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom] = useState(3);

  // Mobile and Tablet responsive condition
  const tablet = useMediaQuery({ query: "(max-width: 1000px)" });

  // covidAll api fetch
  const { isLoading, data } = useQuery({
    queryKey: ["covid-all"],
    queryFn: () => axios.get(covidAllApi).then((res) => res.data),
  });

  // covid countries api fetch
  const { data: dataCountries, isLoading: countriesLoader } = useQuery({
    queryKey: ["countries-all"],
    queryFn: () => axios.get(covidCountriesApi).then((res) => res.data),
  });

  // covid historical api fetch
  const { data: historicalData, isLoading: historicalLoader } = useQuery({
    queryKey: ["historical-all"],
    queryFn: () =>
      axios
        .get(covidhistoricalApi, {
          params: {
            lastdays: "all",
          },
        })
        .then((res) => res.data),
  });

  return (
    <>
      {(isLoading || countriesLoader || historicalLoader) && <Loader />}
      <div className="w-full flex tablet:flex-col">
        <div className={`${tablet ? "" : "w-4/6"}`}>
          <div className="flex tablet:flex-col">
            <InfoCard
              isRightMargin
              title={"Coronavirus Cases"}
              onClick={() => setCasesType("cases")}
              active={casesType === "cases"}
              cases={prettyPrintStat(data?.todayCases)}
              total={numeral(data?.cases).format("0.0a")}
            />
            <InfoCard
              isVerticalMargin={tablet}
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
          {/* Map component */}
          <div
            className={`w-full mt-4 bg-white rounded p-4 ${
              tablet ? "" : "h-full"
            }`}
          >
            <Map
              countries={dataCountries}
              casesType={casesType}
              center={mapCenter}
              zoom={mapZoom}
            />
          </div>
        </div>

        {/* Live case table and Line Graph component */}
        <div
          style={{
            height: window.innerHeight - 100,
            marginLeft: tablet ? 0 : 20,
          }}
          className={`bg-white  rounded  ${
            tablet ? "" : "w-2/6"
          } tablet:mt-4 pt-4 `}
        >
          <span className="text-neutral-950 font-bold text-1xl mt-8 mb-4 px-4">
            Live Cases by Country
          </span>
          <LiveCasesTable
            countries={sortData(dataCountries ? dataCountries : [])}
          />
          <span className="text-neutral-950 font-bold text-1xl px-4 ">
            World wide new {casesType}
          </span>
          <div className="mt-3 bg-white p-4">
            <LineGraph data={historicalData} casesType={casesType} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapsScreen;
