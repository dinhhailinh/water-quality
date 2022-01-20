<template>
  <el-container>
    <Header />
    <el-container>
      <SideBar />
      <el-container class="body">
        <router-view />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    SideBar,
    Header,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style>
.body {
  position: absolute;
  top: 60px;
  left: 210px;
  margin: 10px;
  width: calc(100vw - 230px);
  border-radius: 5px;
  box-shadow: 1px 2px 5px 5px #d3dce6;
}
.body-container {
  height: calc(100vh - 80px);
}
.box-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 35px 20px;
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #fff;
  box-shadow: 1px 2px 5px 5px #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  background-color: #f9fafc;
}
.small {
  max-width: 600px;
  margin: 150px auto;
}
.bg-gradient {
  background-image: linear-gradient(lightblue, #fff);
}
.fcenter {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}
.icon-info {
  width: 15px;
  height: 15px;
  box-shadow: 1px 1px 4px 1px #545454e3;
  margin-right: 5px;
}
.icon-blue {
  background-color: blue;
}
.icon-green {
  background-color: green;
}
.icon-yellow {
  background-color: yellow;
}
.icon-red {
  background-color: red;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>