<template>
  <main>
    <header class="header fs-20">订货信息填写</header>
    <div class="form-content">
      <div class="form">
        <custom-form ref="myForm" />
      </div>
      <div class="goods">
        <custom-good
          class="good-cards"
          v-for="good in goods"
          :key="good.id"
          :good="good"
        />
      </div>
      <div class="footer-content">
        <custom-footer :goodsArray="goods" />
        <div class="btn-content">
          <el-button @click="cancelOrder">取消</el-button>
          <el-button class="submit-btn" @click="submitForm">提交</el-button>
        </div>
      </div>
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
          const errorFields = formData.fields.filter(
            (item: { validateState: string }) => item.validateState === "error"
          );
          if (errorFields.length === 1) {
            this.$message.error("请填写所有必填项");
          } else {
            console.log(errorFields);

            this.$message.error("请完善订单信息");
          }
        }
      });
    },
  },
  computed: {
    goods() {
      return localStorage.getItem("goods")
        ? JSON.parse(localStorage.getItem("goods") as string)
        : goodsStore.goodsList;
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
.form-content {
  margin: 20px 300px;
  padding: 36px 0 0;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 var(--color-shadow);
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100%;
}
.form {
  padding: 0 300px;
  flex: 1;
}
.goods {
  padding: 0 300px;
  flex: 1;
  overflow-y: auto;
}
.good-cards {
  margin: 20px;
  padding: 0;
  background-color: var(--white);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  box-shadow: 0px 4px 6px 0px var(--color-shadow);
  border-radius: 10px;
  display: flex;
}
.footer-content {
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 6px 0px var(--color-shadow);
  border-top: 1px solid var(--color-border);
}
.submit-btn {
  background-color: var(--color-primary);
  color: var(--white);
}
</style>
