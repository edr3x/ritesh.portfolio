function textCopy() {
  const add = ["rit.rel53", "gmail.com"].join("@");
  navigator.clipboard.writeText(add);
  alert("Copied mail address to clipboard");
}
