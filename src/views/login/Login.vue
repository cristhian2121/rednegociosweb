<template>
  <div id="CMXD-login" class="flex flex-center">
    <Loader v-if="loader"></Loader>
    <a class="freepick" href="http://www.freepik.com">Photo by Freepik</a>
 
    <formLogin></formLogin>

    <div class="CMXD-bg-login"></div>
  </div>
</template>

<script>
import formLogin from '@/components/login/Form_login';
import Loader from '@/components/comunes/loader'
export default {
  name: "login",
  components: {
    formLogin,
    Loader
  },
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
