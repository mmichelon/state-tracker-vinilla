import Vue from 'vue'
import App from './App.vue'
import router from './router'


//Bootstrap
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


//Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcNofNjY-g_WvzDt57af3crea8egcL1rs",
    authDomain: "state-tracker-v2.firebaseapp.com",
    databaseURL: "https://state-tracker-v2-default-rtdb.firebaseio.com",
    projectId: "state-tracker-v2",
    storageBucket: "state-tracker-v2.appspot.com",
    messagingSenderId: "122837201227",
    appId: "1:122837201227:web:27a32743ce3f543e86b8ce"
};

firebase.initializeApp(firebaseConfig);

//Bootstrap
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
