import SvgDelete from "../../icons/SvgDelete";
import SvgEdit from "../../icons/SvgEdit";
import { Contact } from "./store/contact.types";

type Props = {
  data: Contact[];
  handleDelete: (a: number) => void;
  handleEdit: (a: number) => void;
};

const ContactList = ({ data, handleDelete, handleEdit }: Props) => {
  return (
    <div className=" rounded w-full bg-white p-4">
      <table className="border-collapse border border-slate-500 w-full bg-white p-4">
        <thead>
          <tr>
            <th className="border border-gary-600 ">First Name</th>
            <th className="border border-gary-600 ">Last Name</th>
            <th className="border border-gary-600 ">Status</th>
            <th className="border border-gary-600 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => {
            return (
              <tr key={index.toString()}>
                <td className="border border-gary-700 px-2 h-30 ">
                  {list.firstName}
                </td>
                <td className="border border-gary-700 px-2">{list.lastName}</td>
                <td className="border border-gary-700 px-2 text-center	">
                  {list.status === "1" ? "Active" : "Inactive"}
                </td>
                <td className="border border-gary-700 px-2 text-center	py-4">
                  <div className="flex flex-row item-center justify-around	">
                    <div
                      title="Delete"
                      tabIndex={-1}
                      role="button"
                      onClick={() => handleDelete(index)}
                    >
                      <SvgDelete />
                    </div>
                    <div
                      title="Edit"
                      tabIndex={-1}
                      role="button"
                      onClick={() => handleEdit(index)}
                    >
                      <SvgEdit />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
