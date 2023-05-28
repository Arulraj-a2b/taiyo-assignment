/* eslint max-len: ["error", { "code": 4000 }] */

const defaultProps = {
  width: 24,
  height: 24,
  fill: "#000000",
};

const SvgClose = ({ width, height, fill }: typeof defaultProps) => (
  <svg viewBox="0 0 1024 1024" width={width} height={height} fill="none">
    <path
      fill={fill}
      d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
    />
  </svg>
);

SvgClose.defaultProps = defaultProps;

export default SvgClose;
