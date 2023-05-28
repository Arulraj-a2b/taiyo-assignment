import numeral from "numeral";

type Props = {
  countries: any;
};
const LiveCasesTable = ({ countries }: Props) => {
  return (
    <div style={{ overflowY: "scroll" }} className="h-3/5 mt-4 mb-4 px-4">
      <table>
        <tbody>
          {countries.map(({ country, cases }: any, index: number) => (
            <tr
              key={index.toString()}
              style={{ marginBottom: 4 }}
              className={`flex w-full justify-between	 p-2 ${
                index % 2 === 0 ? "bg-gray-300" : ""
              }`}
            >
              <td>{country}</td>
              <td>
                <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveCasesTable;
