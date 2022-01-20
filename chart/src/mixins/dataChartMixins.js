import { Loading } from "element-ui";

export const dataChartMixins = {
  data() {
    return {
      loading: false,
      loadingInstance: Loading.service({
        fullscreen: true,
        background: "rgba(0, 0, 0, 0.2)",
      }),
      dataFetch: [],
      data: null,
      options: null,
      gradient: "rgba(255, 0,0, 0.25)",
      gradient2: "rgba(0, 231, 255, 0.25)",
      mData: {
        listDate: [],
        listDataRd1: [],
        listDataRd2: [],
        listDateTime: [],
        listDataFetch: [],
      },
      countConfig: {
        startVal: 0,
        endVal: 0,
        timeDuration: 10000,
      },
      ruleForm: {
        date1: "",
        date2: "",
      },
      rules: {
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
      },
    };
  },
};
