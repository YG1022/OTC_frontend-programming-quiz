import type { goodsSate } from "@/constants/type";
import { reactive } from "vue";

export const goodsStore = reactive<goodsSate>({
  goodsList: [],
  setGoodsList: (goodsList: goodsSate["goodsList"]) => {
    goodsStore.goodsList = goodsList;

    localStorage.setItem("goodsList", JSON.stringify(goodsList));
  },
});
