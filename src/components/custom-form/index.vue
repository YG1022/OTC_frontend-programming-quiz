<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item class="consignee-content" label="姓名" prop="consignee">
      <el-input class="consignee" v-model="form.consignee"></el-input>
    </el-form-item>
    <el-form-item class="nick-name-content" label="昵称" prop="nickName">
      <el-input class="nick-name" v-model="form.nickName"></el-input>
    </el-form-item>
    <el-form-item class="phone-content" label="手机号码" prop="phone">
      <el-select class="prefix" v-model="form.prefix">
        <el-option v-for="prefix in prefixes" :value="prefix" :key="prefix">
          {{ prefix }}
        </el-option>
      </el-select>
      <el-input class="phone" type="number" v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item class="address-content" label="收货地址" prop="address">
      <el-select
        class="province"
        v-model="form.province"
        @change="updateCities"
      >
        <el-option
          v-for="province in provinces"
          :value="province"
          :key="province"
        >
          {{ province }}
        </el-option>
      </el-select>
      <el-select class="city" v-model="form.city" @change="updateDistricts">
        <el-option v-for="city in cities" :value="city" :key="city">
          {{ city }}
        </el-option>
      </el-select>
      <el-select class="district" v-model="form.discrict">
        <el-option
          v-for="district in districts"
          :value="district"
          :key="district"
        >
          {{ district }}
        </el-option>
      </el-select>
      <el-input
        class="address"
        type="textarea"
        v-model="form.address"
      ></el-input>
    </el-form-item>
    <label class="label">选择商品</label>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomForm",
  data() {
    const initialFormData = {
      consignee: "",
      nickName: "",
      phone: "",
      prefix: "",
      province: "",
      city: "",
      discrict: "",
      address: "",
    };

    return {
      form: initialFormData,
      rules: {
        consignee: [{ required: true, message: "请填写姓名", trigger: "blur" }],
        phone: [{ required: true, message: "请填写手机号码", trigger: "blur" }],
        address: [
          { required: true, message: "请填写收货地址", trigger: "blur" },
        ],
      },
      prefixes: ["+86", "+852", "+853", "+886"],
      provinces: ["Province A", "Province B", "Province C"],
      cities: [] as string[],
      districts: [] as string[],
    };
  },
  methods: {
    updateCities() {
      if (this.form.province === "Province A") {
        this.cities = ["City A1", "City A2", "City A3"];
      } else if (this.form.province === "Province B") {
        this.cities = ["City B1", "City B2", "City B3"];
      } else if (this.form.province === "Province C") {
        this.cities = ["City C1", "City C2", "City C3"];
      } else {
        this.cities = [];
      }
      this.form.city = "";
      this.form.discrict = "";
      this.districts = [];
    },
    updateDistricts() {
      if (this.form.city === "City A1") {
        this.districts = ["District A1-1", "District A1-2", "District A1-3"];
      } else if (this.form.city === "City A2") {
        this.districts = ["District A2-1", "District A2-2", "District A2-3"];
      } else if (this.form.city === "City A3") {
        this.districts = ["District A3-1", "District A3-2", "District A3-3"];
      } else if (this.form.city === "City B1") {
        this.districts = ["District B1-1", "District B1-2", "District B1-3"];
      } else if (this.form.city === "City B2") {
        this.districts = ["District B2-1", "District B2-2", "District B2-3"];
      } else if (this.form.city === "City B3") {
        this.districts = ["District B3-1", "District B3-2", "District B3-3"];
      } else if (this.form.city === "City C1") {
        this.districts = ["District C1-1", "District C1-2", "District C1-3"];
      } else if (this.form.city === "City C2") {
        this.districts = ["District C2-1", "District C2-2", "District C2-3"];
      } else if (this.form.city === "City C3") {
        this.districts = ["District C3-1", "District C3-2", "District C3-3"];
      } else {
        this.districts = [];
      }
      this.form.discrict = "";
    },
  },
});
</script>

<style scoped>
.prefix {
  width: 15%;
}
.phone {
  width: 85%;
}
.province {
  width: 33%;
}
.city {
  width: 33%;
}
.district {
  width: 33%;
}
.address {
  margin-top: 12px;
}
.label {
  margin: 20px 0 0 10px;
  font-size: 14px;
}
</style>
