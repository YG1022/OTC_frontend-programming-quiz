<template>
  <main>
    <h1>Order Create</h1>
    <div class="goods">
      <custom-good v-for="good in goods" :key="good.id" :good="good" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CustomGood from "@/components/custom-good/index.vue";

interface good {
  id: string;
  name: string;
  description: string;
  cover: string;
  stock: number;
  price: number;
}

export default defineComponent({
  name: "OrderCreatePage",
  components: {
    CustomGood,
  },

  setup() {
    const goods = ref<good[]>([]);

    onMounted(() => {
      fetch("/api/goods", { method: "GET" })
        .then((res) => res.json())
        .then((data) => (goods.value = data));
    });

    return { goods };
  },
});
</script>

<style scoped></style>
