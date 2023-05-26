const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  function convertProductsStructure(products) {
    const output = {};

    for (const variant of products) {
      const [color, size] = variant.split('-');

      if (!output[color]) {
        output[color] = {};
      }

      if (!output[color][size]) {
        output[color][size] = 0;
      }

      output[color][size]++;
    }

    return output;
  }

  return convertProductsStructure(products);
};
