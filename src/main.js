// imports
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

import VueMaterial from 'vue-material';
import router from './router';
import App from './App.vue';
import Vue from 'vue';

// configs
Vue.config.productionTip = false;
library.add(fas);

Vue.component('fontawesome-icon', FontAwesomeIcon);
Vue.use(VueMaterial);

// app instantiation
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
