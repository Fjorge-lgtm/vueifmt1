import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import CadastroCliente from './components/CadastroCliente.vue';
import Menu from './components/Menu';
import Principal from './components/Principal';


const routes = [

        {path: '/', component: App},
        {path: '/componente-outro', component: Menu},
        {path: '/cadastro-cliente', component: CadastroCliente},
        {path: '/principal', component: Principal},

    ];



const router = createRouter({
  history: createWebHistory(),
  routes,
  
});

export default router
