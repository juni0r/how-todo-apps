import Vue from "vue";
import Buefy from "buefy";
import "mdi/css/materialdesignicons.css";
import App from "./App.vue";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
