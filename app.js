let app = new Vue({
  el: "#app",
  data: {
    contador: 0,
    bienvenida: "Bienvenido a Vue 2 !!!",
    carta: {
      imagen:"https://www.cooperativa.cl/noticias/site/artic/20211028/imag/foto_0000000220211028101430.jpg",
      titulo:"pato gigante",
      descripcion: "patitos de hule nadando",
      boton: "ver precio",
      precio: 5000,
    },
    precioIva: 0
  },
  
  methods: {
    mostrarPrecio() {
      alert(`Este ${this.carta.titulo} sale $ ${this.carta.precio}`);
    },
    calcularIva() {
      this.precioIva = this.carta.precio * 1.21;
      return this.precioIva;
    },
    sumarUno(){
        return this.contador++;
        
    },
    restarUno(){
        return this.contador--;
    },
  },
 computed: {
   
   

  },
});
