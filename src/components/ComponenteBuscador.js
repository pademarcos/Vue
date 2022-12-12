Vue.component("ComponenteBuscador", {
    data: function () {
      return {
        buscado: "",
        encontrado: "",
      };
    },
    props: {
      pacientes: Array,
      estilo: String,
    },
  
    template: /*html*/ `
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
      `,
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
  });
  