const toHexWithLeadingZero = (number: number) => {
  let hex = number.toString(16);
  if (hex.length % 2 !== 0) {
    hex = "0" + hex;
  }
  return "0x" + hex;
};

export default toHexWithLeadingZero;
