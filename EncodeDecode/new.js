const encoder = new TextEncoder();
const e = encoder.encode("binish");
console.log(e)
const decoder = new TextDecoder();
const d = decoder.decode(e);
console.log(d)
