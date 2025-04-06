export function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "full",
  }).format(date);
}

export function formatCurrency(
  number: number,
  locale: string,
  currencyCode: string
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(number);
}
