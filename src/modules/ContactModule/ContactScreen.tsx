import { useState } from "react";
import { FormikHelpers, useFormik } from "formik";
import { toast } from "react-toastify";
import NoContact from "./NoContact";
import CreateContact from "./CreateContact";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addContact } from "./store/contactReducer";
import ContactListTable from "./ContactListTable";
import { isEmpty } from "../../utils/validators";

export type formType = {
  firstName: string;
  lastName: string;
  status: string;
};

const initialValues: formType = {
  firstName: "",
  lastName: "",
  status: "",
};

const ContactScreen = () => {
  const dispatch: AppDispatch = useDispatch();

  const [isContactCreate, setContactCreate] = useState({
    open: false,
    status: "add",
  });
  const [isEditIndex, setEditIndex] = useState(0);

  const { data } = useSelector(({ contactReducers }: RootState) => {
    return {
      data: contactReducers.data,
    };
  });

  // Contact create open function
  const handleCreateContact = () =>
    setContactCreate({ open: true, status: "add" });

  // Contact form submit function
  const handleSubmit = (
    values: formType,
    formikHelpers: FormikHelpers<any>
  ) => {
    if (isContactCreate.status === "add") {
      dispatch(addContact([...data, values]));
      setContactCreate({ open: false, status: "add" });
      formikHelpers.resetForm();
      toast.success("Contact added successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    } else {
      let updatedElement = values;
      let newArray = data.map((element: any, index: any) => {
        if (index === isEditIndex) {
          return updatedElement;
        }
        return element;
      });
      dispatch(addContact(newArray));
      setContactCreate({ open: false, status: "add" });
      formikHelpers.resetForm();
      toast.success("Contact updated successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  // Form validation
  const validate = (values: formType) => {
    const errors: Partial<formType> = {};
    if (isEmpty(values.firstName)) {
      errors.firstName = "FirstName is required";
    }

    if (isEmpty(values.lastName)) {
      errors.lastName = "LastName field is required";
    }
    if (isEmpty(values.status)) {
      errors.status = "Please select status";
    }
    return errors;
  };

  // Form handle hook
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });

  // Contact delete function
  const handleDelete = (indexToRemove: number) => {
    let newArray = data.filter(
      (_: any, index: number) => index !== indexToRemove
    );
    dispatch(addContact(newArray));
    toast.success("Contact deleted successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  };

  // Contact edit function
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setContactCreate({ open: true, status: "edit" });
    formik.setFieldValue("firstName", data[index].firstName);
    formik.setFieldValue("lastName", data[index].lastName);
    formik.setFieldValue("status", data[index].status);
  };

  // Contact create or edit close function
  const handleCloseContact = () => {
    setContactCreate({ open: false, status: "edit" });
    formik.resetForm();
  };

  return (
    <div className="h-full">
      {isContactCreate.open ? (
        // Contact add or edit component
        <CreateContact
          handleClose={handleCloseContact}
          formik={formik}
          buttonTitle={
            isContactCreate.status === "edit"
              ? "Save Edited Contact"
              : "Save Contact"
          }
        />
      ) : (
        data?.length === 0 && (
          // No Contact component
          <NoContact handleCreateContact={handleCreateContact} />
        )
      )}

      {/* Contact list table Component */}
      {data.length > 0 && isContactCreate.open === false && (
        <div>
          <div className="justify-end	flex flex-row">
            <button
              onClick={handleCreateContact}
              className="rounded bg-teal-500 px-4 py-3 text-white mb-2"
            >
              Add Contact
            </button>
          </div>

          <ContactListTable
            data={data}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      )}
    </div>
  );
};

export default ContactScreen;
