<template>
  <div class="my-counter">
    <el-button class="btn btn-light" @click="handleSub">-</el-button>
    <el-input type="number" v-model.number="goodObj.amount" />
    <el-button class="btn btn-light" @click="handleAdd">+</el-button>
  </div>
</template>

<script lang="ts">
import type { good } from "@/constants/type";
import { defineComponent } from "vue";
import { goodsStore } from "@/store/store";

export default defineComponent({
  name: "CustomCount",
  props: {
    obj: {
      type: Object as () => good,
      required: true,
    },
  },
  data() {
    return {
      goodObj: this.obj,
      maxQuantity: this.obj.stock,
    };
  },
  methods: {
    handleAdd() {
      if (this.goodObj.amount < this.goodObj.stock) {
        this.goodObj.amount++;
        goodsStore.updateGood(this.goodObj);
      }
    },
    handleSub() {
      if (this.goodObj.amount > 0) {
        this.goodObj.amount--;
        goodsStore.updateGood(this.goodObj);
      }
    },
  },
  watch: {
    goodObj: {
      handler(newValue) {
        if (newValue.amount > this.maxQuantity) {
          this.goodObj.amount = this.maxQuantity;
        } else if (newValue.amount < 0) {
          this.goodObj.amount = 0;
        }
      },
      deep: true,
    },
  },
  beforeDestroy() {
    this.goodObj.amount = 0;
    goodsStore.updateGood(this.goodObj);
  },
});
</script>

<style></style>
