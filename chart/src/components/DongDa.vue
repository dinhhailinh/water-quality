<template>
  <el-main class="body-container p-4">
    <el-row :gutter="25">
      <el-col :span="8">
        <div class="grid-content bg-purple box-container">
          <div>
            <p style="font-size: 18px">TDS hiện tại</p>
            <span style="font-size: 35px"
              >[
              <countTo
                :startVal="countConfig.startVal"
                :endVal="countConfig.endVal"
                :duration="countConfig.timeDuration"
              ></countTo>
              ] PPM</span
            >
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
    </b-row>
  </el-main>
</template>

<script>
import LineChart from "./LineChart";
import countTo from "vue-count-to";
import axios from "axios";
import { dataChartMixins } from "../mixins/dataChartMixins";
import { fnMixins } from "../mixins/fnMixins";
export default {
  components: {
    LineChart,
    countTo,
  },
  mixins: [dataChartMixins, fnMixins],
  methods: {
    fillData() {
      if (!this.listDate) {
        this.data = {
          labels: this.mData.listDateTime,
          datasets: [
            {
              label: "Đống Đa",
              borderColor: "lightgreen",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "lightgreen",
              backgroundColor: "rgba(25,135,84,0.25)",
              data: this.mData.listDataFetch,
            },
          ],
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
        };
      } else if (this.listDate) {
        this.data = {
          labels: this.listDate,
          datasets: [
            {
              label: "Đống Đa",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "#FC2525",
              backgroundColor: this.gradient,
              data: this.mData.listDataRd1,
            },
          ],
        };
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
        };
      }
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
        await this.fn_getListDataFetch();
      }
    },
    fn_getListDataFetch() {
      this.mData.listDateTime = this.dataFetch.map((item) => {
        return this.fn_formatDatetime(item.time);
      });
      this.mData.listDataFetch = this.dataFetch.map((item) => {
        return item.value;
      });
    },
  },
  created() {},
  async mounted() {
    await this.fn_getData();
    if (this.dataFetch) {
      this.countConfig.endVal = this.dataFetch[this.dataFetch.length - 1].value;
      this.loadingInstance.close();
    }
    await this.fillData();
  },
};
</script>

<style>
</style>