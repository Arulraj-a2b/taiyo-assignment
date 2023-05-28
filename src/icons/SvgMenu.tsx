/* eslint max-len: ["error", { "code": 4000 }] */

const defaultProps = {
  width: 24,
  height: 24,
  fill: "#000000",
};

const SvgMenu = ({ width, height, fill }: typeof defaultProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none">
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
      d="M4 18h16M4 12h16M4 6h16"
    />
  </svg>
);

SvgMenu.defaultProps = defaultProps;

export default SvgMenu;
