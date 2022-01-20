<template>
  <el-main class="body-container p-4">
    <p>Bảng chỉ số TDS tại Hà Đông</p>
    <el-table
      :data="tableData"
      border
      height="83%"
      style="width: 100%; box-shadow: 1px 2px 5px 5px #bebebe"
    >
      <el-table-column prop="id" label="ID" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="tds" label="Giá trị TDS (PPM)" align="center">
      </el-table-column>
      <el-table-column prop="time" label="Thời gian" align="center">
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script>
import { fnMixins } from "../mixins/fnMixins";
import { tableMixins } from "../mixins/tableMixins";
export default {
  mixins: [tableMixins, fnMixins],
  methods: {
    fn_initTable() {
      let n = new Date("2020-12-31");
      for (let i = 1; i <= 365; i++) {
        let dateT = n.setDate(n.getDate() + 1);
        let o = {
          id: i,
          address: "Hà Đông",
          tds: this.getRandomInt(),
          time: this.fn_formatDate(dateT),
        };
        this.tableData.push(o);
      }
    },
  },
  created() {
    this.fn_initTable();
    this.loadingInstance.close();
  },
};
</script>