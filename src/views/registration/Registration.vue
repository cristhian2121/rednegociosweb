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
              <!--button close-->
              <div class="close-modal">
                <router-link :to="{ path: '/'}">
                  <i class="material-icons">close</i>
                </router-link>
              </div>
              <!--end button close-->

              <!--form registartion-->
              <div class="modal-body">
                <div>
                  <div class="title">Registro persona natural</div>
                  <br>

                  <formRegistration></formRegistration>

                  <div class="btn-form-end">
                     <router-link class="btn CMXD-btn-business" :to="{ path: '/' }">Volver</router-link>
                      <el-button type="primary" class="btn CMXD-btn-person" v-on:click="registrar()">Registrarme</el-button>
                  </div>
                  </div>
                </div>
              <!--end form registartion-->
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
import axios from "axios";

export default {
  name: "businessRegistration",
  components: {
    formLogin,
    formRegistration
  },
  
  data() {
    return {
      usuario_model: {
        username: null,
        email: null,
        password1: null,
        password2: null
      },
      btn_empresa: "2",
      showModal: true
    };
  },

  mounted() {},
  methods: {
    registrar: function() {
      let validation = this.validation();
      if (validation) return;

        axios({
          method: "post",
          url: "http://68.183.124.242:8000/rest-auth/registration/",
          data: {
            // first_name: document.getElementsByName("name")[0].value,
            // last_name: document.getElementsByName("lastname")[0].value,
            username: document.getElementsByName("email")[1].value,
            email: document.getElementsByName("email")[1].value,
            password1: document.getElementById('pass_registration').value,
            password2: document.getElementById('pass2_registration').value
          }
        })
          .then(respuesta => {
            sessionStorage.setItem("user", document.getElementsByName("email")[1].value);
            if (this.btn_empresa == 1) {
              this.$router.push({ path: "/registration/business" });
            } else {
              this.$router.push({ path: "home" });
            }
          })
          .catch(e => {
            this.$notify({
              message: "La contraseña no coincide",
              type: "warning"
            });
          })
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
    },
    validatePassword() {
      let firstName = document.getElementsByName("name")[0].value;
      let lastName = document.getElementsByName("lastname")[0].value;
      let username = document.getElementsByName("email")[1].value;
      let password1 = this.usuario_model.password1;
      let password2 = this.usuario_model.password2;

      if (password1 === password2) {
        if (!firstName) {

          return { state: false, fail: "firstName" };
        } 
        if (!lastName) return { state: false, message: "El campo apellido es requerido"};
        if (!username) return { state: false, message: "El campo correo electronico es requerido" };
        if (!password1) return { state: false, message: "El campo contraseña es requerido" };
        if (!password2) return { state: false, message: "El campo validar contraseña es requerido" };
        return {
          state: true,
          data: {
              first_name: firstName,
              last_name: lastName,
              username: username,
              email: username,
              password1: password1,
              password2: password2
            }
        };
      } else {
        this.$notify({
          message: "La contraseña no coincide",
          type: "danger"
        });
      }
    }
  }
};
</script>

<style scoped>
/*validation camps*/
.ob_name_reg,.ob_name_reg,.ob_lastname_reg,.long_lastname_reg,.ob_email_reg,
.long_email_reg,.ob_pass_reg,.long_pass_reg,.ob_pass2_reg,.long_pass2_reg {
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