import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {rtdbPlugin} from 'vuefire';
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import VuetifyToast from 'vuetify-toast-snackbar'


Vue.config.productionTip = false
Vue.use(rtdbPlugin);
Vue.use(VueNoty)


Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  icon: 'info',
  iconColor: '', // default
  classes: [
    'body-2'
  ],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: '', // default
  closeIcon: 'close', // default
  closeColor: '', // default
  slot: [], //default
  shorts: {
    custom: {
      color: 'purple'
    }
  },
  property: '$toast' // default
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
