<template>
  <el-main class="body-container p-4">
    <p>Bảng chỉ số TDS tại Đống Đa</p>
    <el-table
      :data="tableData"
      border
      height="83%"
      style="width: 100%; box-shadow: 1px 2px 5px 5px #bebebe"
    >
      <el-table-column prop="" label="ID" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="location"
        label="Address"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="value" label="Giá trị TDS (PPM)" align="center">
      </el-table-column>
      <el-table-column prop="time" label="Thời gian" align="center">
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script>
import axios from "axios";
import { fnMixins } from "../mixins/fnMixins";
import { tableMixins } from "../mixins/tableMixins";
export default {
  mixins: [tableMixins, fnMixins],
  methods: {
    fn_initTable() {
      this.tableData = this.dataFetch;
    },
    async fn_getData() {
      await axios
        .get(`https://chatluongnuoc.herokuapp.com/api/tds/đống đa`)
        .then((response) => {
          this.dataFetch = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
      if (this.dataFetch) {
        this.dataFetch = await this.fn_changeData(this.dataFetch);
      }
    },
    fn_changeData(resData) {
      resData.forEach((item) => {
        if (item.time) {
          item.time = this.fn_formatDatetime(item.time);
        }
        if (item.location == "đống đa") {
          item.location = "Đống Đa";
        }
      });
      return resData;
    },
  },
  async created() {
    await this.fn_getData();
    if (this.dataFetch) {
      this.loadingInstance.close();
      await this.fn_initTable();
    }
  },
};
</script>
<style>
</style>