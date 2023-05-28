type Props = {
  title: string;
  cases: string;
  active: boolean;
  total: string;
  onClick: () => void;
  isGreen?: boolean;
  isRightMargin?: boolean;
  isVerticalMargin?: boolean;
};

const InfoCard = ({
  title,
  cases,
  active,
  total,
  onClick,
  isGreen,
  isRightMargin,
  isVerticalMargin,
}: Props) => {
  return (
    <div
      onClick={onClick}
      tabIndex={-1}
      role="button"
      className={`w-full ${isVerticalMargin ? "my-4" : ""} ${
        isRightMargin ? "mr-4" : ""
      } bg-white rounded overflow-hidden shadow-lg flex flex-col px-4 pb-5 border-t-8 ${
        active ? "border-t-teal-500" : "border-t-white"
      }`}
    >
      <span className="text-gray-500 text-base mt-4">{title}</span>
      <span
        className={`py-2 ${
          isGreen ? "text-green-500" : "text-red-500"
        } font-bold text-xl`}
      >
        {cases}
      </span>
      <span className="text-gray-500 font-medium text-sm">{total} Total</span>
    </div>
  );
};

export default InfoCard;
