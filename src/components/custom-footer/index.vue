<template>
  <div class="my-footer">
    <div class="total-amount">总计:¥ 100</div>
    <button type="button" class="footer-btn btn btn-primary">取消</button>
    <button type="button" class="footer-btn btn btn-primary">提交</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomFooter",
});
</script>

<style></style>
