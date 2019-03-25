import Vue from 'vue';
import Router from 'vue-router';


import Listar from '../components/prueba/Listar'
import Home from '../components/home/Home'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/listar', name: 'Listar',component: Listar}
    ]
});