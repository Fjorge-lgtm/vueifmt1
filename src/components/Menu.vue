<template>
    <div class="hello">
    <h3>Aqui as rotas conforme solicitado no projeto.</h3>
      <ul>
        <li><router-link to="/">Principal</router-link></li>
        <li><router-link to="/menu" rel="noopener">Menu</router-link></li>
        <li><router-link to="/cadastro-cliente" rel="noopener">Cadastro Cliente</router-link></li>
      </ul> 
      <router-view/>
    </div>
</template>
  
  <script>
  export default {
    name: 'MenuGeral',
    props: {
      msg: String,
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #a142b9;
  }
  </style>
  