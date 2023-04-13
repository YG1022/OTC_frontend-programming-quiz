<template>
  <div class="my-orders-item">
    <div class="left">
      <label class="custom-control-label" for="input">
        <img :src="order.goods[0].cover" alt="" />
      </label>
    </div>
    <div class="right">
      <div class="top">收货人: {{ order.consignee }}</div>
      <div class="top">手机号: {{ order.phone }}</div>
      <div class="top">
        收货地址: {{ order.province }}, {{ order.city }}, {{ order.district }},
        {{ order.address }}
      </div>
      <div class="bottom">
        <p class="price">¥ {{ order.totalPrice.toFixed(2) }}</p>
        <el-button class="del-button" @click="deleteOrder">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { order } from "@/constants/type";
import { defineComponent } from "vue";
import { ordersStore } from "@/store/store";
import axios from "axios";

export default defineComponent({
  name: "CustomOrder",
  props: {
    order: {
      type: Object as () => order,
      required: true,
    },
  },
  methods: {
    deleteOrder() {
      ordersStore.deleteOrder(this.order.id);
      axios.delete(`/api/orders/${this.order.id}`);
    },
  },
});
</script>

<style scoped>
.left {
  width: 220px;
  height: 220px;
  padding: 10px;
  margin-right: 20px;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 8px;
}
.right {
  width: 100%;
  height: 220px;
  padding: 10px;
  position: relative;
}
.top {
  font-size: 20px;
  margin-bottom: 10px;
}
.bottom {
  display: flex;
  position: absolute;
  bottom: 10px;
  width: 95%;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: var(--fs-20);
  font-weight: 700;
  color: var(--color-primary);
}
.del-button {
  color: var(--white);
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}
</style>
