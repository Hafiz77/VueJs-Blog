import Vue from 'vue'
import Vuetify from 'vuetify'
// import axios from 'axios'

Vue.use(Vuetify)

// import App from './App.vue'
import App from './App'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import "vue-material-design-icons/styles.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
