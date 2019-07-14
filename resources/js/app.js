/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
window.Vue.use(VueRouter)

import store from './store'
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('root-component', require('./components/RootComponent.vue').default);
// Vue.component('login-component', require('./components/LoginComponent.vue').default);
// Vue.component('register-component', require('./components/RegisterComponent.vue').default);
// Vue.component('dash-component', require('./components/DashComponent.vue').default);

import WelcomeComponent from './components/WelcomeComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import DashComponent from './components/DashComponent.vue';


const routes = [
    {
        path: '/',
        component:WelcomeComponent
    },
    {path: '/login', component: LoginComponent, name: 'login'},
    {path: '/register', component: RegisterComponent, name: 'register'},
    {path: '/dashboard', component: DashComponent, name: 'dash'},
]


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const router = new VueRouter({ routes })

const app = new Vue({ router,store }).$mount('#app')
// const app = new Vue({
//     el: '#app',
// });
