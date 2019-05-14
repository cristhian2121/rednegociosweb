<template>
  <header id="header">
    <div class="justify-content-between d-flex">
      <router-link :to="{ path: '/home' }">
        <img src="@/assets/logo.png" class="im-logo">
      </router-link>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li>
            <router-link :to="{ path: '/home' }">
              <span class="el-icon-menu ticker-txt"></span> Inicio
            </router-link>
          </li>
          <li>
            <div v-if="!tiene_empresa">
              <router-link :to="{ path: '/registration/businessapp' }">
                <span class="el-icon-edit-outline ticker-txt"></span> Anúnciate
              </router-link>
            </div>
          </li>
          <li>
            <div v-if="tiene_empresa">
              <router-link :to="{ path: `/${nombre_empresa}` }">
                <span class="el-icon-edit-outline ticker-txt"></span> Mi perfil
              </router-link>
            </div>
          </li>

          <!-- <li><span class="glyphicon glyphicon-user ticker-txt">
              </span>
            <router-link :to="{ path: '/login' }">Iniciar sesión</router-link>              
          </li>-->
          <li>
            <span class="el-icon-circle-close-outline ticker-txt"></span>
            <router-link :to="{ path: '/' }">Salir</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div id="footer">
      Copyright © 2019 Med/Col |
      <span>
        Desing by
        <a href="http://cmxdesign.000webhostapp.com/" target="_black">CMX-Desing</a>
      </span>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email_user: null,
      tiene_empresa: false,
      nombre_empresa: null
    };
  },
  async mounted() {
    this.email_user = sessionStorage.getItem("user");
    if (this.email_user) {
      await this.usuario_empresa();
    }
  },
  methods: {
    logout: function() {
      sessionStorage.removeItem("user");
    },
    usuario_empresa: async function() {
      await axios
        .get(
          `http://68.183.124.242:8000/api/empresa_usuario/?email=${
            this.email_user
          }`
        )
        .then(resp => {
          if (resp.data.length > 0) {
            if (resp.data[0].email == this.email_user) {
              this.nombre_empresa = resp.data[0].nombre;
              this.tiene_empresa = true;
            }
          }
        });
    }
    // traer_empresas: function() {
    //   axios.get(`http://68.183.124.242:8000/api/empresa/?usuario=${this.nombre_empresa}`)
    //   .then(respuesta => {
    //     this.empresas = respuesta.data[0];
    //     this.carga = false;
    //    });
    // }
  }
};
</script>

<style>
.im-logo {
  height: 55px;
}
ul.nav-menu {
  line-height: 42px;
  margin-right: 20px;
}
@media (max-width: 800px) {
  ul.nav-menu {
    line-height: 14px;
    margin-right: 20px;
  }
}
</style>




