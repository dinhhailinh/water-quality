<template>
  <el-container
    style="
      background-image: linear-gradient(#f1f8fb, #fff);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    "
    class="w-100"
  >
    <el-header
      style="
        text-align: right;
        font-size: 12px;
        background-image: linear-gradient(lightblue, #fff);
      "
    >
      <el-row :gutter="20">
        <el-col :span="16">
          <el-header
            style="
              text-align: left;
              font-size: 20px;
              text-tranform: Uppercase;
              background-image: linear-gradient(lightblue, #fff);
            "
            >Giám sát chất lượng nước sinh hoạt</el-header
          >
        </el-col>
        <el-col :span="8">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><router-link to="/">Home</router-link></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <span>Cristiano Tom</span>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>

<style>
</style>