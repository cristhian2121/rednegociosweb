import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';


//vistas
import Login from './views/login/Login';

import Listar from './components/prueba/Listar';
import Otro from './components/prueba/Otro';
import Home from './components/home/Home';
import Registro_empresa from './components/registro_empresa/Registro_empresa';
import Vista_detallada  from './components/vista_detallada/Vista_detallada';
import Registration from './components/registration/Registration';
import Edit_profile from './components/editation/Editation'

//Agregar bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Element
import { Button, Select, Option, Radio, RadioGroup, Input, Container,
         Notification, upload, dialog,
         Checkbox,
         DatePicker} from 'element-ui';
import VeeValidate from 'vee-validate';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(BootstrapVue);
Vue.use(Router)
Vue.config.lang = 'en';
Vue.component(Input.name, Input);
Vue.component(Container.name, Container);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Checkbox.name, Checkbox);
Vue.component(DatePicker.name, DatePicker);
Vue.component(upload.name, upload);
Vue.component(dialog.name, dialog);
//Vue.component(date.name, select);
// Vue.component(Alert.name, Alert);
// Vue.component(Message.name, Message);
Vue.prototype.$notify = Notification;
Vue.use(VeeValidate);

// Vue.use(ElementUI);

var router = new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/registration',
      component: Registration,
    },
    {
      path: '/registration/business',
      component: Registro_empresa
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/:nombre',
      component: Vista_detallada,
      props: true
    },
    {
      path: '/profile/edit/:empresa',
      component: Edit_profile,
      props: true
    },
    {
      path: '/ruta',
      component: Listar
    },
    {
      path: '/otro',
      component: Otro
    }
  ]
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

