<template>
  <el-aside
    class="border"
    style="
      position: fixed;
      top: 55px;
      left: 0;
      background-image: linear-gradient(-180deg, lightblue 30%, #fff 70%);
      width: 210px;
      height: 100vh;
      overflow-x: hidden;
      z-index: 98;
    "
  >
    <el-menu
      default-active="1"
      :default-openeds="['1', '1-1']"
      class="el-menu-vertical-demo"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title"
          ><i class="el-icon-location-information"></i>Giám sát</template
        >
        <el-menu-item-group>
          <!-- <el-menu-item index="1-1" :route="{ name: 'home' }">
            Tổng quan</el-menu-item
          > -->
          <el-menu-item index="1-1" :route="{ name: 'caugiay' }">
            Cầu Giấy</el-menu-item
          >
          <el-menu-item index="1-2" :route="{ name: 'dongda' }"
            >Đống Đa</el-menu-item
          >
          <!-- <el-menu-item index="1-3" :route="{ name: 'hadong' }"
            >Hà Đông</el-menu-item
          > -->
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-s-data"></i>Thống kê</template>
        <el-menu-item-group>
          <el-menu-item index="2-1" :route="{ name: 'caugiayDetail' }"
            >Thống kê tại Cầu Giấy</el-menu-item
          >
          <el-menu-item index="2-2" :route="{ name: 'dongdaDetail' }"
            >Thống kê tại Đống Đa</el-menu-item
          >
          <!-- <el-menu-item index="2-3" :route="{ name: 'hadongDetail' }"
            >Thống kê tại Hà Đông</el-menu-item
          > -->
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-setting"></i>Chức năng</template
        >
        <!-- <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo() {
      this.router.push({ name: "caugiay" });
    },
  },
};
</script>
<style scoped>
.el-aside:hover::-webkit-scrollbar {
  display: block;
}
::-webkit-scrollbar {
  width: 10px;
  display: none;
}
</style>