<template>
  <div class="my-footer">
    <div class="total-amount">总计:¥ {{ allPrice.toFixed(2) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { good } from "@/constants/type";
import { calTotalPrice } from "@/constants/utils";

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
      return calTotalPrice(this.goodsArray);
    },
  },
  created() {
    this.allPrice;
  },
});
</script>

<style scoped>
.total-amount {
  font-size: var(--fs-20);
  font-weight: 800;
  color: var(--color-primary);
}
</style>
