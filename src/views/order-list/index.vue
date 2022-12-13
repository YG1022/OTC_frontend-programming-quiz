<template>
  <main>
    <header class="header fs-20">订单列表</header>
    <p class="description fs-20">请在此项目基础上完成 README 中的任务</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderListPage",
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
