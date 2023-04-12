<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <label class="custom-control-label" for="input">
          <img
            src="http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">商品名称</div>
      <div class="bottom">
        <span class="price">单价: ¥ 100</span>
        <span class="stock">剩余库存: 0</span>
        <span> 数量组件 </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CustomGood",
});
</script>

<style></style>
