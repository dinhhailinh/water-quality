export const fnMixins = {
  methods: {
    fn_getListDate(startDate, endDate, steps = 1) {
      const dateArray = [];
      let currentDate = new Date(startDate);
      let dateLimit = new Date(endDate);
      while (currentDate <= dateLimit) {
        dateArray.push(new Date(currentDate));
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
      }
      return dateArray;
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
    fn_formatDatetime(m) {
      m = new Date(m);
      const dateTimeString =
        m.getFullYear() +
        "/" +
        ("0" + (m.getMonth() + 1)).slice(-2) +
        "/" +
        ("0" + m.getDate()).slice(-2) +
        " " +
        ("0" + m.getHours()).slice(-2) +
        ":" +
        ("0" + m.getMinutes()).slice(-2) +
        ":" +
        ("0" + m.getSeconds()).slice(-2);
      return dateTimeString;
    },
    fn_getDataFilter() {
      const startDate = this.ruleForm.date1.getTime();
      const endDate = new Date(this.ruleForm.date2).setHours(23, 59, 59);
      this.mData.listDateTime = [];
      this.mData.listDataFetch = [];
      this.dataFetch.forEach((item) => {
        const date = new Date(item.time).getTime();
        if (date >= startDate && date <= endDate) {
          item.time = this.fn_formatDatetime(item.time);
          this.mData.listDateTime.push(item.time);
          this.mData.listDataFetch.push(item.value);
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.fn_getDataFilter();
          await this.fillData();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    fn_getDataRd() {
      this.mData.listDataRd1 = [];
      for (let i = 0; i < this.listDate.length; i++) {
        let num1 = this.getRandomInt();
        let num2 = this.getRandomInt();
        this.mData.listDataRd1.push(num1);
        this.mData.listDataRd2.push(num2);
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (150 - 5 + 1) + 5);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
