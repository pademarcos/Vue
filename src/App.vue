<template>
  <div id="app">
    <div v-if="$store.getters.getUsuActivo">
      <UsuarioComponente />
            
      <nav>
        <router-link to="/">Inicio</router-link> |
        <router-link to="/buscador">Buscador de productos</router-link> |
        <router-link to="/formulario">Formulario</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
import UsuarioComponente from './components/UsuarioComponente.vue';

export default {
    name: "App",
    components: { UsuarioComponente }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
