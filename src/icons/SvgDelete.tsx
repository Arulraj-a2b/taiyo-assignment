const defaultProps = {
  width: 24,
  height: 24,
  fill: "#000000",
};

const SvgDelete = ({ width, height, fill }: typeof defaultProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none">
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7ZM9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z"
    />
  </svg>
);

SvgDelete.defaultProps = defaultProps;

export default SvgDelete;
