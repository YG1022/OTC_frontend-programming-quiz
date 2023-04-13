<template>
  <div class="my-counter">
    <button class="btn btn-light" @click="handleSub">-</button>
    <input type="number" v-model.number="goodObj.amount" />
    <button class="btn btn-light" @click="handleAdd">+</button>
  </div>
</template>

<script lang="ts">
import type { good } from "@/constants/type";
import { defineComponent, reactive, watch } from "vue";
import { goodsStore } from "@/store/store";

export default defineComponent({
  name: "CustomCount",
  props: {
    obj: {
      type: Object as () => good,
      required: true,
    },
  },

  setup(props) {
    const goodObj = reactive(props.obj);
    const maxQuantity = goodObj.stock;
    const handleAdd = () => {
      if (goodObj.amount < goodObj.stock) {
        goodObj.amount++;
        goodsStore.updateGood(goodObj);
      }
    };
    const handleSub = () => {
      if (goodObj.amount > 0) {
        goodObj.amount--;
        goodsStore.updateGood(goodObj);
      }
    };
    watch(
      () => goodObj.amount,
      (newValue) => {
        if (newValue > maxQuantity) {
          goodObj.amount = maxQuantity;
        } else if (newValue < 0) {
          goodObj.amount = 0;
        }
      }
    );

    return { goodObj, handleAdd, handleSub };
  },
});
</script>

<style></style>
