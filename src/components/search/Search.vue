<template>
    <div id="search">
        <div v-if="!carga">
            <div class="row">
                
                <div class="banner-content col-lg-12">
                    <div style="margin-top:70px"></div>
                    <div class="row justify-content-center form-wrap">
                        <div class="col-md-3">
                            <!-- <input id="busqueda" name="busqueda" type="search" placeholder="Que estas buscando?" class="form-control"> -->
                        </div>
                        <div class="col-md-3" v-if="tipos">
                            <el-select v-model="tipoModel" clearable placeholder="Tipo de Servicio">
                                <el-option v-for="tipo in tipos" :key="tipo.id_tipo" :label="tipo.nombre" :value="tipo.id_tipo"></el-option>
                            </el-select>
                        </div>        
                        <div class="col-md-3" v-if="ciudades">
                            <el-select v-model="ciudadModel" clearable placeholder="Ciudad">
                                <el-option v-for="ciudad in ciudades" :key="ciudad.name" :label="ciudad.ciudad" :value="ciudad.id_ciudad"></el-option>
                            </el-select>
                        </div>      
                        <!-- Button -->
                        <div class="col-md-2"> 
                            <el-button type="primary" icon="el-icon-search" v-on:click="buscar_filtros">Buscar</el-button>      		                               
                        </div>	                    
                    </div>
                </div>											
            </div>

                <!--resultados-->
                <section class="popular-post-area pt-100">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="container active-popular-post-carusel">
                                <div v-for="empresa in empresasAux">
                                    <div class="single-popular-post d-flex flex-row">
                                        <div class="thumb">                  
                                            <img class="img-responsive"
                                             v-bind:src="'data:image;base64,'+empresa.base64Img"
                                             style="width:150px; height:100px" alt=""/> 
                                        </div>
                                        <div class="details">
                                            <div class="testimonials__author">
                                                <a href="#" v-on:click="ir_pagina(empresa.nombre)" class='name-emp'>{{ empresa.nombre }}</a>
                                                <span>Nit. {{empresa.nit}}</span>
                                            </div>
                                            <h6>{{ empresa.tipo }}</h6>
                                            <p>
                                            {{ empresa.mision }}
                                            </p>

                                        </div>
                                        
                                    </div>
                                    <hr>
                                </div>																																			
                            </div>
                        </div>
                    </div>	
                </section>
            </div>
            <!--gif loader-->
        <div class="centrar" v-if="carga">
        <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        </div>
    </div>
        
</template>

<script>
import axios from "axios";
import Ciudad from "@/models/ciudad.js";
import Tipo from "@/models/tipo.js";

export default {
  name: 'search',
  components: {
  },
  async mounted() {
    this.carga = true; 
    await this.traer_ciudades();
    await this.traer_tipos();
    await this.traer_Empresas();     
  },
  data() {
    return {
      ciudades: Ciudad,
      tipos: Tipo,
      ciudadModel:"",
      tipoModel: "",
      pequ: Ciudad,
      empresas: [Object],
      empresasAux: [Object],
      carga: true
    };
  },
  methods: {
    buscar_filtros: function() {
      if (this.ciudadModel) {
        this.empresasAux = this.empresas.filter(
          empresa => empresa.id_ciudad == this.ciudadModel
        );
      }
      else if (this.tipoModel) {
        this.empresasAux = this.empresas.filter(
          empresa => empresa.id_tipo == this.tipoModel
        );
      }
      else{
        this.empresasAux = this.empresas;
      }
    },

    traer_Empresas: async function() {
      axios.get("http://127.0.0.1:8000/api/detalle/").then(respuesta => {
      this.empresas = respuesta.data;
      this.empresasAux = this.empresas;
      this.carga = false;   
    });
    },
    traer_tipos: async function(){
      axios.get("http://127.0.0.1:8000/api/tipo/").then(respuesta => {
      this.tipos = respuesta.data;
    });
    },
    traer_ciudades: async function(){
      axios.get("http://127.0.0.1:8000/api/ciudad/").then(respuesta => {
      this.ciudades = respuesta.data;
    });
    },
    ir_pagina: function(emp){
        const empresa = emp;
        this.$router.push({ path: `/${empresa}`}) 
    },

  }
};
</script>

<style>
    .img-category{
        height: 30px;
    }

    .name-emp{
        color: #222;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 25px;
    }
</style>
