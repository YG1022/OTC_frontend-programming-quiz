<template>
  <div class="my-counter">
    <el-button class="btn btn-light" @click="handleSub">-</el-button>
    <el-input class="count" type="number" v-model.number="goodObj.amount" />
    <el-button class="btn btn-light" @click="handleAdd">+</el-button>
  </div>
</template>

<script lang="ts">
import type { good } from "@/constants/type";
import { defineComponent, onBeforeUnmount, ref, watch } from "vue";
import { goodsStore } from "@/store/store";

export default defineComponent({
  props: {
    obj: {
      type: Object as () => good,
      required: true,
    },
  },
  setup(props) {
    const goodObj = ref(props.obj);
    const maxQuantity = ref(props.obj.stock);
    const handleAdd = () => {
      if (goodObj.value.amount < goodObj.value.stock) {
        goodObj.value.amount++;
        goodsStore.updateGood(goodObj.value);
      }
    };
    const handleSub = () => {
      if (goodObj.value.amount > 0) {
        goodObj.value.amount--;
        goodsStore.updateGood(goodObj.value);
      }
    };
    watch(
      goodObj,
      (newValue) => {
        if (newValue.amount > maxQuantity.value) {
          goodObj.value.amount = maxQuantity.value;
        } else if (newValue.amount < 0) {
          goodObj.value.amount = 0;
        }
      },
      { deep: true }
    );
    onBeforeUnmount(() => {
      goodObj.value.amount = 0;
      goodsStore.updateGood(goodObj.value);
    });
    return {
      goodObj,
      handleAdd,
      handleSub,
    };
  },
});
</script>

<style scoped>
.btn {
  width: 40px;
  height: 40px;
  padding: 0;
  outline: none;
  cursor: pointer;
}

.count {
  width: 80px;
  height: 40px;
  padding: 0;
  margin: 0 5px;
  outline: none;
  text-align: center;
}
</style>
