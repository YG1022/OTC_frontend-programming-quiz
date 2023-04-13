<template>
  <main>
    <header class="header fs-20">
      <p class="text">订单列表</p>
      <RouterLink to="/create">
        <el-button type="button" class="router-btn">新增订单</el-button>
      </RouterLink>
    </header>
    <div class="loading description" v-if="orders.length === 0">暂无订单</div>
    <custom-order
      class="order-card"
      v-for="order in orders"
      :key="order.id"
      :order="order"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { RouterLink } from "vue-router";
import CustomOrder from "@/components/custom-order/index.vue";
import { ordersStore } from "@/store/store";
import axios from "axios";

export default defineComponent({
  name: "OrderListPage",
  components: {
    RouterLink,
    CustomOrder,
  },
  computed: {
    orders() {
      return ordersStore.ordersList;
    },
  },

  setup() {
    onMounted(() => {
      axios.get("/api/orders").then((res) => {
        ordersStore.setOrdersList(res.data);
      });
    });

    return {};
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
  display: flex;
  padding: 0 20px;
}
.text {
  flex-grow: 1;
  text-align: center;
  padding: 0 0 0 90px;
}
.router-btn {
  background-color: var(--color-primary);
  color: var(--white);
}

.description {
  margin-top: 360px;
  text-align: center;
}

.order-card {
  margin: 30px 360px;
  background-color: var(--white);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  box-shadow: 0px 4px 6px 0px var(--color-shadow);
  border-radius: 10px;
  display: flex;
}
</style>
