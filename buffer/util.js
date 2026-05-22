// 字节序转换
export function swap16(val) {
  return ((val & 0xFF) << 8) | ((val >> 8) & 0xFF);
}

export function swap32(val) {
  return ((val & 0xFF) << 24) |
    ((val & 0xFF00) << 8) |
    ((val >> 8) & 0xFF00) |
    ((val >> 24) & 0xFF);
}

// ArrayBuffer转字符串
export function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// 字符串转ArrayBuffer
export function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
