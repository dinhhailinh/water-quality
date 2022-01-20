<template>
  <el-main
    class="body-container p-4"
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: linear-gradient(352deg, lightblue, #fff);
    "
  >
    <h1>Welcome to Water Quality Moniter !!!</h1>
    <img src="../../../pngegg.png" alt="picture" style="width: 40%" />
    <!-- <el-row :gutter="25">
      <el-col :span="8">
        <div class="grid-content bg-purple box-container">
          <div>
            <p style="font-size: 18px">TDS hiện tại</p>
            <span style="font-size: 35px">[ ... ] PPM</span>
          </div>
          <div>
            <i class="el-icon-data-line" style="font-size: xxx-large"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <ul style="list-style: none">
          <li class="fcenter mb-1">
            <div class="icon-info icon-blue"></div>
            <p class="mb-0">0-50: Nước lý tưởng</p>
          </li>
          <li class="fcenter mb-1">
            <div class="icon-info icon-green"></div>
            <p class="mb-0">50-175: Nước sạch</p>
          </li>
          <li class="fcenter mb-1">
            <div class="icon-info icon-yellow"></div>
            <p class="mb-0">175-400: Nước dùng sinh hoạt</p>
          </li>
          <li class="fcenter mb-1">
            <div class="icon-info icon-red"></div>
            <p class="mb-0">>= 400: Nước ô nhiễm, không sử dụng</p>
          </li>
        </ul>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple p-1">
          <p align="center">Thống kê dữ liệu</p>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
          >
            <b-row>
              <b-col md="9">
                <el-form-item
                  label="Từ ngày"
                  style="text-align: center; font-size: 18px"
                  prop="date1"
                >
                  <el-date-picker
                    type="date"
                    placeholder="Pick a date"
                    v-model="ruleForm.date1"
                    style="width: 100%"
                    format="dd-MM-yyyy"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="đến ngày" prop="date2">
                  <el-date-picker
                    type="date"
                    placeholder="Pick a date"
                    v-model="ruleForm.date2"
                    style="width: 100%"
                    format="dd-MM-yyyy"
                  ></el-date-picker>
                </el-form-item>
              </b-col>
              <b-col class="md-4 mt-4">
                <el-button
                  type="primary"
                  size="small"
                  @click="submitForm('ruleForm')"
                  >Search</el-button
                >
              </b-col>
            </b-row>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <b-row class="mt-4">
      <div class="grid-content bg-purple">
        <line-chart
          id="myChart"
          :chart-data="data"
          :options="options"
        ></line-chart>
      </div>
    </b-row> -->
  </el-main>
</template>
<script>
// import LineChart from "../components/LineChart";
// import countTo from "vue-count-to";
import { dataChartMixins } from "../mixins/dataChartMixins";
export default {
  components: {
    // LineChart,
    // countTo,
  },
  mixins: [dataChartMixins],
  data() {
    return {
      countConfig: {
        startVal: 0,
        endVal: "...",
      },
    };
  },
  methods: {
    fn_getListDate(startDate, endDate, steps = 1) {
      const dateArray = [];
      let currentDate = new Date(startDate);
      let dateLimit = new Date(endDate);
      while (currentDate <= dateLimit) {
        dateArray.push(new Date(currentDate));
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
      }
      return dateArray;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.listDate = this.fn_getListDate(
            this.ruleForm.date1,
            this.ruleForm.date2
          );
          this.listDate = this.listDate.map((item) => {
            return this.fn_formatDate(item);
          });
          this.fn_getDataRd();
          this.fillData();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    fn_formatDate(date) {
      date = new Date(date);
      date.setDate(date.getDate() + 1);
      const dateString =
        date.getUTCFullYear() +
        "/" +
        ("0" + (date.getUTCMonth() + 1)).slice(-2) +
        "/" +
        ("0" + date.getUTCDate()).slice(-2);
      return dateString;
    },
    fn_getDataRd() {
      this.mData.listDataRd1 = [];
      this.mData.listDataRd2 = [];
      for (let i = 0; i < this.listDate.length; i++) {
        let num1 = this.getRandomInt();
        let num2 = this.getRandomInt();
        this.mData.listDataRd1.push(num1);
        this.mData.listDataRd2.push(num2);
      }
    },
    fillData() {
      if (!this.listDate) {
        this.data = {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Cầu Giấy",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "#FC2525",
              backgroundColor: this.gradient,
              data: [40, 39, 10, 40, 39, 80, 40],
            },
            {
              label: "Hà Đông",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "#05CBE1",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [60, 55, 32, 10, 2, 12, 53],
            },
          ],
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
        };
      } else {
        this.data = {
          labels: this.listDate,
          datasets: [
            {
              label: "Cầu Giấy",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "#FC2525",
              backgroundColor: this.gradient,
              data: this.mData.listDataRd1,
            },
            {
              label: "Hà Đông",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "#05CBE1",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: this.mData.listDataRd2,
            },
          ],
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
        };
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (150 - 5 + 1) + 5);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    // this.endVal = this.getRandomInt();
  },
  mounted() {
    this.loadingInstance.close();
    this.fillData();
  },
};
</script>