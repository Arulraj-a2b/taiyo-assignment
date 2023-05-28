import numeral from "numeral";

type Props = {
  countries: any;
};
const LiveCasesTable = ({ countries }: Props) => {
  return (
    <div style={{ overflowY: "scroll" }} className="h-3/5 mt-4 mb-8">
      {countries.map(({ country, cases }: any, index: number) => (
        <tr
          style={{ marginBottom: 4 }}
          className={`${index % 2 === 0 ? "bg-gray-300" : ""}`}
        >
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default LiveCasesTable;
