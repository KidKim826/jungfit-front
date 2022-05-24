import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

<<<<<<< HEAD
=======
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

>>>>>>> 2e34acd5e80913319d464c53a8de9d441495837f
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
<<<<<<< HEAD
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
=======
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

>>>>>>> 2e34acd5e80913319d464c53a8de9d441495837f
Vue.config.productionTip = false

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')