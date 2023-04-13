<template>
  <main>
    <header class="header fs-20">
      订单列表
      <RouterLink to="/create">
        <el-button type="button" class="btn btn-primary">新增订单</el-button>
      </RouterLink>
    </header>
    <div class="loading description" v-if="orders.length === 0">暂无订单</div>
    <custom-order v-for="order in orders" :key="order.id" :order="order" />
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
}

.description {
  margin-top: 360px;
  text-align: center;
}
</style>
