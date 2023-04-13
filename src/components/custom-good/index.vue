<template>
  <div class="my-goods-item">
    <div class="left">
      <label class="custom-control-label" for="input">
        <img :src="good.cover" alt="" />
      </label>
    </div>
    <div class="right">
      <div class="top">{{ good.name }}</div>
      <div class="bottom">
        <div class="bottom-left">
          <span class="price">单价: ¥ {{ good.price }}</span>
          <span class="stock">剩余库存: {{ good.stock }}</span>
        </div>
        <div class="bottom-right">
          <custom-count :obj="good" />
        </div>
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

<style scoped>
.left {
  width: 140px;
  height: 140px;
  padding: 10px;
  margin-right: 20px;
}
img {
  width: 120px;
  height: 120px;
  border-radius: 8px;
}
.right {
  width: 100%;
  height: 140px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.top {
  font-size: 20px;
  font-weight: 600;
}
.bottom {
  display: flex;
  position: absolute;
  bottom: 10px;
  justify-content: space-between;
  align-items: center;
  width: 95%;
}
.bottom-left {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.margin-right {
  margin-right: 10px;
}
</style>
