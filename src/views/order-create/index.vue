<template>
  <main>
    <h1>Order Create</h1>
    <div class="goods">
      <custom-good v-for="good in goods" :key="good.id" :good="good" />
    </div>
    <div class="footer">
      <custom-footer />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import CustomGood from "@/components/custom-good/index.vue";
import CustomFooter from "@/components/custom-footer/index.vue";
import { goodsStore } from "@/store/store";
import type { good } from "@/constants/type";

const goodData = (data: good[]) => {
  return data.map((item) => {
    return {
      ...item,
      amount: 0,
    };
  });
};

export default defineComponent({
  name: "OrderCreatePage",
  components: {
    CustomGood,
    CustomFooter,
  },

  setup() {
    onMounted(() => {
      fetch("/api/goods", { method: "GET" })
        .then((res) => res.json())
        .then((data) => (goodsStore.goodsList = goodData(data)));
    });

    return {
      goods: goodsStore.goodsList,
    };
  },
});
</script>

<style scoped></style>
