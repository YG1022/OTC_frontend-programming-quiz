<template>
  <div class="my-counter">
    <button class="btn btn-light" @click="handleSub">-</button>
    <span>{{ goodObj.amount || 0 }}</span>
    <button class="btn btn-light" @click="handleAdd">+</button>
  </div>
</template>

<script lang="ts">
import type { good } from "@/constants/type";
import { defineComponent, reactive } from "vue";
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

    return { goodObj, handleAdd, handleSub };
  },
});
</script>

<style></style>
