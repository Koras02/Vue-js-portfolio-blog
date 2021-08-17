/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueTyperPlugin from "vue-typer";
// import { VueTyper } from 'vue-typer';
import VuescrollTo from 'vue-scrollto';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.css";
 
 
 
library.add(faUserSecret);


Vue.component('font-awesome-icon', FontAwesomeIcon);

import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueTyperPlugin);
Vue.use(VuescrollTo);
 
 
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
