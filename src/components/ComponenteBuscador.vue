<template>
  <div>
          <div>
            
              <h4 :class="estilo">Buscador de Pacientes (socios:1234, 3456, 5678)</h4>
              <input type="number" placeholder="Numero de paciente" v-model="buscado">
              <button @click="buscar" class="btn btn-secondary">🔍</button>
              
              <div :class="estilo" v-if="encontrado!='' && encontrado!=undefined">
  
                                  <table class="table table-success table-striped">
                      <thead class="table table-success table-striped">
                          <tr>
                              <th >Socio</th>
                              <th >Nombre</th>
                              <th >Telefono</th>
                              <th >e-mail</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td >{{encontrado.socio}}</td>
                              <td >{{encontrado.nombre}}</td>
                              <td >{{encontrado.telefono}}</td>
                              <td >{{encontrado.email}}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            
              <div v-else-if="encontrado==undefined">
                    <p>Paciente no encontrado</p>
                  </div>
          </div>
          </div>
</template>

<script>
export default {
  name: 'ComponenteBuscador',

  data:
      
  function () {
      return {
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
        buscado: "",
        encontrado: "",
      };
    },
    props: {
      
      estilo: String,
    },



  methods: {
    buscar() {
        this.encontrado = this.pacientes.find(
          (cliente) => cliente.socio == this.buscado
        );
        if (this.encontrado == undefined) {
          setTimeout(() => {
            this.buscado ='' ;
            this.encontrado ='' ;
          }, 3000);
        }
      },
  },
};
</script>


