<template>
  <div id="CMXD-login" class="flex flex-center">
    <a class="freepick" href="http://www.freepik.com">Photo by Freepik</a>
    
    <formLogin></formLogin>

    <div class="CMXD-bg-login"></div>
    <!-- app -->
    <div id="app">
      <div v-if="showModal" @close="showModal = true">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <!--Button close-->
              <div class="close-modal">
                <router-link :to="{ path: '/'}">
                  <i class="material-icons">close</i>
                </router-link>
              </div>
              <!--end button close-->

              <div class="modal-body" v-if="!carga">
                <div class="title">Registro empresa o negocio</div>
                <br>
                <formRegistration></formRegistration>
                <br>
                <formRegbusiness></formRegbusiness>


                <!-- Button (Double) -->
                <!-- <div class="btn-form-end">
                  <router-link class="btn CMXD-btn-business" :to="{ path: '/'}">Volver</router-link>
                  <el-button
                    type="primary"
                    class="btn CMXD-btn-person"
                    v-on:click="validateBeforeSubmit"
                  >Registrarme</el-button>
                </div>
                <div class="img-rigth col-md-2 col-lg-2"></div> -->

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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formLogin from "@/components/login/Form_login";
import formRegistration from "@/components/registration/Form_registration";
import formRegbusiness from "@/components/registro_empresa/Form_regbusiness";

import axios from "axios";
export default {
  name: "registro_empresa",
  components: {
    formLogin,
    formRegistration,
    formRegbusiness
  },
  async mounted() {
    await this.traer_ciudaes();
    await this.traer_tipos();
    this.carga = false;
  },
  data() {
    return {
      showModal: true,
      value10: "",
      empresaModel: {
        nombre: null,
        nit: null,
        id_tipo: null,
        id_ciudad: null,
        direccion: null,
        telefono: null,
        celular: null,
        email: null,
        logo: null,
        mision: null,
        fecha_registro: null
      },
      servicioModel: {
        nombre_ser_1: null,
        ser_1: null,
        imagen1: null,
        nombre_ser_2: null,
        ser_2: null,
        imagen2: null,
        nombre_ser_3: null,
        ser_3: null,
        imagen3: null,
        nombre_ser_4: null,
        ser_4: null,
        imagen4: null,
        nombre_ser_5: null,
        ser_5: null,
        imagen5: null,
        nombre_ser_6: null,
        ser_6: null,
        imagen6: null,
        nombre_ser_7: null,
        ser_7: null,
        imagen7: null,
        nombre_ser_8: null,
        ser_8: null,
        imagen8: null,
        nombre_ser_9: null,
        ser_9: null,
        imagen9: null,
        nombre_ser_10: null,
        ser_10: null,
        imagen10: null
      },
      ciudades: [
        {
          id_ciudad: null,
          departamento: null,
          ciudad: null
        }
      ],
      tipos: [
        {
          id_tipo: null,
          nombre: null
        }
      ],
      radio_servicios: 1,
      servicio_2: false,
      servicio_3: false,
      servicio_4: false,
      servicio_5: false,
      servicio_6: false,
      servicio_7: false,
      servicio_8: false,
      servicio_9: false,
      servicio_10: false,
      registro_formulario: false,
      alerta_formulario: false,
      error_formulario: false,
      carga: true,
      id_empresa: null,
      id_archivo: null,
      empresa_nombre: null
    };
  },
  methods: {
    enviar_formulario: function() {
      this.carga = true;
      axios({
        method: "post",
        url: "http://68.183.124.242:8000/api/empresa/",
        data: {
          nombre: this.empresaModel.nombre,
          nit: this.empresaModel.nit,
          direccion: this.empresaModel.direccion,
          telefono: this.empresaModel.telefono,
          celular: this.empresaModel.celular,
          email: this.empresaModel.email,
          mision: this.empresaModel.mision,
          id_tipo: this.empresaModel.id_tipo,
          id_ciudad: this.empresaModel.id_ciudad,
          id_archivo: this.id_archivo,
          instagram: this.empresaModel.instagram,
          facebook: this.empresaModel.facebook,
          youtube: this.empresaModel.youtube
        }
      }).then(respuesta => {
        this.id_empresa = respuesta.data.id_empresa;
        this.empresa_nombre = respuesta.data.nombre;
        if (this.id_empresa) {
          this.enviar_servicios();
        }
      });
    },

    enviar_servicios: function() {
      axios({
        method: "post",
        url: "http://68.183.124.242:8000/api/servicio/",
        data: {
          id_empresa: this.id_empresa,
          nombre_ser_1: this.servicioModel.nombre_ser_1,
          ser_1: this.servicioModel.ser_1,
          nombre_ser_2: this.servicioModel.nombre_ser_2,
          ser_2: this.servicioModel.ser_2,
          nombre_ser_3: this.servicioModel.nombre_ser_3,
          ser_3: this.servicioModel.ser_3,
          nombre_ser_4: this.servicioModel.nombre_ser_4,
          ser_4: this.servicioModel.ser_4,
          nombre_ser_5: this.servicioModel.nombre_ser_5,
          ser_5: this.servicioModel.ser_5,
          nombre_ser_6: this.servicioModel.nombre_ser_6,
          ser_6: this.servicioModel.ser_6,
          nombre_ser_7: this.servicioModel.nombre_ser_7,
          ser_7: this.servicioModel.ser_7,
          nombre_ser_8: this.servicioModel.nombre_ser_8,
          ser_8: this.servicioModel.ser_8,
          nombre_ser_9: this.servicioModel.nombre_ser_9,
          ser_9: this.servicioModel.ser_9,
          nombre_ser_10: this.servicioModel.nombre_ser_10,
          ser_10: this.servicioModel.ser_10
        }
      });
    },
    traer_ciudaes: async function() {
      axios.get("http://68.183.124.242:8000/api/ciudad/").then(respuesta => {
        this.ciudades = respuesta.data;
      });
    },
    traer_tipos: async function() {
      axios.get("http://68.183.124.242:8000/api/tipo/").then(respuesta => {
        this.tipos = respuesta.data;
      });
    },
    // usuario: async function(){
    //   await axios.get("")
    // }
    cambio_servicios: function() {
      switch (this.radio_servicios) {
        case 1:
          this.servicio_2 = false;
          this.servicio_3 = false;
          this.servicio_4 = false;
          this.servicio_5 = false;
          this.servicio_6 = false;
          this.servicio_7 = false;
          this.servicio_8 = false;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 2:
          this.servicio_2 = true;
          this.servicio_3 = false;
          this.servicio_4 = false;
          this.servicio_5 = false;
          this.servicio_6 = false;
          this.servicio_7 = false;
          this.servicio_8 = false;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 3:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = false;
          this.servicio_5 = false;
          this.servicio_6 = false;
          this.servicio_7 = false;
          this.servicio_8 = false;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 4:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = true;
          this.servicio_5 = false;
          this.servicio_6 = false;
          this.servicio_7 = false;
          this.servicio_8 = false;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 5:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = true;
          this.servicio_5 = true;
          this.servicio_6 = false;
          this.servicio_7 = false;
          this.servicio_8 = false;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 6:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = true;
          this.servicio_5 = true;
          this.servicio_6 = true;
          this.servicio_7 = false;
          this.servicio_8 = false;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 7:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = true;
          this.servicio_5 = true;
          this.servicio_6 = true;
          this.servicio_7 = true;
          this.servicio_8 = false;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 8:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = true;
          this.servicio_5 = true;
          this.servicio_6 = true;
          this.servicio_7 = true;
          this.servicio_8 = true;
          this.servicio_9 = false;
          this.servicio_10 = false;
          break;
        case 9:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = true;
          this.servicio_5 = true;
          this.servicio_6 = true;
          this.servicio_7 = true;
          this.servicio_8 = true;
          this.servicio_9 = true;
          this.servicio_10 = false;
          break;
        case 10:
          this.servicio_2 = true;
          this.servicio_3 = true;
          this.servicio_4 = true;
          this.servicio_5 = true;
          this.servicio_6 = true;
          this.servicio_7 = true;
          this.servicio_8 = true;
          this.servicio_9 = true;
          this.servicio_10 = true;
          break;
      }
    },
    mensaje_exito: function() {
      this.$notify.success({
        message: "Exito, Se ha agregado una nueva empresa.",
        type: "success"
      });
    },
    mensaje_error() {
      this.$notify.error({
        title: "Ops",
        message: "Ha ocurrido un error intentalo nuevamente"
      });
    },
    mensaje_informacion() {
      this.$notify.info({
        title: "Por favor",
        message: "Valida los campos del formulario"
      });
    },
    exceso_archivos() {
      this.$notify.warning({
        title: "Alerta",
        message: "Ha excedido el limite e archivos"
      });
    },
    validateBeforeSubmit() {
      let validation = this.validation();
      if (validation) return;

      this.$validator.validateAll().then(result => {
        if (result) {
          this.enviar_formulario();
          return;
        }
        this.mensaje_informacion();
        return;
      });
    },
    validation: function(){
      let name = document.querySelector(".nameReg").value.trim();
      let lastname = document.querySelector(".lastnameReg").value.trim();
      let email = document.querySelector(".emailReg").value.trim();
      let pass = document.querySelector(".passReg").value.trim();
      let pass2 = document.querySelector(".pass2Reg").value.trim();

      let typeEmail = this.isValidEmail(email);
      let validator= false;

      document.querySelector(".ob_name_reg").style.display="none";
      document.querySelector(".ob_name_reg").style.display="none";
      document.querySelector(".ob_lastname_reg").style.display="none";
      document.querySelector(".long_lastname_reg").style.display="none";
      document.querySelector(".ob_email_reg").style.display="none";
      document.querySelector(".long_email_reg").style.display="none";
      document.querySelector(".ob_pass_reg").style.display="none";
      document.querySelector(".long_pass_reg").style.display="none";
      document.querySelector(".ob_pass2_reg").style.display="none";
      document.querySelector(".long_pass2_reg").style.display="none";

      if (!name) {document.querySelector(".ob_name_reg").style.display = "block"; validator = true;}
      if (!lastname) {document.querySelector(".ob_lastname_reg").style.display = "block"; validator = true;}
      if (!email || email.length < 65) {
        if (typeEmail == false) {
          document.querySelector(".ob_email_reg").style.display = "block";
          validator = true;
        }
      }
      if (pass.length <8 || pass.length > 65) {document.querySelector(".long_pass_reg").style.display = "block"; validator = true;}
      if (!pass2) {document.querySelector(".ob_pass2_reg").style.display = "block"; validator = true;}
      //if (pass2.length <8 || pass2.length > 50) {document.querySelector(".ob_name_reg").style.display = "block"; validator = true;}

      if (validator) return true;
      return false;
    },
    isValidEmail: function(mail) {
        //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
        return /\S+@\S+\.\S+/.test(mail);
    }
  }
};
</script>

<style scoped>
.el-radio-group label {
  width: 10%;
}
.el-radio + .el-radio {
  margin-left: 0px !important;
}
body {
  overflow-x: hidden;
}
.CMXD-padding {
  padding: 0 10px;
  margin-bottom: 10px;
}
.label-circle,
.container-circle,
.el-radio-group,
.btn-services {
  width: 100%;
}
.label-circle label {
  font-size: 14px;
}
.container-circle {
  padding: 0 15px;
}
.el-radio-group {
  text-align: center;
}

/*Background*/
#CMXD-login .CMXD-bg-login {
  position: fixed;
  width: 70%;
  height: 100%;
  top: 0;
  right: 0;
  background-image: url(../../assets/bg-login.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  -webkit-animation-name: fade-bgl;
  -webkit-animation-duration: 1s;
  animation-name: fade-bgl;
  animation-duration: 1s;
  transition: 0.2s;
}
@media (max-width: 800px) {
  #CMXD-login .CMXD-bg-login {
    width: 100% !important;
    height: 70% !important;
    transition: 0.2s;
  }
  .el-radio-group label {
    width: 20%;
  }
}
/*End Background*/

/*Container General*/
#CMXD-login .CMXD-container-left {
  z-index: 1;
  background: linear-gradient(
    to right,
    white,
    white,
    white,
    white,
    #ffffffed,
    #ffffff7a,
    #ffffff00
  );
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  -webkit-animation-name: fade-cont;
  /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 1s;
  /* Safari 4.0 - 8.0 */
  animation-name: fade-cont;
  animation-duration: 1s;
  transition: 0.2s;
}

@media (max-width: 800px) {
  #CMXD-login .CMXD-container-left {
    background: linear-gradient(
      to top,
      white,
      white,
      white,
      white,
      #ffffffed,
      #ffffff7a,
      #ffffff00
    );
    bottom: 40px;
    left: 0;
    top: auto;
    width: 100%;
    height: 60%;
    transition: 0.2s;
  }
}
/*End Container General*/

/*Container Form*/
#CMXD-login .CMXD-container-form {
  position: fixed;
  width: 40%;
  height: 100%;
  padding: 30px;
  transition: 0.2s;
}
#CMXD-login .CMXD-form-login {
  width: 450px;
  margin: auto;
  transition: 0.2s;
}
#CMXD-login .CMXD-logo {
  height: 70px;
  background-image: url(../../assets/logo-line.png);
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 5px;
  transition: 0.2s;
}
#CMXD-login .CMXD-form-inputs {
  max-width: 350px;
  margin: auto;
  margin-bottom: 250px;
  transition: 0.2s;
}
#CMXD-login .CMXD-form-inputs p {
  color: #6b6b6b !important;
  font-size: 13px;
  position: relative;
  top: -5px;
}
.CMXD-sub-links a {
  font-size: 12px;
  color: #9a9a9a !important;
  text-decoration: none !important;
}
.CMXD-sub-links a:focus,
.CMXD-sub-links a:active,
.CMXD-sub-links a:hover {
  font-size: 12px;
  color: #000000 !important;
  text-decoration: none !important;
  cursor: pointer !important;
}
.CMXD-sub-links div:first-child {
  border-right: 1px solid #e4e0e0;
}
.CMXD-sub-links {
  position: relative;
  top: 10px;
}
.CMXD-padding-container {
  padding: 0 20px;
}
@media (max-width: 1240px) {
  /* #CMXD-login .CMXD-logo {
    background-size: 70% auto;
    transition: .2s;
  } */
}
@media (max-width: 800px) {
  #CMXD-login .CMXD-container-form {
    width: 100%;
    transition: 0.2s;
  }
  .CMXD-icon-form {
    width: auto !important;
    float: left !important;
  }
  .CMXD-sub-links div {
    width: 50%;
  }
}
/*End Container Form*/

/*Footer*/
#CMXD-login .CMXD-footer {
  position: absolute;
  max-width: 350px;
  bottom: 0;
  padding: 15px 0;
  text-align: center;
  font-size: 12px;
  color: #616161;
}
#CMXD-login .CMXD-footer a {
  color: #000000;
  font-weight: 600;
  text-decoration: none;
}
.CMXD-copyright span {
  font-size: 10px;
  position: relative;
  top: -5px;
}
/* End Footer */

/*MODAL*/
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
}

.modal-container {
  height: 90%;
  overflow: auto;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 700px;
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
@media (max-width: 800px) {
  .modal-container {
    max-width: 700px;
    height: 100%;
  }
  .modal-container {
    height: 100% !important;
    overflow: auto;
  }
  @-webkit-keyframes fade-bg-modal-model {
    0% {
      position: absolute;
      top: 100%;
    }
    20% {
      position: absolute;
      top: 100%;
    }
    100% {
      position: absolute;
      top: 0%;
    }
  }
  @keyframes fade-bg-modal-model {
    0% {
      position: absolute;
      top: 100%;
    }
    20% {
      position: absolute;
      top: 100%;
    }
    100% {
      position: absolute;
      top: 0%;
    }
  }
}
.acept {
  font-size: 12px;
  color: grey;
  padding-left: 10px;
  text-align: justify;
}
.acept a {
  color: #ff5800;
}
.CMXD-btn-person {
  background: #ff5800 !important;
  color: white;
  border: none !important;
}
.CMXD-btn-person:hover,
.CMXD-btn-person:focus,
.CMXD-btn-person:active {
  background: #ff762d !important;
  color: white !important;
  border: none !important;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.4) !important;
  transition: 0.2s;
  outline: none;
  text-decoration: none;
}
.CMXD-btn-business {
  background: #333333 !important;
  color: white !important;
}
.CMXD-btn-business.el-button {
  width: 100% !important;
}
.el-upload.el-upload--text {
  width: 100%;
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
a:hover {
  text-decoration: none;
}
.btn-form-end {
  margin-top: 30px;
  text-align: center;
}
.btn-form-end a,
.btn-form-end button {
  width: 120px;
}
.btn-form-end a {
  margin-right: 10px;
}
</style>