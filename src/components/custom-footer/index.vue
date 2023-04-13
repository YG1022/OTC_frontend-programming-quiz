<template>
  <div class="my-footer">
    <div class="total-amount">总计:¥ {{ allPrice.toFixed(2) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { good } from "@/constants/type";

export default defineComponent({
  name: "CustomFooter",
  props: {
    goodsArray: {
      type: Array as () => Array<good>,
      required: true,
    },
  },
  computed: {
    allPrice() {
      return this.goodsArray.reduce((prev, cur) => {
        return prev + cur.amount * cur.price;
      }, 0);
    },
  },
  created() {
    this.allPrice;
  },
});
</script>

<style></style>
