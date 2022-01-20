import { Loading } from "element-ui";

export const tableMixins = {
  data() {
    return {
      loadingInstance: Loading.service({
        fullscreen: true,
        background: "rgba(0, 0, 0, 0.2)",
      }),
      tableData: [],
      dataFetch: [],
      mData: {
        listDataFetch: [],
        listDateTime: [],
      },
    };
  },
};
