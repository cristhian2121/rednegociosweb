<template>
  <div class="row">
    <div class="form-CMXD row col-md-6">
      <div class="CMXD-icon-form">
        <i class="material-icons">person</i>
      </div>
      <div class="input-effect js-input">
        <input
          class="CMXD-material-input nameReg"
          type="text"
          name="name"
          required
          placeholder="Nombres"
        />
        <span class="focus-border"></span>
        <span class="ob_name_reg text-danger">*Ingrese su nombre.</span>
        <span class="ob_name_reg text-danger">Este nombre excede el máximo de caracteres permitido.</span>
      </div>
    </div>
    <div class="form-CMXD row col-md-6">
      <div class="CMXD-icon-form">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
      <div class="input-effect js-input">
        <input
          class="CMXD-material-input lastnameReg"
          type="text"
          name="lastname"
          required
          placeholder="Apellidos"
        />
        <span class="focus-border"></span>
        <span class="ob_lastname_reg text-danger">*Ingrese al menos un apellido.</span>
        <span
          class="long_lastname_reg text-danger"
        >Este apellido excede el máximo de caracteres permitido.</span>
      </div>
    </div>
    <div class="form-CMXD row col-md-12">
      <div class="CMXD-icon-form">
        <i class="material-icons">email</i>
      </div>
      <div class="input-effect js-input">
        <input
          class="CMXD-material-input emailReg"
          v-model="usuario_model.email"
          type="email"
          name="email"
          required
          placeholder="Correo electrónico"
        />
        <span class="focus-border"></span>
        <span class="ob_email_reg text-danger">Ingrese un correo electrónico valido.</span>
        <span
          class="long_email_reg text-danger"
        >*Este correo excede el máximo de caracteres permitido.</span>
      </div>
    </div>
    <div class="form-CMXD row col-md-6">
      <div class="CMXD-icon-form">
        <i class="material-icons">lock</i>
      </div>
      <div class="input-effect">
        <input
          class="CMXD-material-input passReg"
          id="pass_registration"
          v-model="usuario_model.password1"
          type="password"
          required
          placeholder="Contraseña"
        />
        <span class="focus-border"></span>
        <span class="ob_pass_reg text-danger">Ingrese una contraseña.</span>
        <span
          class="long_pass_reg text-danger"
        >*La contraseña debe contener entre 8 y 65 caracteres.</span>
      </div>
    </div>
    <div class="form-CMXD row col-md-6">
      <div class="CMXD-icon-form">
        <i class="material-icons">lock_open</i>
      </div>
      <div class="input-effect">
        <input
          class="CMXD-material-input pass2Reg"
          id="pass2_registration"
          v-model="usuario_model.password2"
          type="password"
          required
          placeholder="Confirmar contraseña"
        />
        <span class="focus-border"></span>
        <span class="ob_pass2_reg text-danger">Ingrese nuevamente la contraseña.</span>
        <span
          class="long_pass2_reg text-danger"
        >*La contraseña debe contener entre 8 y 65 caracteres.</span>
      </div>
    </div>
  </div>

  <!-- <section class="login-form">
                    <p class="txt-cen">¿Quiere inscribir su empresa?</p>
                    <div class="form-group txt-cen">
                        <el-radio type="radio" v-model="btn_empresa" label="1">Si</el-radio>
                        <el-radio type="radio" v-model="btn_empresa" label="2">No</el-radio>
                    </div>
  </section>-->
</template>

<script>
// import formLogin from "@/components/login/Form_login";
// import axios from "axios";

export default {
  name: "formRegistration",
  data() {
    return {
      usuario_model: {
        username: null,
        email: null,
        password1: null,
        password2: null
      },
      showModal: true
    };
  },
  methods: {
    mirar(){

    }
  }
};
</script>

<style scoped>
/*validation camps*/
.ob_name_reg,
.ob_name_reg,
.ob_lastname_reg,
.long_lastname_reg,
.ob_email_reg,
.long_email_reg,
.ob_pass_reg,
.long_pass_reg,
.ob_pass2_reg,
.long_pass2_reg {
  display: none;
}

body {
  overflow-x: hidden;
}
.CMXD-padding {
  padding: 0 10px;
  margin-bottom: 10px;
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
@media (max-width: 800px) {
  .modal-container {
    max-width: 700px;
    height: 100%;
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
.CMXD-btn-person {
  background: #ff5800;
  color: white;
  border: none;
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
  background: #333333;
  color: white;
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
</style>


