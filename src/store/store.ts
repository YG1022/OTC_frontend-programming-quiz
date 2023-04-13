import type { goodsSate } from "@/constants/type";
import { reactive } from "vue";

export const goodsStore = reactive<goodsSate>({
  goodsList: [],
});
