const goods = require("./goods.json");
const orders = require("./orders.json");

module.exports = () => {
  const data = {
    goods,
    orders,
  };

  return data;
}
