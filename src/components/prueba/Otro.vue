<template>
    <div class="otro">
        <h1>Otra mierda </h1>
        <div v-if="empresa"> {{ empresa.nombre }} </div>
    </div>
</template>


<script>
import axios from "axios";
import Empresa from "../../models/empresa.js";

export default {
  name: "otro",
  mounted() {
    axios.get("http://127.0.0.1:8000/api/Api/").then(respuesta => {
      this.empresa = respuesta.data[3];
    });
  },
  data() {
    return {
      empresa: Object
    };
  }
};
</script>