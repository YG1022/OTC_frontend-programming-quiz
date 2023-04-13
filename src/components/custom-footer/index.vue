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
    },
  },
  created() {
    this.allPrice;
  },
});
</script>

<style></style>
