import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

//componentes
import Listar from './components/prueba/Listar';
import Otro from './components/prueba/Otro';
import Home from './components/home/Home';
import Registro_empresa from './components/registro_empresa/Registro_empresa';
import Vista_detallada  from './components/vista_detallada/Vista_detallada';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';

//Agregar bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Element
import { Button, Select, Option, Radio, RadioGroup,
         Notification } from 'element-ui';
import VeeValidate from 'vee-validate';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BootstrapVue);
Vue.use(Router)
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
// Vue.component(Alert.name, Alert);
// Vue.component(Message.name, Message);
Vue.prototype.$notify = Notification;
Vue.use(VeeValidate);

// Vue.use(ElementUI);

var router = new Router({
  routes: [
    {
      path: '/ruta',
      component: Listar
    },
    {
      path: '/otro',
      component: Otro
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/empresa/registro',
      component: Registro_empresa
    },
    {
      path: '/empresa/:nombre',
      component: Vista_detallada,
      props: true
    },
    {
      path: '/',
      component: Login,
    },
    {
      path: '/registration',
      component: Registration,
    }
  ]
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

