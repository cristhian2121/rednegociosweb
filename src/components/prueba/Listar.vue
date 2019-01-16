<template>
    <div class="listar">
        <h1>La persona seleccionada es: </h1>
        <div v-if="empresa"> {{ empresa.nombre }} </div>
</div>
</template>


<script>
import axios from "axios";
import Empresa from "../../models/empresa.js";

export default {
  name: "listar",
  mounted() {
    axios.get("http://127.0.0.1:8000/api/Api/").then(respuesta => {
      this.empresa = respuesta.data[1];
    });
  },
  data() {
    return {
      empresa: Object
    };
  }
};
</script>