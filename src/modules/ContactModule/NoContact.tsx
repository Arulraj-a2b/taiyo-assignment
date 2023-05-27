type Props = {
  handleCreateContact: () => void;
};

const NoContact = ({ handleCreateContact }: Props) => {
  return (
    <div className="h-full justify-center flex items-center flex flex-col">
      <p className="text-gray-400 mb-4">
        No Contact Found Please add contact from Create Contact Button
      </p>
      <button
        onClick={handleCreateContact}
        className="rounded bg-blue-500 px-4 py-3 text-white"
      >
        Create Contact
      </button>
    </div>
  );
};

export default NoContact;
