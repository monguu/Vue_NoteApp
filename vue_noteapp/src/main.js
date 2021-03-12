import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index.js";
import store from "@/store/index.js";
import { formatData } from "@/utils/filters.js";
Vue.config.productionTip = false;
// Vue.use(VueRouter);

Vue.filter("formatData", formatData);
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
