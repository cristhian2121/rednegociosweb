        <template v-if="empresas">
        <div>
            <h2>{{ empresa.nombre }}</h2>
        </div>
        </template>


<script>
import axios from "axios";

export default {
  mounted() {
    axios.get("http://localhost:8000/api/Api/").then(respuesta => {
      this.empresas = respuesta.data;
      this.empresa = this.empresas[2];
      console.log(this.empresas);
      
    });
  },
  data() {
    return {
      empresas: null,
      empresa: String
    };
  }
};
</script>
