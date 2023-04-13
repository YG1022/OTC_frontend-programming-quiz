<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <label class="custom-control-label" for="input">
          <img :src="good.cover" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ good.name }}</div>
      <div class="bottom">
        <span class="price">单价: ¥ {{ good.price }}</span>
        <span class="stock">剩余库存: {{ good.stock }}</span>
        <span>
          <custom-count :obj="good" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomCount from "@/components/custom-count/index.vue";
import type { good } from "@/constants/type";

export default defineComponent({
  name: "CustomGood",
  props: {
    good: {
      type: Object as () => good,
      required: true,
    },
  },
  components: {
    CustomCount,
  },
});
</script>

<style></style>
