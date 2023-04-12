<template>
  <div class="my-counter">
    <button class="btn btn-light">-</button>
    <div class="amount">商品数量</div>
    <button class="btn btn-light">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomCount",
});
</script>

<style></style>
