module.exports = function currencyFormat(amount, locale, style, currency) {
  if (
    typeof amount !== "number" ||
    typeof locale !== "string" ||
    typeof style !== "string" ||
    typeof currency !== "string"
  ) {
    return "Input mush be a number, string (us-US), string (currency), and string (USD)!";
  }

  const formattedAmount = new Intl.NumberFormat(locale, {
    style: style,
    currency: currency,
  }).format(amount);

  return formattedAmount;
};
