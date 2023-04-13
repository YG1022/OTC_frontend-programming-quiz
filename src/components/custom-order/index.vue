<template>
  <div class="my-orders-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <label class="custom-control-label" for="input">
          <img :src="order.goods[0].cover" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">收货人: {{ order.consignee }}</div>
      <div class="top">手机号: {{ order.phone }}</div>
      <div class="top">
        收货地址: {{ order.province }}, {{ order.city }}, {{ order.district }},
        {{ order.address }}
      </div>
      <div class="bottom">
        <span class="price">¥ {{ order.totalPrice }}</span>
        <button @click="deleteOrder">删除</button>
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

<style></style>
