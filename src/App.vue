<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CadastroCliente msg=" "/>
  <Menu msg="Menu do Vue.js"/>
  <Principal msg="  "/>
  <Footer msg =" "/>
</template>

<script>

import Menu from './components/Menu.vue';
import CadastroCliente from './components/CadastroCliente.vue';
import Footer from './components/CadastroCliente.vue';
import Principal from './components/Principal.vue';

export default {
  name: 'App',
  components: {
    Principal,
    Menu,
    CadastroCliente,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #081175;
  margin-top: 60px;
}
</style>
