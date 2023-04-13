<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名" prop="consignee">
      <el-input v-model="form.consignee"></el-input>
    </el-form-item>
    <el-form-item label="昵称" prop="nickName">
      <el-input v-model="form.nickName"></el-input>
    </el-form-item>
    <el-form-item label="手机号码" prop="phone">
      <el-input v-model="form.phone">
        <el-select v-model="form.prefix"></el-select>
      </el-input>
    </el-form-item>
    <el-form-item label="收货地址" prop="address">
      <el-select v-model="form.province"></el-select>
      <el-select v-model="form.city"></el-select>
      <el-select v-model="form.discrict"></el-select>
      <el-input v-model="form.unit"></el-input>
    </el-form-item>
    <el-form-item label="选择商品" prop="address"> </el-form-item>
    <el-form-item size="large">
      <el-button>取消</el-button>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Input, Select, Form, FormItem, Button } from "element-ui";

export default defineComponent({
  name: "CustomForm",
  components: {
    [Input.name]: Input,
    [Select.name]: Select,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Button.name]: Button,
  },
  data() {
    const initialFormData = {
      consignee: "",
      nickName: "",
      phone: "",
      prefix: "",
      province: "",
      city: "",
      discrict: "",
      unit: "",
    };

    return {
      form: initialFormData,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
});
</script>

<style></style>
