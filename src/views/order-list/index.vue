<template>
  <main>
    <header class="header fs-20">
      订单列表
      <RouterLink to="/create">
        <button type="button" class="btn btn-primary">新增订单</button>
      </RouterLink>
    </header>
    <p class="description fs-20">请在此项目基础上完成 README 中的任务</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "OrderListPage",
  components: { RouterLink },
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
