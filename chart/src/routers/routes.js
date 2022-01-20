import Body from "../components/Body.vue";
import CauGiay from "../components/CauGiay.vue";
import HaDong from "../components/HaDong.vue";
import DongDa from "../components/DongDa.vue";
import TableCG from "../components/TableCG.vue";
import TableHD from "../components/TableHD.vue";
import TableDongDa from "../components/TableDongDa.vue";
export const routes = [
  { path: "/", name: "home", component: Body },
  {
    path: "/CauGiay",
    name: "caugiay",
    component: CauGiay,
  },
  {
    path: "/HaDong",
    name: "hadong",
    component: HaDong,
  },
  {
    path: "/DongDa",
    name: "dongda",
    component: DongDa,
  },
  {
    path: "/CauGiay-detail",
    name: "caugiayDetail",
    component: TableCG,
  },
  {
    path: "/HaDong-detail",
    name: "hadongDetail",
    component: TableHD,
  },
  {
    path: "/DongDa-detail",
    name: "dongdaDetail",
    component: TableDongDa,
  },
];
