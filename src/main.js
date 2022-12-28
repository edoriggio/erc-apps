import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import FlagIcon from 'vue-flag-icon'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(FlagIcon);

/* eslint-disable no-new */
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
