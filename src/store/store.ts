import type { good, goodsSate } from "@/constants/type";
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
