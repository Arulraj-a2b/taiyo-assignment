import { FormikProps } from "formik";
import { formType } from "./ContactScreen";

type Props = {
  buttonTitle?: string;
  formik: FormikProps<formType>;
  handleClose: () => void;
};

const CreateContact = ({
  formik,
  buttonTitle = "Save Contact",
  handleClose,
}: Props) => {
  return (
    <div className=" justify-center flex items-center">
      <div className="flex flex-col  bg-white rounded p-8 w-3/4">
        <p className="text-xl font-bold">Create Contact</p>
        <div className="mt-4">
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium ">
              First Name
            </label>
            <input
              value={formik.values.firstName}
              onChange={formik.handleChange("firstName")}
              type="text"
              className="p-4 rounded w-full border-2 border-gary-500"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {formik.errors.firstName}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-md font-medium">Last Name</label>
            <input
              type="text"
              className="block p-4 rounded w-full border-2 border-gary-500"
              value={formik.values.lastName}
              onChange={formik.handleChange("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {formik.errors.lastName}
              </p>
            )}
          </div>
          <label className="block  text-md font-medium">Status</label>
          <div className="flex items-center pl-4">
            <input
              checked={formik.values.status === "1"}
              id="bordered-radio-1"
              type="radio"
              onChange={() => formik.setFieldValue("status", "1")}
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium"
            >
              Active
            </label>
          </div>
          <div className="flex items-center pl-4">
            <input
              checked={formik.values.status === "0"}
              id="bordered-radio-2"
              type="radio"
              onChange={() => formik.setFieldValue("status", "0")}
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ml-2 text-sm font-medium"
            >
              Inactive
            </label>
          </div>
          {formik.touched.status && formik.errors.status && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {formik.errors.status}
            </p>
          )}
          <button
            onClick={handleClose}
            className="rounded bg-white  px-4 py-3 text-blue-500 outline outline-blue-500 mt-2 mr-4"
          >
            Cancel
          </button>
          <button
            onClick={() => formik.handleSubmit()}
            className="rounded bg-blue-500 px-4 py-3 text-white mt-2 outline outline-blue-500"
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
