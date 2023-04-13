<template>
  <main>
    <header class="header fs-20">订货信息填写</header>
    <div class="form">
      <custom-form ref="myForm" />
    </div>
    <div class="goods">
      <custom-good v-for="good in goods" :key="good.id" :good="good" />
    </div>
    <div class="footer">
      <custom-footer :goodsArray="goods" />
    </div>
    <div class="btn-content">
      <button @click="cancelOrder">取消</button>
      <button @click="submitForm">提交</button>
    </div>
    <el-dialog
      title="确认取消订单"
      :visible.sync="showConfirmDialog"
      width="30%"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <p>取消将不会保存所填写内容，并会返回首页</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showConfirmDialog = false">取消</el-button>
        <el-button type="primary" @click="confirmCancelOrder">确认</el-button>
      </span>
    </el-dialog>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import axios from "axios";
import CustomForm from "@/components/custom-form/index.vue";
import CustomGood from "@/components/custom-good/index.vue";
import CustomFooter from "@/components/custom-footer/index.vue";
import { goodsStore } from "@/store/store";
import type { good } from "@/constants/type";
import { calTotalPrice } from "@/constants/utils";
import { Dialog, Button } from "element-ui";

const goodData = (data: good[]) => {
  return data.map((item) => {
    return {
      ...item,
      amount: 0,
    };
  });
};

export default defineComponent({
  name: "OrderCreatePage",
  components: {
    CustomForm,
    CustomGood,
    CustomFooter,
    [Dialog.name]: Dialog,
    [Button.name]: Button,
  },
  data() {
    return {
      showConfirmDialog: false,
    };
  },
  methods: {
    cancelOrder() {
      this.showConfirmDialog = true;
    },
    confirmCancelOrder() {
      this.showConfirmDialog = false;
      this.$router.push("/");
    },
    submitForm() {
      const amountCheck = calTotalPrice(this.goods) === 0;
      if (amountCheck) {
        alert("请至少选择一件商品");
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formComponent = this.$refs.myForm as any;
      const formData = formComponent.$refs.form;
      formData.validate((valid: boolean) => {
        if (valid) {
          const orderData = {
            ...formData.model,
            goods: this.goods.filter((item: good) => item.amount > 0),
            totalPrice: calTotalPrice(this.goods),
          };
          axios.post("/api/orders", orderData).then((res) => {
            if (res.status === 201) {
              alert("提交成功");
              localStorage.removeItem("goods");
              this.$router.push("/orders");
            }
          });
        } else {
          alert("请填写完整信息");
        }
      });
    },
  },
  computed: {
    goods() {
      return goodsStore.goodsList;
    },
  },

  setup() {
    onMounted(() => {
      axios.get("/api/goods").then((res) => {
        if (res.status === 200) {
          goodsStore.setGoodsList(goodData(res.data));
        }
      });
    });
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
</style>
