import { describe, it, expect } from "vitest";
import { formatCurrency, formatDate } from "../src";

describe("Intl DateTimeFormat", () => {
  it("should format date correctly", () => {
    const result = formatDate(new Date("2022-04-23"), "en-UK");
    expect(result).toBe("Saturday 23 April 2022");
  });
});

describe("Intl NumberFormat", () => {
  it("should format currency correctly", () => {
    const result = formatCurrency(1234567.89, "en-UK", "GBP");
    expect(result).toBe("£1,234,567.89");
  });

  it("should show ,00 or .00 for currencies with decimal places", () => {
    const result = formatCurrency(1234567, "en-UK", "GBP");
    console.log(result);
    expect(result).toBe("£1,234,567.00");
  });
});
