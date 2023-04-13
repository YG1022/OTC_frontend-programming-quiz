<template>
  <div class="my-footer">
    <div class="total-amount">总计:¥ {{ allPrice.toFixed(2) }}</div>
    <button type="button" class="footer-btn btn btn-primary">取消</button>
    <button type="button" class="footer-btn btn btn-primary">提交</button>
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
