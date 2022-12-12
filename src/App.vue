<template>
  <div id="app">
    <img alt="coder logo" class="logo-small" src="./assets/logo.jpg">
    <FormularioWeb />
    <RegistroWeb />
    
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue'
import RegistroWeb from './components/RegistroWeb.vue'


export default {
  name: 'App',
  pacientes:[
          {
              socio:"1234",
              nombre:"Juan Perez",
              telefono:"1111111",
              email:"4567@pepe.com"
          },
          {
              socio:"3456",
              nombre:"Marina Gomez",
              telefono:"11222222",
              email:"4567@pepe.com"
          },
          {
              socio:"5678",
              nombre:"Ignacio Hernandez",
              telefono:"1113333",
              email:"4567@pepe.com"
          }
      ],
      colorverde:"text-success",
  components: {
    FormularioWeb,
    RegistroWeb
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
