import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import AdicionarAlunoPage from './components/AdicionarAlunoPage.vue';
import CadastroTccPage from './components/CadastroTccPage.vue'; 

// Definindo as rotas
const routes = [
  { path: '/', component: AdicionarAlunoPage },
  { path: '/cadastro-tcc', component: CadastroTccPage } 
];

// Criando o roteador
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Criando e montando a aplicação
const app = createApp(App);
app.use(router);
app.mount('#app');
