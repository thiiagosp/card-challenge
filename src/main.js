import Vue from 'vue';
import App from './App';

import './assets/sass/valtech.scss';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});
