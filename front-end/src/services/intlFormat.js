export const thbFormat = (num) =>
  new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", currencyDisplay: "code" }).format(num);
