<template v-if="empresas">
    <h2>{{ empresa.nombre }}</h2>
</template>

<script>
    import axios from 'axios';
    export default{
    mounted() {
        axios.get("http://127.0.0.1:8000/api/empresas/").then(respuesta =>{
            this.empresas = respuesta.data;
            this.empresa = this.empresas[12];
        });
    },
    data(){
        return{
            empresas:null,
            empresa:String
        }
    }    
}
</script>

