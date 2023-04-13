<template>
  <main>
    <header class="header fs-20">订货信息填写</header>
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
import axios from "axios";
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
      axios.get("/api/goods").then((res) => {
        if (res.status === 200) {
          goodsStore.setGoodsList(goodData(res.data));
        }
      });
    });

    return {
      goods: localStorage.getItem("goods")
        ? JSON.parse(localStorage.getItem("goods") || "")
        : goodsStore.goodsList,
    };
  },
});
</script>

<style scoped>
.header {
  height: 64px;
  line-height: 64px;
  text-align: center;
  background-color: var(--white);
  box-shadow: 0 4px 6px 0 var(--color-shadow);
}
</style>
