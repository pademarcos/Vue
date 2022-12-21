<template>
    <div class="container">
        <form v-if="!$store.getters.getUsuActivo" @submit.prevent="chequearUsuario">
            <div class="form-group">
                <label for="user"> Usuario:qqq
                    <input type="text" name="user" v-model="user" placeholder="Ingresar Usuario">
                </label>
            </div>
            <div class="form-group">
                <label for="password"> Contraseña:111
                    <input type="text" name="password" v-model="password" placeholder="Ingresar Contraseña">
                </label>
            </div>
            <button class="btn btn-success my-3">Log-In</button>
        </form>
        
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'HomeComponent',

    data() {
        return {
            listaUsuarios:[],
            user:'',
            password:''
        };
    },
    created(){
        const URLGET="https://63a33e61471b38b2060a3374.mockapi.io/listaUsuarios";
        fetch(URLGET)
        .then(response => response.json())
        .then(data => {
            this.listaUsuarios = data;
            console.log(this.listaUsuarios);
        })


    },

    methods: {
        ...mapMutations(['modificarUsuActivo']),
        chequearUsuario(){
            const encontrado = this.$store.state.listaUsuarios.find((usuario) => (usuario.nombre==this.user && usuario.password==this.password));
            console.log(encontrado);
            if(encontrado){
                //acceder al store y modificar usuario activo
                this.modificarUsuActivo(encontrado.nombre);
                Object.assign(this.$data, this.$options.data);
            }
        }
    },
};
</script>

<style
 scoped>

</style>