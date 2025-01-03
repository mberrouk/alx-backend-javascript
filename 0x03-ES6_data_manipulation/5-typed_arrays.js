export default function createInt8TypedArray(length, position, value) {
  if (length <= position) {
    throw new Error('Position outside range');
  }

  const buff = new DataView(new ArrayBuffer(length), 0, length);
  buff.setInt8(position, value);

  return buff;
}
