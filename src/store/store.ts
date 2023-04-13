import type { good, goodsSate, ordersState } from "@/constants/type";
import { reactive } from "vue";

export const goodsStore = reactive<goodsSate>({
  goodsList: [],
  setGoodsList: (goodsList: goodsSate["goodsList"]) => {
    goodsStore.goodsList = goodsList;

    localStorage.setItem("goods", JSON.stringify(goodsList));
  },
  updateGood: (good: good) => {
    const index = goodsStore.goodsList.findIndex((item) => item.id === good.id);
    goodsStore.goodsList[index] = good;

    localStorage.setItem("goods", JSON.stringify(goodsStore.goodsList));
  },
});

export const ordersStore = reactive<ordersState>({
  ordersList: [],
  setOrdersList: (ordersList: ordersState["ordersList"]) => {
    ordersStore.ordersList = ordersList;

    localStorage.setItem("orders", JSON.stringify(ordersList));
  },
  deleteOrder: (id: number) => {
    const index = ordersStore.ordersList.findIndex((item) => item.id === id);
    ordersStore.ordersList.splice(index, 1);

    localStorage.setItem("orders", JSON.stringify(ordersStore.ordersList));
  },
});
