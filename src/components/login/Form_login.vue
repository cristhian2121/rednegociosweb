<template>
  <div id="form_login">
    <div class="row CMXD-padding-container">
      <div class="form-CMXD row col-md-12">
        <div class="CMXD-icon-form">
          <i class="material-icons">person</i>
        </div>
        <div class="input-effect">
            <input class="CMXD-material-input email" v-model="usuario_model.email" type="email" name="email" placeholder="Correo electrónico" required>
            <span class="focus-border"></span>
            <span class='email_type text-danger'>Ingrese un correo electrónico valido.<br></span>
            <span class="long_email text-danger">*Este correo excede el máximo de caracteres permitido.</span>
        </div>
      </div>

      <div class="form-CMXD row col-md-12">
        <div class="CMXD-icon-form">
          <i class="material-icons">lock</i>
        </div>
        <div class="input-effect">
          <input
            class="CMXD-material-input password"
            v-model="usuario_model.password"
            type="password"
            id="password1"
            placeholder="Contraseña"
            required
          >
          <span class="focus-border"></span>
          <span class="long_pass text-danger">*La contraseña debe contener entre 8 y 65 caracteres</span>
        </div>
      </div>

      <div class="col-md-12">
        <div
          class="cont-center g-recaptcha"
          id="recha"
          data-sitekey="6LdOw3UUAAAAADpYeBKGykbrkXelEx6mtlrVI4rb"
        ></div>
        <span class="ob_recap">*No se ha verificado el Captcha</span>
      </div>

      <div class="col-md-12">
        <br>
        <el-button
          type="submit"
          class="btn-lg btn-block CMXD-btn-ok"
          v-on:click="ingresar()"
        >Ingresar</el-button>
      </div>

      <div class="row col-md-12 text-center CMXD-sub-links">
        <div class="col-md-6">
          <a id="show-modal" @click="showModal = true">Registrarme</a>
        </div>
        <div class="col-md-6">
          <a href="#">Olvide Contraseña</a>
        </div>
      </div>
    </div>

    <div>
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
                <label class="register-tipe" for>Selecciona el tipo de registro</label>
                <div class="row">
                  <div class="col-md-6 text-center">
                    <router-link :to="{ path: '/registration'}">
                      <div class="btnr CMXD-btn-person">Persona natural</div>
                    </router-link>
                  </div>
                  <div class="col-md-6 text-center">
                    <router-link :to="{ path: '/registration/business'}">
                      <div class="btnr CMXD-btn-business">Empresa</div>
                    </router-link>
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
  name: "form_login",

  data() {
    return {
      usuario_model: {
        email: null,
        password: null
      },
      respuesta: "",
      showModal: false
    };
  },

  mounted() {
    sessionStorage.removeItem("user");
    grecaptcha.render("recha", {
      sitekey: "6LdOw3UUAAAAADpYeBKGykbrkXelEx6mtlrVI4rb"
    });
  },
  methods: {
    ingresar: function() {
      let validation = this.validation();
      if (validation) return false;

      axios({
        method: "post",
        url: "http://68.183.124.242:8000/rest-auth/login/",
        data: {
          username: this.usuario_model.email,
          email: this.usuario_model.email,
          password: this.usuario_model.password
        }
      })
        .then(respuesta => {
          sessionStorage.setItem("user", this.usuario_model.email);
          this.$router.push({ path: "home" });
        })
        .catch(e => {
          this.$notify({
            message: "El usuario o la contraseña ingresada no coinciden con ninguna cuenta.",
            type: "warning"
          });
        });
    },
    validation: function() {
      let user = document.querySelector(".email").value.trim();
      let pass = document.querySelector(".password").value.trim();
      let recap = grecaptcha.getResponse();
      let emailAux = this.usuario_model.email;
      let typeEmail = this.isValidEmail(emailAux);
      let validator = false; 
      document.querySelector('.email_type').style.display='none';   
      document.querySelector(".long_email").style.display="none";
      document.querySelector(".long_pass").style.display="none";
      document.querySelector(".ob_recap").style.display="none";
      console.log(typeEmail)

      if(user && user.length>65){
        document.querySelector(".long_email").style.display="block";
        validator = true;
      }
      if (pass.length < 8 || pass.length > 50) {
        document.querySelector(".long_pass").style.display = "block";
        validator = true;
      }
      if (!recap) {
        document.querySelector(".ob_recap").style.display = "block";
        validator = true;
      }
      if (!user || user.length < 65) {
        if (typeEmail == false) {
          document.querySelector(".email_type").style.display = "block";
          validator = true;
        }
      }

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
body {
  overflow-x: hidden;
}
.CMXD-padding {
  padding: 0 10px;
  margin-bottom: 10px;
}

/*validation*/
.long_email,
.long_pass {
  display: none;
}
.ob_recap {
  display: none;
  color: #dc3545 !important;
  font-size: 11px;
}

.email_type {
  display: none;
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
@-webkit-keyframes fade-bgl {
  0% {
    width: 120%;
  }

  100% {
    width: 70%;
  }
}
@keyframes fade-bgl {
  0% {
    width: 120%;
  }

  100% {
    width: 70%;
  }
}
@media (max-width: 800px) {
  #CMXD-login .CMXD-bg-login {
    width: 100% !important;
    height: 50% !important;
    transition: 0.2s;
  }
  @-webkit-keyframes fade-bgl {
    0% {
      height: 120%;
    }

    100% {
      height: 50%;
    }
  }
  @keyframes fade-bgl {
    0% {
      height: 120%;
    }

    100% {
      height: 50%;
    }
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
@-webkit-keyframes fade-cont {
  0% {
    left: -60%;
  }

  100% {
    left: 0;
  }
}
@keyframes fade-cont {
  0% {
    left: -60%;
  }

  100% {
    left: 0;
  }
}
@media (max-width: 900px) {
  #CMXD-login .CMXD-container-left {
    width: 80%;
  }
  #CMXD-login .CMXD-container-form {
    width: 54% !important;
  }
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
    width: 100% !important;
    height: 75%;
    transition: 0.2s;
  }
  @-webkit-keyframes fade-cont {
    0% {
      bottom: -10%;
    }

    100% {
      bottom: 40px;
    }
  }
  @keyframes fade-cont {
    0% {
      bottom: -60%;
    }

    100% {
      bottom: 40px;
    }
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
    width: 100% !important;
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
  max-width: 400px;
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
.CMXD-btn-person {
  background: #ff5800;
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
}
a:hover {
  text-decoration: none;
}
@media (max-width: 800px) {
  .modal-container {
    max-width: 270px;
    height: auto !important;
  }
  .modal-body div div:first-child {
    margin-bottom: 5px;
  }
}
</style>
