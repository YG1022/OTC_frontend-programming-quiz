import type { good } from "./type";

export const calTotalPrice = (goodsList: good[]) => {
  return goodsList.reduce((prev, cur) => {
    let curTotal = 0;
    if (cur.amount > 100) {
      curTotal =
        30 * cur.price +
        20 * cur.price * 0.9 +
        50 * cur.price * 0.85 +
        (cur.amount - 100) * cur.price * 0.8;
    } else if (cur.amount > 50) {
      curTotal =
        30 * cur.price +
        20 * cur.price * 0.9 +
        (cur.amount - 50) * cur.price * 0.85;
    } else if (cur.amount > 40) {
      curTotal = cur.price * (cur.amount - 20) + 20 * cur.price * 0.9;
    } else if (cur.amount > 20) {
      curTotal = cur.price * 20 + (cur.amount - 20) * cur.price * 0.9;
    } else {
      curTotal = cur.price * cur.amount;
    }

    return prev + curTotal;
  }, 0);
};
