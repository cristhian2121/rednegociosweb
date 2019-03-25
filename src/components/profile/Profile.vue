<template>
  <div id="search">
    <a class="freepick inside-back" href="http://www.freepik.com">Photo by Freepik</a>
    <MyHeader></MyHeader>
    <div class="bg-home"></div>
    <div class="container-general">
      <div class="title">Mi Perfil</div>
      <div class="row CMXD-padding-container">
        <div class="col-md-12">
          <br>
        </div>
        <div class="form-CMXD row col-md-6 el-col-xs-12">
          <div class="col-md-11 col-xs-11 row">
            <div class="CMXD-icon-form">
              <i class="material-icons">person</i>
            </div>
            <div class="input-effect">
              <label>Correo electrónico</label>
              <input class="CMXD-material-input" disabled value="Prueba@gmail.com">
              <span class="focus-border"></span>
            </div>
          </div>
          <el-button
            class="CMXD-btn-ok btn-small btn-edit"
            id="show-modal"
            @click="showModalEmail = true"
          >
            <i class="material-icons">edit</i>
          </el-button>
        </div>
        <div class="form-CMXD row col-md-6 el-col-xs-12">
          <div class="col-md-11 col-xs-11 row">
            <div class="CMXD-icon-form">
              <i class="material-icons">lock</i>
            </div>
            <div class="input-effect">
              <label>Contraseña</label>
              <input type="password" class="CMXD-material-input" disabled value="1234567890">
              <span class="focus-border"></span>
            </div>
          </div>
          <el-button @click="showModalPassword = true" class="CMXD-btn-ok btn-small btn-edit">
            <i class="material-icons">edit</i>
          </el-button>
        </div>
      </div>
    </div>
    <div class="container-general-2">
      <div class="title">Empresas registradas</div>
      <div class="table-responsive business">
        <br>
        <table class="table-striped">
          <thead>
            <tr>
              <th>Nombre de la Empresa</th>
              <th>NIT / RUT</th>
              <th>Ciudad</th>
              <th class="actions">Visible</th>
              <th class="actions">Editar</th>
              <th class="actions">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prueba1</td>
              <td>0000000</td>
              <td>Medellín</td>
              <td>
                <i class="material-icons">check</i>
              </td>
              <td>
                <router-link :to="{ path: '/profile/edit/empresa' }">
                  <div class="btn CMXD-btn-ok btn-small">
                    <i class="material-icons">edit</i>
                  </div>
                </router-link>
              </td>
              <td>
                <el-button class="CMXD-btn-grey btn-small">
                  <i class="material-icons">delete</i>
                </el-button>
              </td>
            </tr>
            <tr>
              <td>Prueba2</td>
              <td>0000000</td>
              <td>Medellín</td>
              <td>
                <i class="material-icons">check</i>
              </td>
              <td>
                <router-link :to="{ path: '/profile/edit/empresa' }">
                  <div class="btn CMXD-btn-ok btn-small">
                    <i class="material-icons">edit</i>
                  </div>
                </router-link>
              </td>
              <td>
                <el-button class="CMXD-btn-grey btn-small">
                  <i class="material-icons">delete</i>
                </el-button>
              </td>
            </tr>
            <tr>
              <td>Prueba3</td>
              <td>0000000</td>
              <td>Medellín</td>
              <td>
                <i class="material-icons">clear</i>
              </td>
              <td>
                <router-link :to="{ path: '/profile/edit/empresa' }">
                  <div class="btn CMXD-btn-ok btn-small">
                    <i class="material-icons">edit</i>
                  </div>
                </router-link>
              </td>
              <td>
                <el-button class="CMXD-btn-grey btn-small">
                  <i class="material-icons">delete</i>
                </el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="app">
      <div v-if="showModalEmail" @close="showModalEmail = false">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="close-modal">
                <button @click="showModalEmail = false">
                  <i class="material-icons">close</i>
                </button>
              </div>
              <div class="modal-body">
                <label class="register-tipe" for>Editar Correo Electrónico</label>
                <div class="row">
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">person</i>
                    </div>
                    <div class="input-effect">
                      <input
                        class="CMXD-material-input"
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        required
                      >
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="text-center col-md-12">
                    <el-button
                      type="primary"
                      class="btn CMXD-btn-ok"
                      v-on:click="registrar()"
                    >Restablecer Correo</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="app">
      <div v-if="showModalPassword" @close="showModalPassword = false">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="close-modal">
                <button @click="showModalPassword = false">
                  <i class="material-icons">close</i>
                </button>
              </div>
              <div class="modal-body">
                <label class="register-tipe" for>Editar Contraseña</label>
                <div class="row">
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">lock</i>
                    </div>
                    <div class="input-effect">
                      <input
                        class="CMXD-material-input"
                        type="password"
                        required
                        placeholder="Contraseña"
                      >
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">lock_open</i>
                    </div>
                    <div class="input-effect">
                      <input
                        class="CMXD-material-input"
                        type="password"
                        required
                        placeholder="Confirmar contraseña"
                      >
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="text-center col-md-12">
                    <el-button
                      type="primary"
                      class="btn CMXD-btn-ok"
                      v-on:click="registrar()"
                    >Restablecer Contraseña</el-button>
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
import MyHeader from "@/components/header/Header";

export default {
  name: "profile",
  components: {
    MyHeader
  },
  data() {
    return {
      showModalEmail: false,
      showModalPassword: false
    };
  }
};
</script>

<style scoped>
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
button.el-button.CMXD-btn-grey.btn-small.el-button--default i {
  font-size: 16px;
}
a .btn.CMXD-btn-ok.btn-small {
  font-size: 12px;
  padding: 9px;
  width: 50px;
}
button.el-button.CMXD-btn-ok.btn-small.el-button--default {
  font-size: 12px;
  width: 50px;
  height: 30px;
  text-align: center;
  padding: 0;
}
.form-CMXD.col-md-6 {
  min-width: 52% !important;
}
a .btn.CMXD-btn-ok.btn-small i {
  font-size: 16px;
  position: relative;
  top: -4px;
}
.modal-body .input-effect {
  margin-left: 5px;
  width: 90%;
}
button.el-button.CMXD-btn-ok.btn-small.el-button--default i {
  font-size: 16px;
}
@media (max-width: 775px) {
  button.el-button.CMXD-btn-ok.btn-small.btn-edit {
    width: 89% !important;
    margin-left: 12px !important;
    margin-top: 10px !important;
  }
}
@media (max-width: 675px) {
  .form-CMXD.col-md-6 {
    min-width: 100% !important;
  }
  .form-CMXD.row.col-md-6 .input-effect {
    width: 87% !important;
}
}
</style>
