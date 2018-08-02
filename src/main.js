import Vue from 'vue'
import App from './App'

import './assets/sass/valtech.scss';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});
