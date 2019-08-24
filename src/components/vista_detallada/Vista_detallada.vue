<template>
  <div class="landing">
    <a class="freepick" href="http://www.freepik.com">Photo by Freepik</a>
    <!-- Header -->
    <header id="header" class="alt">
      <h1>
        <strong>
          <!-- <a href>{{ empresas.nombre }}</a> -->
          <a href>
            <img src="@/assets/logo-linew.png" class="im-logo-header" />
          </a>
        </strong>
      </h1>
      <nav id="nav">
        <ul>
          <li v-if="existeUsuario">
            <router-link :to="{ path: '/home' }">Inicio</router-link>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Banner -->
    <!-- <section id="banner">
      <img src="@/assets/logo-linew.png" class="im-logo">
      <p>Todo lo que necesitas, en un solo lugar</p>
      <ul class="icons banner">
        <li>
          <a href="#">
            <div>
              <img src="@/assets/facebookb.png" alt>
            </div>
          </a>
          <br>
        </li>
        <li>
          <a href="#">
            <div>
              <img src="@/assets/twitterb.png" alt>
            </div>
          </a>
          <br>
        </li>
        <li>
          <a href="#">
            <div>
              <img src="@/assets/instagramb.png" alt>
            </div>
          </a>
          <br>
        </li>
        <li>
          <a href="#">
            <div>
              <img src="@/assets/youtubeb.png" alt>
            </div>
          </a>
          <br>
        </li>
      </ul>
    </section>-->
    <section class>
      <agile :arrows="false" :speed="750" :fade="true" :autoplay="true" :pauseOnHover="false">
        <div class="slide slide--1">
          <img width="100%" src="@/assets/slide1.png" alt />
        </div>
        <div class="slide slide--2">
          <img width="100%" src="@/assets/slide2.png" alt />
        </div>
        <div class="slide slide--3">
          <img width="100%" src="@/assets/slide3.png" alt />
        </div>
      </agile>
    </section>

    <!-- One -->
    <section id="about" class="wrapper style1">
      <div class="container 75%">
        <header class="major text-center">
          <h2>¿Quienes somos?</h2>
        </header>
        <div class="row 200%">
          <!-- <div class="6u 12u$(medium)">
            <iframe
              width="95%"
              height="220px"
              src="https://www.youtube.com/embed/uP7uyD6zlZA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>-->
          <div class="12u 12u$(medium)">
            <p>{{ empresas.mision }}</p>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Three -->
    <section id="services" class="wrapper style2">
      <div class="container">
        <header class="major special text-center">
          <h2>Nuestros servicios</h2>
        </header>
        <div class="feature-grid">
          <div v-if="carga">
            <div class="feature" :key="servicio.nombre" v-for="servicio in listadoServicos">
              <div class="image rounded">
                <img src="@/assets/logo-home.png" alt />
              </div>
              <div class="content">
                <header>
                  <h4>{{ servicio.nombre }}</h4>
                </header>
                <p>{{ servicio.descripcion }}</p>
              </div>
            </div>
          </div>
          <!-- <div class="feature">
            <div class="image rounded">
              <img src="@/assets/logo-home.png" alt>
            </div>
            <div class="content">
              <header>
                <h4>Servicio 2</h4>
              </header>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
            </div>
          </div>
          <div class="feature">
            <div class="image rounded">
              <img src="@/assets/logo-home.png" alt>
            </div>
            <div class="content">
              <header>
                <h4>Servicio 3</h4>
              </header>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
            </div>
          </div>
          <div class="feature">
            <div class="image rounded">
              <img src="@/assets/logo-home.png" alt>
            </div>
            <div class="content">
              <header>
                <h4>Servicio 4</h4>
              </header>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
            </div>
          </div>-->
        </div>
      </div>
    </section>

    <!-- <section id="Blog" class="wrapper special">
      <div class="container">
        <header class="major">
          <h2>Blog</h2>
        </header>
        <div class="row">
          <div class="col-md-4 padding-blog">
            <div class="card-blog">
              <img width="100%" src="@/assets/bg-page-header.jpg" alt>
              <div class="content-card">
                <label>Title blog</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <el-button class="btn CMXD-btn-grey" id="show-modal" @click="showModal = true">Ver más</el-button>
            </div>
          </div>
          <div class="col-md-4 padding-blog">
            <div class="card-blog">
              <img width="100%" src="@/assets/bg-page-header.jpg" alt>
              <div class="content-card">
                <label>Title blog</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <el-button class="btn CMXD-btn-grey">Ver más</el-button>
            </div>
          </div>
          <div class="col-md-4 padding-blog">
            <div class="card-blog">
              <img width="100%" src="@/assets/bg-page-header.jpg" alt>
              <div class="content-card">
                <label>Title blog</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <el-button class="btn CMXD-btn-grey">Ver más</el-button>
            </div>
          </div>
          <div class="col-md-4 padding-blog">
            <div class="card-blog">
              <img width="100%" src="@/assets/bg-page-header.jpg" alt>
              <div class="content-card">
                <label>Title blog</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <el-button class="btn CMXD-btn-grey">Ver más</el-button>
            </div>
          </div>
          <div class="col-md-4 padding-blog">
            <div class="card-blog">
              <img width="100%" src="@/assets/bg-page-header.jpg" alt>
              <div class="content-card">
                <label>Title blog</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <el-button class="btn CMXD-btn-grey">Ver más</el-button>
            </div>
          </div>
          <div class="col-md-4 padding-blog">
            <div class="card-blog">
              <img width="100%" src="@/assets/bg-page-header.jpg" alt>
              <div class="content-card">
                <label>Title blog</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <el-button class="btn CMXD-btn-grey">Ver más</el-button>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Four -->
    <section id="contact" class="wrapper style3 special">
      <div class="container">
        <div class="container row contact">
          <div class="col-md-6">
            <header class="major text-left">
              <h2>Contacto</h2>
              <p>Ponte en contacto y hagamos algo genial juntos.</p>
            </header>
            <div>
              <div class="row text-left text-white date-bus">
                <div class="col-md-12 row">
                  <div>
                    <i class="material-icons">email</i>
                  </div>
                  <div>
                    <label for>Correo electrónico</label>
                    <p>
                      <a href="mailto:#0" class="contact-email">{{ empresas.email}}</a>
                    </p>
                  </div>
                </div>
                <div class="col-md-12 row">
                  <div>
                    <i class="material-icons">phone</i>
                  </div>
                  <div>
                    <label for>Télefono</label>
                    <p>
                      <span class="contact-number">{{ empresas.telefono}} / {{ empresas.celular }}</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-12 row">
                  <div>
                    <i class="material-icons">place</i>
                  </div>
                  <div>
                    <label for>Donde encontrarnos</label>
                    <p>
                      <span>{{ empresas.direccion }} | {{ empresas.ciudad }}, {{ empresas.pais}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 row bg-white-c">
            <div class="form-CMXD row col-md-12">
              <div class="CMXD-icon-form">
                <i class="material-icons">person</i>
              </div>
              <div class="input-effect js-input">
                <input class="CMXD-material-input" placeholder="Nombre" />
                <span class="focus-border"></span>
                <span v-show="errors.has('nit')" class="text-danger">*Maximo 10 caracteres</span>
              </div>
            </div>
            <div class="col-md-12">
              <br />
            </div>
            <div class="form-CMXD row col-md-12">
              <div class="CMXD-icon-form">
                <i class="material-icons">email</i>
              </div>
              <div class="input-effect js-input">
                <input class="CMXD-material-input" type="email" placeholder="Correo Electrónico" />
                <span class="focus-border"></span>
                <span v-show="errors.has('nit')" class="text-danger">*Maximo 10 caracteres</span>
              </div>
            </div>
            <div class="col-md-12">
              <br />
            </div>
            <div class="form-CMXD row col-md-12">
              <div class="CMXD-icon-form">
                <i class="material-icons">phone</i>
              </div>
              <div class="input-effect js-input">
                <input class="CMXD-material-input" type="number" placeholder="Télefono" />
                <span class="focus-border"></span>
                <span v-show="errors.has('nit')" class="text-danger">*Maximo 10 caracteres</span>
              </div>
            </div>
            <div class="col-md-12">
              <br />
            </div>
            <div class="form-CMXD row col-md-12">
              <div class="CMXD-icon-form">
                <i class="material-icons">title</i>
              </div>
              <div class="input-effect js-input">
                <input class="CMXD-material-input" type="text" placeholder="Asunto" />
                <span class="focus-border"></span>
                <span v-show="errors.has('nit')" class="text-danger">*Maximo 10 caracteres</span>
              </div>
            </div>
            <div class="col-md-12">
              <br />
            </div>
            <div class="form-CMXD row col-md-12">
              <div class="CMXD-icon-form">
                <i class="material-icons">format_italic</i>
              </div>
              <div class="input-effect js-input">
                <textarea class="CMXD-material-input" placeholder="Escribe un mensaje..." />
                <span class="focus-border"></span>
                <span v-show="errors.has('nit')" class="text-danger">*Maximo 10 caracteres</span>
              </div>
            </div>
            <div class="form-CMXD row col-md-12 copy">
              <div class="CMXD-icon-form">
                <el-checkbox></el-checkbox>
              </div>
              <div class="input-effect js-input acept">
                Acepto los
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#t_and_c_m"
                >Términos y condiciones</a> establecidos por este sitio, incluido nuestro Uso de cookies.
              </div>
            </div>
            <div class="form-CMXD col-md-12 text-center">
              <el-button class="btn CMXD-btn-ok">Enviar</el-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer id="footer">
      <div class="container">
        Siguenos en nuestras redes
        <br />
        <br />
        <ul class="icons">
          <li>
            <a v-bind:href="empresas.facebook">
              <div>
                <img src="@/assets/facebookb.png" alt />
              </div>
            </a>
            <br />
          </li>
          <li>
            <a v-bind:href="empresas.instagram">
              <div>
                <img src="@/assets/twitterb.png" alt />
              </div>
            </a>
            <br />
          </li>
          <li>
            <a v-bind:href="empresas.instagram">
              <div>
                <img src="@/assets/instagramb.png" alt />
              </div>
            </a>
            <br />
          </li>
          <li>
            <a v-bind:href="empresas.youtube">
              <div>
                <img src="@/assets/youtubeb.png" alt />
              </div>
            </a>
            <br />
          </li>
        </ul>
      </div>
    </footer>
    <div class="whatsapp-number">
      <img height="100%" src="@/assets/wb.png" alt />
      <p>{{ empresas.celular }}</p>
    </div>
    <div class="footer-page">
      <div class="row container">
        <div class="col-md-4 text-center logo">
          <img src="@/assets/logo-linew.png" class="im-logo" />
        </div>
        <div class="col-md-4 sub-menu">
          <label for>Servicios</label>
          <ul :key="servicioN.nombre" v-for="servicioN in listadoServicos">
            <li>{{ servicioN.nombre }}</li>
          </ul>
        </div>
        <div class="col-md-4 sub-menu">
          <label for>Mapa del sitio</label>
          <ul>
            <li>
              <router-link :to="{ path: '/home' }">Inicio</router-link>
            </li>
            <li>
              <a href="#about">Nosotros</a>
            </li>
            <li>
              <a href="services">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-copy">
        Copyright © 2019 Med/Col |
        <span>
          Desing by
          <a href="http://cmxdesign.000webhostapp.com/" target="_black">CMX-Desing</a>
        </span>
      </div>
      <div id="app">
        <div v-if="showModal" @close="showModal = false">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="close-modal">
                  <button @click="showModal = false">
                    <i class="material-icons">close</i>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12 title">
                      <label>Title blog</label>
                    </div>
                    <div class="col-md-12 image">
                      <img width="100%" src="@/assets/bg-page-header.jpg" alt />
                    </div>
                    <div class="col-md-12 text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "vista-detallada",
  props: ["id_empresa"],

  async mounted() {
    this.nombre_empresa = this.$route.params.nombre;
    await this.traer_empresas();
    this.validar_usuario();
  },
  data() {
    return {
      empresas: [Object],
      empresasAux: [Object],
      servicios: [Object],
      nombre_empresa: "",
      carga: false,
      showModal: false,
      listadoServicos: null,
      existeUsuario : false
    };
  },
  methods: {
    mostrar_servicios: function() {
      if (this.servicioModel) {
        this.empresas = this.empresas.filter(
          empresa => empresa.id_empresa == this.servicioModel
        );
      }
    },

    traer_empresas: async function() {
      axios
        .get(`http://121.0.0.1:8000/api/detalle/?nombre=${this.nombre_empresa}`)
        .then(respuesta => {
          this.empresas = respuesta.data[0];
          this.traer_servicios();
        });
    },

    traer_servicios: function() {
      //console.log(`http://121.0.0.1:8000/api/servicio/?id_empresa=${this.empresas.id_empresa}`)
      axios
        .get(
          `http://121.0.0.1:8000/api/servicio/?id_empresa=${this.empresas.id_empresa}`
        )
        .then(respuesta => {
          this.servicios = respuesta.data[0];
          this.listadoServicos = this.contarServicios();
          this.carga = true;
        })
        .catch(function(ee) {});
    },

    contarServicios: function() {
      let longitud = [];
      if (this.servicios.nombre_ser_1) {
        let servicio = {
          nombre: this.servicios.nombre_ser_1,
          descripcion: this.servicios.ser_1
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_2) {
        let servicio = {
          nombre: this.servicios.nombre_ser_2,
          descripcion: this.servicios.ser_2
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_3) {
        let servicio = {
          nombre: this.servicios.nombre_ser_3,
          descripcion: this.servicios.ser_3
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_4) {
        let servicio = {
          nombre: this.servicios.nombre_ser_4,
          descripcion: this.servicios.ser_4
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_5) {
        let servicio = {
          nombre: this.servicios.nombre_ser_5,
          descripcion: this.servicios.ser_5
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_6) {
        let servicio = {
          nombre: this.servicios.nombre_ser_6,
          descripcion: this.servicios.ser_6
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_7) {
        let servicio = {
          nombre: this.servicios.nombre_ser_7,
          descripcion: this.servicios.ser_7
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_8) {
        let servicio = {
          nombre: this.servicios.nombre_ser_8,
          descripcion: this.servicios.ser_8
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_9) {
        let servicio = {
          nombre: this.servicios.nombre_ser_9,
          descripcion: this.servicios.ser_9
        };
        longitud.push(servicio);
      }
      if (this.servicios.nombre_ser_10) {
        let servicio = {
          nombre: this.servicios.nombre_ser_10,
          descripcion: this.servicios.ser_10
        };
        longitud.push(servicio);
      }
      return longitud;
    },

    validar_usuario: function() {
      const user = sessionStorage.getItem("user");
      if (!user) this.existeUsuario = false;
      axios
        .get(`http://121.0.0.1:8000/api/empresa_usuario/?email=${user}`)
        .then(res => {
          if (res.data.length > 0) this.existeUsuario = true;
          else this.existeUsuario = false;
        })
        .catch(e => console.log('Error: ', e));
    }
  }
};
</script>

<style scoped>
img.im-logo-header {
  height: 100%;
  padding: 20px;
}
.col-md-12.text {
  text-align: justify;
  padding: 0px 20px;
  font-size: 14px;
}
.col-md-12.image {
  padding: 0 20px 20px;
}
.col-md-12.title label {
  text-align: center;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
}
/* Modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  -webkit-animation-name: fade-bg-modal;
  -webkit-animation-duration: 0.5s;
  animation-name: fade-bg-modal;
  animation-duration: 0.5s;
  transition: 0.2s;
}
@-webkit-keyframes fade-bg-modal {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@keyframes fade-bg-modal {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  max-width: 700px;
  height: auto;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-animation-name: fade-bg-modal-model;
  -webkit-animation-duration: 0.5s;
  animation-name: fade-bg-modal-model;
  animation-duration: 0.5s;
}
@-webkit-keyframes fade-bg-modal-model {
  0% {
    margin-top: 150%;
  }
  20% {
    margin-top: 150%;
  }
  100% {
    margin-top: 0%;
  }
}
@keyframes fade-bg-modal-model {
  0% {
    margin-top: 150%;
  }
  20% {
    margin-top: 150%;
  }
  100% {
    margin-top: 0%;
  }
}
label.register-tipe {
  font-size: 12px;
  color: grey;
}
.close-modal {
  width: 100%;
  text-align: right;
}
.close-modal button {
  position: absolute;
  margin-left: -15px;
  margin-top: -10px;
  background: none;
  border: none;
  height: 22px;
  color: #9e9e9e;
}
.close-modal button:hover,
.close-modal button:focus,
.close-modal button:active {
  outline: none;
  box-shadow: 0 0 0;
  color: #000000;
  cursor: pointer;
}
.close-modal i.material-icons {
  font-size: 20px;
}
.btnr {
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  color: white;
  text-decoration: none;
}
div#footer-copy {
  background: black;
  color: rgba(255, 255, 255, 0.58);
  text-align: center;
  font-size: 12px;
  padding: 5px;
}
div#footer-copy a {
  color: rgba(255, 255, 255);
  text-decoration: none;
  font-weight: 600;
}
.footer-page .container {
  padding: 40px 0 15px;
}
.col-md-4.sub-menu {
  padding: 0 25px;
  color: grey;
}
.col-md-4.sub-menu label {
  font-weight: 300;
  position: relative;
  left: -7px;
  margin-bottom: 7px;
}
.col-md-4.sub-menu ul {
  color: white;
  font-size: 12px;
}
.col-md-4.sub-menu ul a {
  color: white;
  font-size: 12px;
  text-decoration: none;
}
.col-md-4.text-center.logo {
  padding: 33px 0px 0;
}
.footer-page {
  background: #313131;
}
.whatsapp-number {
  position: fixed;
  width: 230px;
  height: 45px;
  padding-left: 5px;
  top: 50%;
  background-size: cover;
  border-radius: 50px 0px 0px 50px;
  background: #00dc0c;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  right: -178px;
}
.whatsapp-number:hover {
  -webkit-animation-name: fade-wp;
  -webkit-animation-duration: 10s;
  animation-name: fade-wp;
  animation-duration: 10s;
  transition: 0.2s;
}
@-webkit-keyframes fade-wp {
  0% {
    right: -178px;
  }

  5% {
    right: 0px;
  }
  100% {
    right: 0px;
  }
}
@keyframes fade-wp {
  0% {
    right: -178px;
  }

  5% {
    right: 0px;
  }
  100% {
    right: 0px;
  }
}
ul.icons {
  margin: 0 !important;
}
.whatsapp-number p {
  float: right;
  padding: 10px;
  width: 180px;
  text-align: center;
}
.whatsapp-number img {
  float: left;
  border-radius: 50px;
}
button.el-button.btn.CMXD-btn-grey.el-button--default {
  font-size: 12px;
  padding: 8px;
}
#footer .icons li:last-child {
  padding-right: 2.5rem !important;
}
.form-CMXD.col-md-6 {
  -ms-flex: 0 0 50%;
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  min-width: 50% !important;
}
.contact label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.66);
}
.form-CMXD.row.col-md-12.copy {
  text-align: left;
  font-size: 12px;
  padding: 23px;
  text-align: left;
}
.CMXD-icon-form span.el-checkbox__inner {
  position: relative;
  left: -10px;
  top: 3px;
}
.form-CMXD.row.col-md-12.copy a {
  color: rgb(112, 112, 112);
}
.contact label i {
  font-size: 13px;
  color: rgba(34, 23, 23, 0.66);
}
.padding-blog {
  padding: 0px 20px 40px !important;
}
.content-card label {
  font-size: 16px;
  font-weight: 600;
}
.card-blog {
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.38);
  background: white;
  border-radius: 3px;
  text-align: justify;
}
.card-blog img {
  border-radius: 3px 3px 0 0;
}
.content-card {
  padding: 10px 20px 20px;
}
.content-card p {
  display: -webkit-box;
  max-width: 100%;
  height: 40px;
  margin: 0 auto;
  font-size: 13px;
  line-height: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: grey;
  font-weight: 300;
}
.col-md-6.row.bg-white-c {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  padding: 20px 30px 15px 15px;
}
ul.icons img {
  width: 40px;
  opacity: 0.4;
}
ul.icons.banner img {
  width: 25px !important;
  opacity: 0.6;
  margin: 0 10px;
}
footer#footer p,
footer#footer a {
  font-size: 19px;
  color: #484848;
}
section#banner img {
  width: 40%;
  height: auto;
}
.date-bus i {
  font-size: 31px;
  position: relative;
  margin-right: 10px;
  top: 10px;
}
span.el-checkbox__inner {
  left: -10px;
  top: 0px;
}
a.freepick {
  position: fixed;
  right: -30px;
  transform: rotate(-90deg);
  top: 30%;
  color: rgb(255, 255, 255);
  opacity: 0.3;
  font-size: 10px;
  text-decoration: none;
  z-index: 100;
}
.input-effect {
  margin-left: 5px;
  width: 93%;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  -webkit-text-size-adjust: none;
}

/* Box Model */

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* Containers */

.container {
  margin-left: auto;
  margin-right: auto;
}

.container.\31 25\25 {
  width: 100%;
  max-width: 100em;
  min-width: 80em;
}

.container.\37 5\25 {
  width: 60em;
}

.container.\35 0\25 {
  width: 40em;
}

.container.\32 5\25 {
  width: 20em;
}

.container {
  width: 80em;
}

@media screen and (max-width: 1680px) {
  .container.\31 25\25 {
    width: 100%;
    max-width: 100em;
    min-width: 80em;
  }

  .container.\37 5\25 {
    width: 60em;
  }

  .container.\35 0\25 {
    width: 40em;
  }

  .container.\32 5\25 {
    width: 20em;
  }

  .container {
    width: 80em;
  }
}

@media screen and (max-width: 1280px) {
  .container.\31 25\25 {
    width: 100%;
    max-width: 81.25em;
    min-width: 65em;
  }

  .container.\37 5\25 {
    width: 48.75em;
  }

  .container.\35 0\25 {
    width: 32.5em;
  }

  .container.\32 5\25 {
    width: 16.25em;
  }

  .container {
    width: 65em;
  }
}

@media screen and (max-width: 980px) {
  .container.\31 25\25 {
    width: 100%;
    max-width: 112.5%;
    min-width: 90%;
  }

  .container.\37 5\25 {
    width: 67.5%;
  }

  .container.\35 0\25 {
    width: 45%;
  }

  .container.\32 5\25 {
    width: 22.5%;
  }

  .container {
    width: 90%;
  }
}

@media screen and (max-width: 736px) {
  .container.\31 25\25 {
    width: 100%;
    max-width: 112.5%;
    min-width: 90%;
  }

  .container.\37 5\25 {
    width: 67.5%;
  }

  .container.\35 0\25 {
    width: 45%;
  }

  .container.\32 5\25 {
    width: 22.5%;
  }

  .container {
    width: 90% !important;
  }
}

@media screen and (max-width: 480px) {
  .container.\31 25\25 {
    width: 100%;
    max-width: 112.5%;
    min-width: 90%;
  }

  .container.\37 5\25 {
    width: 67.5%;
  }

  .container.\35 0\25 {
    width: 45%;
  }

  .container.\32 5\25 {
    width: 22.5%;
  }

  .container {
    width: 90% !important;
  }
}

/* Grid */

.\31 2u,
.\31 2u\24 {
  width: 100%;
  clear: none;
  margin-left: 0;
}

.\31 1u,
.\31 1u\24 {
  width: 91.6666666667%;
  clear: none;
  margin-left: 0;
}

.\31 0u,
.\31 0u\24 {
  width: 83.3333333333%;
  clear: none;
  margin-left: 0;
}

.\39 u,
.\39 u\24 {
  width: 75%;
  clear: none;
  margin-left: 0;
}

.\38 u,
.\38 u\24 {
  width: 66.6666666667%;
  clear: none;
  margin-left: 0;
}

.\37 u,
.\37 u\24 {
  width: 58.3333333333%;
  clear: none;
  margin-left: 0;
}

.\36 u,
.\36 u\24 {
  width: 50%;
  clear: none;
  margin-left: 0;
}

.\35 u,
.\35 u\24 {
  width: 41.6666666667%;
  clear: none;
  margin-left: 0;
}

.\34 u,
.\34 u\24 {
  width: 33.3333333333%;
  clear: none;
  margin-left: 0;
}

.\33 u,
.\33 u\24 {
  width: 25%;
  clear: none;
  margin-left: 0;
}

.\32 u,
.\32 u\24 {
  width: 16.6666666667%;
  clear: none;
  margin-left: 0;
}

.\31 u,
.\31 u\24 {
  width: 8.3333333333%;
  clear: none;
  margin-left: 0;
}

.\31 2u\24 + *,
.\31 1u\24 + *,
.\31 0u\24 + *,
.\39 u\24 + *,
.\38 u\24 + *,
.\37 u\24 + *,
.\36 u\24 + *,
.\35 u\24 + *,
.\34 u\24 + *,
.\33 u\24 + *,
.\32 u\24 + *,
.\31 u\24 + * {
  clear: left;
}

.\-11u {
  margin-left: 91.66667%;
}

.\-10u {
  margin-left: 83.33333%;
}

.\-9u {
  margin-left: 75%;
}

.\-8u {
  margin-left: 66.66667%;
}

.\-7u {
  margin-left: 58.33333%;
}

.\-6u {
  margin-left: 50%;
}

.\-5u {
  margin-left: 41.66667%;
}

.\-4u {
  margin-left: 33.33333%;
}

.\-3u {
  margin-left: 25%;
}

.\-2u {
  margin-left: 16.66667%;
}

.\-1u {
  margin-left: 8.33333%;
}

@media screen and (max-width: 1680px) {
  .\31 2u\28xlarge\29,
  .\31 2u\24\28xlarge\29 {
    width: 100%;
    clear: none;
    margin-left: 0;
  }

  .\31 1u\28xlarge\29,
  .\31 1u\24\28xlarge\29 {
    width: 91.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 0u\28xlarge\29,
  .\31 0u\24\28xlarge\29 {
    width: 83.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\39 u\28xlarge\29,
  .\39 u\24\28xlarge\29 {
    width: 75%;
    clear: none;
    margin-left: 0;
  }

  .\38 u\28xlarge\29,
  .\38 u\24\28xlarge\29 {
    width: 66.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\37 u\28xlarge\29,
  .\37 u\24\28xlarge\29 {
    width: 58.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\36 u\28xlarge\29,
  .\36 u\24\28xlarge\29 {
    width: 50%;
    clear: none;
    margin-left: 0;
  }

  .\35 u\28xlarge\29,
  .\35 u\24\28xlarge\29 {
    width: 41.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\34 u\28xlarge\29,
  .\34 u\24\28xlarge\29 {
    width: 33.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\33 u\28xlarge\29,
  .\33 u\24\28xlarge\29 {
    width: 25%;
    clear: none;
    margin-left: 0;
  }

  .\32 u\28xlarge\29,
  .\32 u\24\28xlarge\29 {
    width: 16.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 u\28xlarge\29,
  .\31 u\24\28xlarge\29 {
    width: 8.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\31 2u\24\28xlarge\29 + *,
  .\31 1u\24\28xlarge\29 + *,
  .\31 0u\24\28xlarge\29 + *,
  .\39 u\24\28xlarge\29 + *,
  .\38 u\24\28xlarge\29 + *,
  .\37 u\24\28xlarge\29 + *,
  .\36 u\24\28xlarge\29 + *,
  .\35 u\24\28xlarge\29 + *,
  .\34 u\24\28xlarge\29 + *,
  .\33 u\24\28xlarge\29 + *,
  .\32 u\24\28xlarge\29 + *,
  .\31 u\24\28xlarge\29 + * {
    clear: left;
  }

  .\-11u\28xlarge\29 {
    margin-left: 91.66667%;
  }

  .\-10u\28xlarge\29 {
    margin-left: 83.33333%;
  }

  .\-9u\28xlarge\29 {
    margin-left: 75%;
  }

  .\-8u\28xlarge\29 {
    margin-left: 66.66667%;
  }

  .\-7u\28xlarge\29 {
    margin-left: 58.33333%;
  }

  .\-6u\28xlarge\29 {
    margin-left: 50%;
  }

  .\-5u\28xlarge\29 {
    margin-left: 41.66667%;
  }

  .\-4u\28xlarge\29 {
    margin-left: 33.33333%;
  }

  .\-3u\28xlarge\29 {
    margin-left: 25%;
  }

  .\-2u\28xlarge\29 {
    margin-left: 16.66667%;
  }

  .\-1u\28xlarge\29 {
    margin-left: 8.33333%;
  }
}

@media screen and (max-width: 1280px) {
  .\31 2u\28large\29,
  .\31 2u\24\28large\29 {
    width: 100%;
    clear: none;
    margin-left: 0;
  }

  .\31 1u\28large\29,
  .\31 1u\24\28large\29 {
    width: 91.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 0u\28large\29,
  .\31 0u\24\28large\29 {
    width: 83.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\39 u\28large\29,
  .\39 u\24\28large\29 {
    width: 75%;
    clear: none;
    margin-left: 0;
  }

  .\38 u\28large\29,
  .\38 u\24\28large\29 {
    width: 66.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\37 u\28large\29,
  .\37 u\24\28large\29 {
    width: 58.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\36 u\28large\29,
  .\36 u\24\28large\29 {
    width: 50%;
    clear: none;
    margin-left: 0;
  }

  .\35 u\28large\29,
  .\35 u\24\28large\29 {
    width: 41.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\34 u\28large\29,
  .\34 u\24\28large\29 {
    width: 33.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\33 u\28large\29,
  .\33 u\24\28large\29 {
    width: 25%;
    clear: none;
    margin-left: 0;
  }

  .\32 u\28large\29,
  .\32 u\24\28large\29 {
    width: 16.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 u\28large\29,
  .\31 u\24\28large\29 {
    width: 8.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\31 2u\24\28large\29 + *,
  .\31 1u\24\28large\29 + *,
  .\31 0u\24\28large\29 + *,
  .\39 u\24\28large\29 + *,
  .\38 u\24\28large\29 + *,
  .\37 u\24\28large\29 + *,
  .\36 u\24\28large\29 + *,
  .\35 u\24\28large\29 + *,
  .\34 u\24\28large\29 + *,
  .\33 u\24\28large\29 + *,
  .\32 u\24\28large\29 + *,
  .\31 u\24\28large\29 + * {
    clear: left;
  }

  .\-11u\28large\29 {
    margin-left: 91.66667%;
  }

  .\-10u\28large\29 {
    margin-left: 83.33333%;
  }

  .\-9u\28large\29 {
    margin-left: 75%;
  }

  .\-8u\28large\29 {
    margin-left: 66.66667%;
  }

  .\-7u\28large\29 {
    margin-left: 58.33333%;
  }

  .\-6u\28large\29 {
    margin-left: 50%;
  }

  .\-5u\28large\29 {
    margin-left: 41.66667%;
  }

  .\-4u\28large\29 {
    margin-left: 33.33333%;
  }

  .\-3u\28large\29 {
    margin-left: 25%;
  }

  .\-2u\28large\29 {
    margin-left: 16.66667%;
  }

  .\-1u\28large\29 {
    margin-left: 8.33333%;
  }
}

@media screen and (max-width: 980px) {
  .\31 2u\28medium\29,
  .\31 2u\24\28medium\29 {
    width: 100%;
    clear: none;
    margin-left: 0;
  }

  .\31 1u\28medium\29,
  .\31 1u\24\28medium\29 {
    width: 91.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 0u\28medium\29,
  .\31 0u\24\28medium\29 {
    width: 83.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\39 u\28medium\29,
  .\39 u\24\28medium\29 {
    width: 75%;
    clear: none;
    margin-left: 0;
  }

  .\38 u\28medium\29,
  .\38 u\24\28medium\29 {
    width: 66.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\37 u\28medium\29,
  .\37 u\24\28medium\29 {
    width: 58.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\36 u\28medium\29,
  .\36 u\24\28medium\29 {
    width: 50%;
    clear: none;
    margin-left: 0;
  }

  .\35 u\28medium\29,
  .\35 u\24\28medium\29 {
    width: 41.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\34 u\28medium\29,
  .\34 u\24\28medium\29 {
    width: 33.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\33 u\28medium\29,
  .\33 u\24\28medium\29 {
    width: 25%;
    clear: none;
    margin-left: 0;
  }

  .\32 u\28medium\29,
  .\32 u\24\28medium\29 {
    width: 16.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 u\28medium\29,
  .\31 u\24\28medium\29 {
    width: 8.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\31 2u\24\28medium\29 + *,
  .\31 1u\24\28medium\29 + *,
  .\31 0u\24\28medium\29 + *,
  .\39 u\24\28medium\29 + *,
  .\38 u\24\28medium\29 + *,
  .\37 u\24\28medium\29 + *,
  .\36 u\24\28medium\29 + *,
  .\35 u\24\28medium\29 + *,
  .\34 u\24\28medium\29 + *,
  .\33 u\24\28medium\29 + *,
  .\32 u\24\28medium\29 + *,
  .\31 u\24\28medium\29 + * {
    clear: left;
  }

  .\-11u\28medium\29 {
    margin-left: 91.66667%;
  }

  .\-10u\28medium\29 {
    margin-left: 83.33333%;
  }

  .\-9u\28medium\29 {
    margin-left: 75%;
  }

  .\-8u\28medium\29 {
    margin-left: 66.66667%;
  }

  .\-7u\28medium\29 {
    margin-left: 58.33333%;
  }

  .\-6u\28medium\29 {
    margin-left: 50%;
  }

  .\-5u\28medium\29 {
    margin-left: 41.66667%;
  }

  .\-4u\28medium\29 {
    margin-left: 33.33333%;
  }

  .\-3u\28medium\29 {
    margin-left: 25%;
  }

  .\-2u\28medium\29 {
    margin-left: 16.66667%;
  }

  .\-1u\28medium\29 {
    margin-left: 8.33333%;
  }
}

@media screen and (max-width: 736px) {
  .\31 2u\28small\29,
  .\31 2u\24\28small\29 {
    width: 100%;
    clear: none;
    margin-left: 0;
  }

  .\31 1u\28small\29,
  .\31 1u\24\28small\29 {
    width: 91.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 0u\28small\29,
  .\31 0u\24\28small\29 {
    width: 83.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\39 u\28small\29,
  .\39 u\24\28small\29 {
    width: 75%;
    clear: none;
    margin-left: 0;
  }

  .\38 u\28small\29,
  .\38 u\24\28small\29 {
    width: 66.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\37 u\28small\29,
  .\37 u\24\28small\29 {
    width: 58.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\36 u\28small\29,
  .\36 u\24\28small\29 {
    width: 50%;
    clear: none;
    margin-left: 0;
  }

  .\35 u\28small\29,
  .\35 u\24\28small\29 {
    width: 41.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\34 u\28small\29,
  .\34 u\24\28small\29 {
    width: 33.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\33 u\28small\29,
  .\33 u\24\28small\29 {
    width: 25%;
    clear: none;
    margin-left: 0;
  }

  .\32 u\28small\29,
  .\32 u\24\28small\29 {
    width: 16.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 u\28small\29,
  .\31 u\24\28small\29 {
    width: 8.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\31 2u\24\28small\29 + *,
  .\31 1u\24\28small\29 + *,
  .\31 0u\24\28small\29 + *,
  .\39 u\24\28small\29 + *,
  .\38 u\24\28small\29 + *,
  .\37 u\24\28small\29 + *,
  .\36 u\24\28small\29 + *,
  .\35 u\24\28small\29 + *,
  .\34 u\24\28small\29 + *,
  .\33 u\24\28small\29 + *,
  .\32 u\24\28small\29 + *,
  .\31 u\24\28small\29 + * {
    clear: left;
  }

  .\-11u\28small\29 {
    margin-left: 91.66667%;
  }

  .\-10u\28small\29 {
    margin-left: 83.33333%;
  }

  .\-9u\28small\29 {
    margin-left: 75%;
  }

  .\-8u\28small\29 {
    margin-left: 66.66667%;
  }

  .\-7u\28small\29 {
    margin-left: 58.33333%;
  }

  .\-6u\28small\29 {
    margin-left: 50%;
  }

  .\-5u\28small\29 {
    margin-left: 41.66667%;
  }

  .\-4u\28small\29 {
    margin-left: 33.33333%;
  }

  .\-3u\28small\29 {
    margin-left: 25%;
  }

  .\-2u\28small\29 {
    margin-left: 16.66667%;
  }

  .\-1u\28small\29 {
    margin-left: 8.33333%;
  }
}

@media screen and (max-width: 480px) {
  .\31 2u\28xsmall\29,
  .\31 2u\24\28xsmall\29 {
    width: 100%;
    clear: none;
    margin-left: 0;
  }

  .\31 1u\28xsmall\29,
  .\31 1u\24\28xsmall\29 {
    width: 91.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 0u\28xsmall\29,
  .\31 0u\24\28xsmall\29 {
    width: 83.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\39 u\28xsmall\29,
  .\39 u\24\28xsmall\29 {
    width: 75%;
    clear: none;
    margin-left: 0;
  }

  .\38 u\28xsmall\29,
  .\38 u\24\28xsmall\29 {
    width: 66.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\37 u\28xsmall\29,
  .\37 u\24\28xsmall\29 {
    width: 58.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\36 u\28xsmall\29,
  .\36 u\24\28xsmall\29 {
    width: 50%;
    clear: none;
    margin-left: 0;
  }

  .\35 u\28xsmall\29,
  .\35 u\24\28xsmall\29 {
    width: 41.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\34 u\28xsmall\29,
  .\34 u\24\28xsmall\29 {
    width: 33.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\33 u\28xsmall\29,
  .\33 u\24\28xsmall\29 {
    width: 25%;
    clear: none;
    margin-left: 0;
  }

  .\32 u\28xsmall\29,
  .\32 u\24\28xsmall\29 {
    width: 16.6666666667%;
    clear: none;
    margin-left: 0;
  }

  .\31 u\28xsmall\29,
  .\31 u\24\28xsmall\29 {
    width: 8.3333333333%;
    clear: none;
    margin-left: 0;
  }

  .\31 2u\24\28xsmall\29 + *,
  .\31 1u\24\28xsmall\29 + *,
  .\31 0u\24\28xsmall\29 + *,
  .\39 u\24\28xsmall\29 + *,
  .\38 u\24\28xsmall\29 + *,
  .\37 u\24\28xsmall\29 + *,
  .\36 u\24\28xsmall\29 + *,
  .\35 u\24\28xsmall\29 + *,
  .\34 u\24\28xsmall\29 + *,
  .\33 u\24\28xsmall\29 + *,
  .\32 u\24\28xsmall\29 + *,
  .\31 u\24\28xsmall\29 + * {
    clear: left;
  }

  .\-11u\28xsmall\29 {
    margin-left: 91.66667%;
  }

  .\-10u\28xsmall\29 {
    margin-left: 83.33333%;
  }

  .\-9u\28xsmall\29 {
    margin-left: 75%;
  }

  .\-8u\28xsmall\29 {
    margin-left: 66.66667%;
  }

  .\-7u\28xsmall\29 {
    margin-left: 58.33333%;
  }

  .\-6u\28xsmall\29 {
    margin-left: 50%;
  }

  .\-5u\28xsmall\29 {
    margin-left: 41.66667%;
  }

  .\-4u\28xsmall\29 {
    margin-left: 33.33333%;
  }

  .\-3u\28xsmall\29 {
    margin-left: 25%;
  }

  .\-2u\28xsmall\29 {
    margin-left: 16.66667%;
  }

  .\-1u\28xsmall\29 {
    margin-left: 8.33333%;
  }
}

/* Basic */

@-ms-viewport {
  width: device-width;
}

body {
  -ms-overflow-style: scrollbar;
}

@media screen and (max-width: 480px) {
  html,
  body {
    min-width: 320px;
  }
}

body {
  background: #fff;
  padding-top: 6em;
  overflow: hidden;
}

body.landing {
  padding-top: 0 !important;
}

@media screen and (max-width: 980px) {
  body {
    padding-top: 2em;
  }
}

body.is-loading *,
body.is-loading *:before,
body.is-loading *:after {
  -moz-animation: none !important;
  -webkit-animation: none !important;
  -ms-animation: none !important;
  animation: none !important;
  -moz-transition: none !important;
  -webkit-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}

/* Type */

body {
  background-color: #fff;
  color: #666;
}

body {
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  font-size: 13pt;
  font-weight: 400;
  line-height: 2em;
}

@media screen and (max-width: 1680px) {
  body {
    font-size: 11pt;
  }
}

@media screen and (max-width: 1280px) {
  body {
    font-size: 11pt;
  }
}

@media screen and (max-width: 980px) {
  body {
    font-size: 12pt;
  }
}

@media screen and (max-width: 736px) {
  body {
    font-size: 12pt;
  }
}

@media screen and (max-width: 480px) {
  body {
    font-size: 12pt;
  }
}

a:hover {
  text-decoration: none;
}

strong,
b {
  color: #484848;
  font-weight: 700;
}

p {
  margin: 0 0 2em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #484848;
  font-weight: 700;
  line-height: 1em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: inherit;
  text-decoration: none;
}

h2 {
  font-size: 1.75em;
  line-height: 1.5em;
}

h3 {
  font-size: 1.35em;
  line-height: 1.5em;
}

h4 {
  font-size: 1.1em;
  line-height: 1.5em;
}

h5 {
  font-size: 0.9em;
  line-height: 1.5em;
}

h6 {
  font-size: 0.7em;
  line-height: 1.5em;
}

sub {
  font-size: 0.8em;
  position: relative;
  top: 0.5em;
}

sup {
  font-size: 0.8em;
  position: relative;
  top: -0.5em;
}

blockquote {
  border-left: solid 4px;
  font-style: italic;
  margin: 0 0 2em 0;
  padding: 0.5em 0 0.5em 2em;
}

code {
  background: rgba(144, 144, 144, 0.075);
  border-radius: 4px;
  border: solid 1px;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  margin: 0 0.25em;
  padding: 0.25em 0.65em;
}

pre {
  -webkit-overflow-scrolling: touch;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  margin: 0 0 2em 0;
}

pre code {
  display: block;
  line-height: 1.75;
  padding: 1em 1.5em;
  overflow-x: auto;
}

hr {
  border: 0;
  border-bottom: solid 1px rgba(144, 144, 144, 0.25);
  margin: 2em 0;
}

hr.major {
  margin: 2em 0;
  text-align: center;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

/* Box */

.box {
  border-radius: 4px;
  border: solid 1px rgba(144, 144, 144, 0.25);
  margin-bottom: 2em;
  padding: 1.5em;
}

.box > :last-child,
.box > :last-child > :last-child,
.box > :last-child > :last-child > :last-child {
  margin-bottom: 0;
}

.box.alt {
  border: 0;
  border-radius: 0;
  padding: 0;
}

/* Feature */

.feature-grid {
  position: relative;
}

.feature-grid:after {
  clear: both;
  content: "";
  display: block;
}

.feature-grid .feature {
  display: inline-block;
  float: left;
  margin-bottom: 3em;
  width: 50%;
}

.feature-grid .feature .content {
  width: 60%;
}

.feature-grid .feature .image {
  width: 30%;
}

.feature-grid .feature .image img {
  display: inline;
  max-width: 100%;
}

.feature-grid .feature:nth-child(odd) .content,
.feature-grid .feature:nth-child(odd) .image {
  float: right;
  margin-right: 5%;
  text-align: right;
}

.feature-grid .feature:nth-child(even) .content,
.feature-grid .feature:nth-child(even) .image {
  float: left;
  margin-left: 5%;
  text-align: left;
}

@media screen and (max-width: 1280px) {
  .feature-grid .feature {
    margin-bottom: 2em;
  }
}

@media screen and (max-width: 980px) {
  .feature-grid .feature {
    display: block;
    width: 100%;
  }

  .feature-grid .feature .content {
    width: 65%;
  }

  .feature-grid .feature .image {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media screen and (max-width: 736px) {
  .feature-grid .feature {
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 480px) {
  .feature-grid .feature .content,
  .feature-grid .feature .image {
    display: block;
    margin-left: 0 !important;
    margin-right: 0 !important;
    text-align: center !important;
    width: 100%;
  }

  .feature-grid .feature .image {
    margin-bottom: 1em;
  }
}

/* Icon */

.icon {
  text-decoration: none;
  border-bottom: none;
  position: relative;
}

.icon:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

.icon > .label {
  display: none;
}

/* Image */

.image {
  border-radius: 4px;
  border: 0;
  display: inline-block;
  position: relative;
}

.image img {
  border-radius: 4px;
  display: block;
}

.image.left,
.image.right {
  max-width: 40%;
}

.image.left img,
.image.right img {
  width: 100%;
}

.image.left {
  float: left;
  padding: 0 1.5em 1em 0;
  top: 0.25em;
}

.image.right {
  float: right;
  padding: 0 0 1em 1.5em;
  top: 0.25em;
}

.image.fit {
  display: block;
  margin: 0 0 2em 0;
  width: 100%;
}

.image.fit img {
  width: 100%;
}

.image.rounded {
  border-radius: 100%;
}

.image.rounded img {
  border: solid 0.5em rgba(144, 144, 144, 0.25);
  border-radius: 100%;
}

.image.captioned {
  border-radius: 0;
  margin-bottom: 4em;
}

.image.captioned img {
  border-radius: 0;
}

.image.captioned h3 {
  background-color: #fff;
  box-shadow: 0px 0.0375em 0.125em 0px rgba(0, 0, 0, 0.15);
  display: block;
  padding: 2em 1em;
}

@media screen and (max-width: 736px) {
  .image.captioned {
    margin-bottom: 2em;
  }

  .image.captioned h3 {
    padding: 1em;
  }
}

.image.main {
  display: block;
  margin: 0 0 3em 0;
  width: 100%;
}

.image.main img {
  width: 100%;
}

/* List */

ol {
  list-style: decimal;
  margin: 0 0 2em 0;
  padding-left: 1.25em;
}
ol li {
  padding-left: 0.25em;
}

ul {
  list-style: disc;
  margin: 0 0 2em 0;
  padding-left: 1em;
}

ul li {
  padding-left: 0.5em;
}

ul.alt {
  list-style: none;
  padding-left: 0;
}

ul.alt li {
  border-top: solid 1px rgba(144, 144, 144, 0.25);
  padding: 0.5em 0;
}
ul.alt li:first-child {
  border-top: 0;
  padding-top: 0;
}

ul.icons {
  cursor: default;
  list-style: none;
  padding-left: 0;
}

ul.icons li {
  display: inline-block;
  padding: 0 1em 0 0;
}

ul.icons li:last-child {
  padding-right: 0;
}

ul.icons li .icon:before {
  font-size: 2em;
}

ul.actions {
  cursor: default;
  list-style: none;
  padding-left: 0;
}

ul.actions li {
  display: inline-block;
  padding: 0 1em 0 0;
  vertical-align: middle;
}

ul.actions li:last-child {
  padding-right: 0;
}

ul.actions.small li {
  padding: 0 0.5em 0 0;
}

ul.actions.vertical li {
  display: block;
  padding: 1em 0 0 0;
}

ul.actions.vertical li:first-child {
  padding-top: 0;
}

ul.actions.vertical li > * {
  margin-bottom: 0;
}

ul.actions.vertical.small li {
  padding: 0.5em 0 0 0;
}

ul.actions.vertical.small li:first-child {
  padding-top: 0;
}

ul.actions.fit {
  display: table;
  margin-left: -1em;
  padding: 0;
  table-layout: fixed;
  width: calc(100% + 1em);
}

ul.actions.fit li {
  display: table-cell;
  padding: 0 0 0 1em;
}

ul.actions.fit li > * {
  margin-bottom: 0;
}

ul.actions.fit.small {
  margin-left: -0.5em;
  width: calc(100% + 0.5em);
}

ul.actions.fit.small li {
  padding: 0 0 0 0.5em;
}
@media screen and (max-width: 480px) {
  ul.actions {
    margin: 0 0 2em 0;
  }

  ul.actions li {
    padding: 1em 0 0 0;
    display: block;
    text-align: center;
    width: 100%;
  }
  ul.actions li:first-child {
    padding-top: 0;
  }

  ul.actions li > * {
    width: 100%;
    margin: 0 !important;
  }

  ul.actions li > *.icon:before {
    margin-left: -2em;
  }

  ul.actions.small li {
    padding: 0.5em 0 0 0;
  }
  ul.actions.small li:first-child {
    padding-top: 0;
  }
}

dl {
  margin: 0 0 2em 0;
}

dl dt {
  display: block;
  font-weight: 700;
  margin: 0 0 1em 0;
}

dl dd {
  margin-left: 2em;
}

/* Section/Article */

section.special,
article.special {
  text-align: center;
}

header p {
  color: #aaa;
  position: relative;
  margin: 0 0 1.5em 0;
  text-transform: uppercase;
}

header h2 + p {
  font-size: 1.25em;
  margin-top: -1em;
  line-height: 1.5em;
}

header h3 + p {
  font-size: 1.1em;
  margin-top: -0.8em;
  line-height: 1.5em;
}

header h4 + p,
header h5 + p,
header h6 + p {
  font-size: 0.9em;
  margin-top: -0.6em;
  line-height: 1.5em;
}

header.major {
  margin: 0 0 0em 0;
}

header.major h2 {
  font-size: 3rem;
}

header.major h2,
header.major h3,
header.major h4,
header.major h5,
header.major h6 {
  display: inline-block;
  margin: 0 0 0.8em;
}

header.major p {
  font-size: 1.7em;
  margin-bottom: 0;
}

@media screen and (max-width: 1280px) {
  header.major {
    margin-bottom: 4em;
  }

  header.major h2 {
    font-size: 2.5em;
  }

  header.major p {
    font-size: 12px;
  }
}

@media screen and (max-width: 980px) {
  header.major h2 {
    font-size: 2em;
  }

  header.major p {
    font-size: 1.1em;
  }
}

@media screen and (max-width: 736px) {
  header.major {
    margin-bottom: 2em;
  }
}

@media screen and (max-width: 480px) {
  header.major h2 {
    font-size: 1.75em;
  }
}

/* Table */

.table-wrapper {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
}

table {
  margin: 0 0 2em 0;
  width: 100%;
}

table tbody tr {
  border: solid 1px rgba(144, 144, 144, 0.25);
  border-left: 0;
  border-right: 0;
}

table tbody tr:nth-child(2n + 1) {
  background-color: rgba(144, 144, 144, 0.075);
}

table td {
  padding: 0.75em 0.75em;
}

table th {
  color: #484848;
  font-size: 0.9em;
  font-weight: 700;
  padding: 0 0.75em 0.75em 0.75em;
  text-align: left;
}

table thead {
  border-bottom: solid 2px rgba(144, 144, 144, 0.25);
}

table tfoot {
  border-top: solid 2px rgba(144, 144, 144, 0.25);
}

table.alt {
  border-collapse: separate;
}

table.alt tbody tr td {
  border: solid 1px rgba(144, 144, 144, 0.25);
  border-left-width: 0;
  border-top-width: 0;
}

table.alt tbody tr td:first-child {
  border-left-width: 1px;
}

table.alt tbody tr:first-child td {
  border-top-width: 1px;
}

table.alt thead {
  border-bottom: 0;
}

table.alt tfoot {
  border-top: 0;
}

/* Wrapper */

body.is-touch .wrapper.style3 {
  background-attachment: scroll;
}

.wrapper {
  padding: 6em 0 4em 0;
}

.wrapper > .inner {
  margin: 0 auto;
  width: 60em;
}

.wrapper.style2 {
  background-color: #f6f6f6;
}

.wrapper.style3 {
  background-attachment: fixed;
  background-image: url(../../assets/overlay.png),
    url(../../assets/bg-login.png);
  background-position: center center;
  background-size: cover;
}

.wrapper.style3 header.major {
  margin-bottom: 3em;
}

.wrapper.style3 header.major h2 {
  color: #ffffff;
}

@media screen and (max-width: 1280px) {
  .wrapper.style3 header.major {
    margin-bottom: 2em;
  }
}

@media screen and (max-width: 980px) {
  .wrapper {
    padding: 4em 0 2em 0;
  }
}

@media screen and (max-width: 736px) {
  .wrapper {
    padding: 3em 0 1em 0;
  }
}

@media screen and (max-width: 480px) {
  .wrapper {
    padding: 2em 0 0.1em 0;
  }
}

/* Header */

#header {
  background-color: #fff;
  border-bottom: solid 1px rgba(144, 144, 144, 0.25);
  box-shadow: 0px 0.0375em 0.125em 0px rgba(0, 0, 0, 0.05);
  color: #484848;
  cursor: default;
  font-size: 1.25em;
  height: 4.5em;
  left: 0;
  line-height: 4.4em;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 10000;
  z-index: 10001;
}

#header h1 {
  color: #484848;
  font-weight: 400;
  height: inherit;
  left: 1.25em;
  line-height: inherit;
  margin: 0;
  padding: 0;
  top: 0;
}

#header nav {
  height: inherit;
  line-height: inherit;
  position: absolute;
  right: 1.25em;
  top: 0;
  vertical-align: middle;
}

#header nav ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

#header nav ul li {
  border-radius: 4px;
  display: inline-block;
  margin-left: 2.5em;
  padding-left: 0;
}

#header nav ul li a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  color: #666;
  display: inline-block;
  text-decoration: none;
}

#header nav ul li a:hover {
  color: #484848;
}

#header nav ul li:first-child {
  margin-left: 0;
}

#header nav ul li .button {
  border-color: rgba(144, 144, 144, 0.25);
  box-shadow: none;
  height: 3em;
  line-height: 2.9em;
  margin-bottom: 0;
  padding: 0 1.5em;
  position: relative;
  top: -0.075em;
  vertical-align: middle;
}

#header .container {
  position: relative;
}

#header .container h1 {
  left: 0;
}

#header .container nav {
  right: 0;
}

#header.alt {
  background-color: transparent;
  border: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  height: 3.25em;
  line-height: 3.25em;
  position: relative;
  background: #313131;
}
section#contact .major p {
  font-size: 14px;
  position: relative;
  margin-top: -20px;
}

#header.alt h1 {
  color: #ffffff;
  left: 2em;
}

#header.alt h1 a {
  color: #fff;
}

#header.alt nav {
  right: 2em;
  font-size: 14px;
}

#header.alt nav a {
  color: #ddd;
}

#header.alt nav a:active,
#header.alt nav a:hover {
  color: #fff;
}

#header.alt .button {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff !important;
}

/* Menu */

.navPanelToggle {
  text-decoration: none;
  text-decoration: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  display: none;
}

.navPanelToggle:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

@media screen and (max-width: 980px) {
  .navPanelToggle {
    display: block;
  }
}

.navPanelToggle *:before {
  background: rgba(144, 144, 144, 0.65);
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 16px;
  height: 2.25em;
  left: 0.5em;
  line-height: 2.25em;
  position: absolute;
  text-align: center;
  top: 0.5em;
  width: 3.5em;
}

#navPanel {
  -moz-transform: translateX(-20em);
  -webkit-transform: translateX(-20em);
  -ms-transform: translateX(-20em);
  transform: translateX(-20em);
  -moz-transition: -moz-transform 0.5s ease, visibility 0.5s;
  -webkit-transition: -webkit-transform 0.5s ease, visibility 0.5s;
  -ms-transition: -ms-transform 0.5s ease, visibility 0.5s;
  transition: transform 0.5s ease, visibility 0.5s;
  -webkit-overflow-scrolling: touch;
  visibility: hidden;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  background: #222;
  color: #fff;
  height: 100%;
  max-width: 80%;
  width: 20em;
  padding: 0.5em 1.25em;
  text-transform: uppercase;
}

#navPanel ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#navPanel ul li {
  padding: 0;
}

#navPanel ul li:first-child a:not(.button),
#navPanel ul li:first-child span:not(.button) {
  border-top: 0;
}

#navPanel ul li a:not(.button),
#navPanel ul li span:not(.button) {
  border-top: solid 1px #555;
  color: #fff;
  display: block;
  padding: 0.75em 0;
  text-decoration: none;
}

#navPanel .button {
  width: 100%;
}

#navPanel .close {
  text-decoration: none;
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  border: 0;
  color: #484848;
  cursor: pointer;
  display: block;
  height: 4em;
  padding-right: 1.25em;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
  vertical-align: middle;
  width: 5em;
}

#navPanel .close:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

#navPanel .close:before {
  content: "\f00d";
  width: 3em;
  height: 3em;
  line-height: 3em;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
}

#navPanel .close:hover {
  color: inherit;
}

@media screen and (max-width: 736px) {
  #navPanel .close {
    height: 4em;
    line-height: 4em;
  }
}

#navPanel.visible {
  -moz-transform: translateX(0);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);
  visibility: visible;
}

/* Banner */

body.is-touch #banner {
  background-attachment: scroll;
}

#banner {
  padding: 16em 0 13em 0;
  background-attachment: fixed;
  background-image: url(../../assets/overlay.png),
    url(../../assets/bg-page-header.jpg);
  background-position: center;
  background-size: cover;
  line-height: 1.75;
  text-align: center;
}

#banner:last-child {
  margin-bottom: 0;
}

#banner h2 {
  color: #ffffff;
  display: inline-block;
  font-size: 3.5em;
  line-height: 1.35;
  margin-bottom: 0.5em;
}

#banner p {
  color: #efefef;
  font-size: 12px;
  margin-bottom: 1.75em;
}

@media screen and (max-width: 1280px) {
  #banner {
    padding: 14em 0 11em 0;
  }

  #banner h2 {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 980px) {
  #banner {
    padding: 9em 0 7em 0;
  }
}

@media screen and (max-width: 736px) {
  #banner {
    padding: 6em 2em 6em 2em;
  }

  #banner br {
    display: none;
  }

  #banner h2 {
    font-size: 2.25em;
  }

  #banner p {
    font-size: 1.25em;
  }
  header.major {
    text-align: center;
  }
}

@media screen and (max-width: 480px) {
  #banner {
    padding: 15em 2em 10em 2em;
  }
  #header nav {
    position: relative;
    top: -30px !important;
    right: 0 !important;
    text-align: center;
    align-items: center;
  }
  section#contact {
    padding-bottom: 30px;
  }
  #header.alt nav a {
    color: #ddd;
    font-size: 10px;
  }
  #header.alt[data-v-61b63126] {
    height: 5.25em;
  }
  h1 {
    text-align: center;
    height: 70px !important;
    width: 100%;
    left: 0 !important;
    top: 24px !important;
  }
  .\36 u[data-v-61b63126],
  .\36 u24[data-v-61b63126] {
    width: 100%;
    clear: none;
    margin-left: 0;
  }
}

/* Main */

#main {
  padding-top: 4em;
}

@media screen and (max-width: 736px) {
  #main {
    padding-top: 2em;
  }
}

/* Footer */

#footer {
  padding: 3em 0 1em 0;
  background: #f6f6f6;
  color: #aaa;
  text-align: center;
}

#footer a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  color: #aaa;
  text-decoration: none;
}

#footer a:active,
#footer a:hover {
  color: #666;
}

#footer .icons {
  font-size: 1.5em;
}

#footer .icons li {
  padding-right: 2.5em;
}

#footer .icons li:last-child {
  padding-right: 0;
}

#footer .copyright {
  margin: 2em 0;
  padding: 0;
  text-align: center;
}

#footer .copyright li {
  border-left: solid 1px rgba(144, 144, 144, 0.25);
  display: inline-block;
  list-style: none;
  margin-left: 1.5em;
  padding-left: 1.5em;
}

#footer .copyright li:first-child {
  border-left: 0;
  margin-left: 0;
  padding-left: 0;
}

@media screen and (max-width: 980px) {
  #footer {
    padding: 6em 0 4em 0;
  }
}

@media screen and (max-width: 736px) {
  #footer {
    padding: 3em 0 2em 0;
  }

  #footer .icons {
    font-size: 1em;
  }
}

@media screen and (max-width: 480px) {
  #footer {
    padding: 3em 0 1em 0;
  }

  #footer .copyright li {
    border-left: 0;
    display: block;
    margin: 0;
    padding: 0;
  }
}
body {
  overflow-x: hidden !important;
}
</style>

