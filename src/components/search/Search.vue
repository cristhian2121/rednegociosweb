<template>
  <div id="search">
    <a class="freepick inside" href="http://www.freepik.com">Photo by Freepik</a>
    <a class="freepick inside-back" href="http://www.freepik.com">Photo by Freepik</a>
    <div class="bg-home"></div>
    <div>
      <div class>
        <div class="banner-content col-lg-12">
          <div style="margin-top:55px"></div>
          <div class="row form-wrap">
            <div class="col-md-3 filtro margin-top">
              <div class="title">Filtrar empresas</div>
              <!-- <input id="busqueda" name="busqueda" type="search" placeholder="Que estas buscando?" class="form-control"> -->
            </div>
            <div class="col-md-3 el-col-xs-12" v-if="tipos">
              <el-select v-model="tipoModel" clearable placeholder="Tipo de Servicio">
                <el-option
                  v-for="tipo in tipos"
                  :key="tipo.id_tipo"
                  :label="tipo.nombre"
                  :value="tipo.id_tipo"
                ></el-option>
              </el-select>
            </div>

            <div class="col-md-3 el-col-xs-12" v-if="ciudades">
              <el-select v-model="ciudadModel" clearable placeholder="Ciudad">
                <el-option
                  v-for="ciudad in ciudades"
                  :key="ciudad.name"
                  :label="ciudad.ciudad"
                  :value="ciudad.id_ciudad"
                ></el-option>
              </el-select>
            </div>
            <!-- Button -->
            <div class="col-md-3 margin-top">
              <el-button
                class="CMXD-btn-ok"
                style="width:100%;"
                icon="el-icon-search"
                v-on:click="buscar_filtros"
              >Buscar</el-button>

            </div>
          </div>
        </div>
      </div>

      <!--resultados-->
      <section class="popular-post-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="active-popular-post-carusel row">
              <div class="card-padding" :key="empresa.id_empresa" v-for="empresa in empresasAux">
                <div class="row card-business" >                  
                  <div class="thumb col-md-4 el-col-xs-8">                    
                    <img width="100%" :src="'data:image;base64,'+empresa.base64Img" alt>
                  </div>
                  <div class="details col-md-8 el-col-xs-16">
                    <div class="testimonials__author">
                      <a
                        href="JavaScript:Void(0)"
                        v-on:click="ir_pagina(empresa.nombre)"
                        class="name-description"
                      >{{ empresa.nombre }}</a>
                      <span>Nit. {{empresa.nit}}</span>
                      <span>{{ empresa.tipo }}</span>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="label-description">Sobre nosotros:</div>
                    <div class="description-business">
                      <p>{{ empresa.mision }}</p>
                    </div>
                    <a
                      href="#"
                      v-on:click="ir_pagina(empresa.nombre)"
                      class="btn CMXD-btn-business">Entrar</a>
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
      <div class="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Ciudad from "@/models/ciudad.js";
import Tipo from "@/models/tipo.js";

export default {
  name: "search",
  components: {},
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
      ciudadModel: "",
      tipoModel: "",
      pequ: Ciudad,
      empresas: [Object],
      empresasAux: [Object],
      carga: true
    };
  },
  methods: {
    buscar_filtros: function() {
      let filtroCiudad =[];
      let filtroTipo = [];
      if (this.ciudadModel && this.tipoModel) {
        filtroCiudad = this.empresas.filter( empresa => empresa.id_ciudad == this.ciudadModel );
        this.empresasAux = filtroCiudad.filter( empresa => empresa.id_tipo == this.tipoModel );
        return true;
      } else if (this.tipoModel && !this.ciudadModel) {
        this.empresasAux = this.empresas.filter( empresa => empresa.id_tipo == this.tipoModel );
        return true;
      } else if (!this.tipoModel && this.ciudadModel) {
        this.empresasAux = this.empresas.filter( empresa => empresa.id_ciudad == this.ciudadModel );
        return true;
      } else {
        this.empresasAux = this.empresas;
      }
    },

    traer_Empresas: async function() {
      axios.get("http://68.183.124.242:8000/api/detalle/").then(respuesta => {
        this.empresas = respuesta.data;
        this.empresasAux = this.empresas;
        this.carga = false;
      });
    },
    traer_tipos: async function() {
      axios.get("http://68.183.124.242:8000/api/tipo/").then(respuesta => {
        this.tipos = respuesta.data;
      });
    },
    traer_ciudades: async function() {
      axios.get("http://68.183.124.242:8000/api/ciudad/").then(respuesta => {
        this.ciudades = respuesta.data;
      });
    },
    ir_pagina: function(emp) {
      const empresa = emp;
      this.$router.push({ path: `/${empresa}` });
    }
  }
};
</script>

<style scoped>
.img-category {
  height: 30px;
}
.description-business {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 29px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
a.name-description {
  color: black;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
}
.label-description {
  font-weight: 300;
  font-size: 12px;
}
.testimonials__author span {
  font-size: 12px;
  position: relative;
  top: -3px;
}
.card-business {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25);
  min-height: 100%;
  width: 100%;
}
.col-md-3.filtro .title {
  color: white;
}
.card-padding {
  padding: 0 30px 30px;
}
.el-select {
  width: 100%;
}
.testimonials__author span:last-child {
  font-weight: 600;
  color: #ff4700;
}
.CMXD-btn-business {
  background: #333333 !important;
  color: white !important;
  width: 100%;
  font-size: 12px;
  padding: 2px;
  width: 100%;
  margin-top: 10px;
}
.CMXD-btn-business:hover,
.CMXD-btn-business:focus,
.CMXD-btn-business:active {
  background: #5a5a5a !important;
  color: white !important;
  border: none !important;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.4) !important;
  transition: 0.2s;
  outline: none;
  text-decoration: none;
  color: white;
}
.name-emp {
  color: #222;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 25px;
}
.bg-home {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(../../assets/bg-home.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}
.card-padding {
  max-width: 33.333333%;
}
.active-popular-post-carusel.row {
  margin-top: 80px !important;
}
@media (max-width: 1060px) {
  .card-padding {
    max-width: 50%;
    min-width: 50%;
  }
}
@media (max-width: 800px) {
  .card-padding {
    max-width: 100%;
    min-width: 100%;
  }
  .active-popular-post-carusel.row {
    margin: 0 0 0 20px;
  }
  .active-popular-post-carusel.row {
    margin-top: 40px !important;
  }
  .margin-top {
    margin-top: 15px;
  }
}
</style>
