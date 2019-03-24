<template>
  <div id="CMXD-login" class="flex flex-center">
    <a class="freepick" href="http://www.freepik.com">Photo by Freepik</a>
    <div class="CMXD-container-left">
      <div class="CMXD-container-form flex flex-center">
        <div class="CMXD-form-login">
          <div class="CMXD-logo"></div>
          <div class="CMXD-form-inputs">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>
                  Eso que
                  <span>necesitas</span>, en un solo lugar.
                </p>
              </div>
              <div>
                <br>
                <div class="row CMXD-padding-container">
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">person</i>
                    </div>
                    <div class="input-effect">
                      <input class="CMXD-material-input" placeholder="Correo electrónico">
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">lock</i>
                    </div>
                    <div class="input-effect">
                      <input class="CMXD-material-input" placeholder="Contraseña">
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <!-- <div class="col-md-12"><br>
                                <div class="cont-center g-recaptcha" data-sitekey="6LdOw3UUAAAAADpYeBKGykbrkXelEx6mtlrVI4rb"></div>
                  </div>-->
                  <div class="col-md-12">
                    <br>
                    <el-button class="btn-lg btn-block CMXD-btn-ok">Ingresar</el-button>
                  </div>
                  <div class="row col-md-12 text-center CMXD-sub-links">
                    <div class="col-md-6">
                      <a id="show-modal">Registrarme</a>
                    </div>
                    <div class="col-md-6">
                      <a href="#">Olvide Contraseña</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="CMXD-footer">
          <div class="CMXD-copyright">Copyright © 2019 Med/Col
            <br>
            <span>
              Desing by
              <a href="http://cmxdesign.000webhostapp.com/" target="_black">CMX-Desing</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="CMXD-bg-login"></div>
    <!-- app -->
    <div id="app">
      <div v-if="showModal" @close="showModal = true">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="close-modal">
                <router-link :to="{ path: '/'}">
                  <i class="material-icons">close</i>
                </router-link>
              </div>
              <div class="modal-body" v-if="!carga">
                <div class="title">Registro empresa o negocio</div>
                <br>
                <div class="row">
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">person</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        type="text"
                        name="name"
                        required
                        placeholder="Nombres"
                      >
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">keyboard_arrow_right</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        type="text"
                        name="lastname"
                        required
                        placeholder="Apellidos"
                      >
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">email</i>
                    </div>
                    <div class="input-effect js-input">
                      <input class="CMXD-material-input" placeholder="Correo electrónico">
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">lock</i>
                    </div>
                    <div class="input-effect">
                      <input class="CMXD-material-input" placeholder="Contraseña">
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">lock_open</i>
                    </div>
                    <div class="input-effect">
                      <input class="CMXD-material-input" placeholder="Confirmar contraseña">
                      <span class="focus-border"></span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>
                <br>
                <div class="title-business">Información general</div>
                <br>
                <div class="row">
                  <!--Info empresa-->
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">domain</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        name="nombre"
                        type="text"
                        placeholder="Nombre de la empresa"
                        v-model="empresaModel.nombre"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <span v-show="errors.has('nombre')" class="text-warning"></span>
                      <span v-show="errors.has('nombre')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>

                  <!--nit/rut-->
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">share</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        name="nit"
                        type="number"
                        v-model="empresaModel.nit"
                        v-validate="'required|max:10'"
                        placeholder="NIT o RUT"
                      >
                      <span class="focus-border"></span>
                      <span v-show="errors.has('nit')" class="text-danger">*Maximo 10 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>

                  <!-- departamento -->
                  <!-- <div class="col-sm-6 col-md-3">
                          <div class="form-group" >
                            <label class="control-label">Departamento</label>
                            <el-select name="departamento" v-model="empresaModel.id_ciudad" clearable placeholder="Seleccionar" v-validate="'required'">
                              <el-option v-for="ciudad in ciudades" :key="ciudad.id_ciudad" 
                              :label="ciudad.departamento" :value="ciudad.id_ciudad"></el-option>
                            </el-select>
                            <span v-show="errors.has('departamento')" class="text-danger">*Este campo es requerido</span>
                          </div>
                  </div>-->
                  <!-- ciudad -->
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">location_city</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Ciudad</label>
                      <select
                        class="CMXD-material-input"
                        v-model="empresaModel.id_ciudad"
                        clearable
                        placeholder="Seleccionar"
                      >
                        <option
                          v-for="ciudad in ciudades"
                          :key="ciudad.id_ciudad"
                          :label="ciudad.ciudad"
                          :value="ciudad.id_ciudad"
                        ></option>
                      </select>
                    </div>
                  </div>

                  <!-- dirección-->
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">place</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        id="dir_emp"
                        name="direccion"
                        type="text"
                        placeholder="Dirección"
                        v-model="empresaModel.direccion"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('direccion')" class="text-warning"></i>
                    </div>
                  </div>
                  <div class="clear-fix"></div>

                  <!-- Teléfono-->
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">phone</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        name="telefono"
                        type="number"
                        placeholder="Teléfono"
                        v-model="empresaModel.telefono"
                        v-validate="'max:7'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('telefono')" class="text-warning"></i>
                      <span v-show="errors.has('telefono')" class="text-danger">*Máximo 7 caracteres</span>
                    </div>
                  </div>

                  <!-- celular -->
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">smartphone</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        id="cel_emp"
                        name="celular"
                        type="number"
                        placeholder="Celular / Whatsapp"
                        v-model="empresaModel.celular"
                        v-validate="'max:10'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('celular')" class="text-warning"></i>
                      <span v-show="errors.has('celular')" class="text-danger">*Máximo 10 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>

                  <!-- Email-->
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">email</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        id="email_emp"
                        name="email"
                        type="email"
                        placeholder="Correo electrónico de la empresa"
                        v-model="empresaModel.email"
                        v-validate="'email'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('email')" class="text-warning"></i>
                      <span v-show="errors.has('email')" class="text-danger">*Campo requerido</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>
                <br>
                <!--Sobre nosotros-->
                <div class="title-business">Sobre la empresa</div>
                <br>
                <div class="row">
                  <!--sección-->
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">location_city</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>¿En que sección desea aparecer?</label>
                      <select
                        class="CMXD-material-input"
                        v-model="empresaModel.id_tipo"
                        clearable
                        placeholder="Seleccionar sección"
                      >
                        <option
                          v-for="tipo in tipos"
                          :key="tipo.id_tipo"
                          :label="tipo.nombre"
                          :value="tipo.id_tipo"
                        ></option>
                      </select>
                    </div>
                  </div>

                  <!--Logo-->
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://sfo2.digitaloceanspaces.com"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                      :on-success="logo_cargado"
                    >
                      <el-button
                        size="small"
                        class="CMXD-btn-ok"
                      >Click para cargar logo de la empresa</el-button>
                      <div
                        slot="tip"
                        class="el-upload__tip text-center"
                      >Solo archivos jpg/png con un tamaño menor de 500kb</div>
                    </el-upload>
                  </div>
                  <div class="clear-fix"></div>

                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">insert_link</i>
                    </div>
                    <div class="input-effect js-input">
                      <input
                        class="CMXD-material-input"
                        id="email_emp"
                        name="email"
                        type="email"
                        placeholder="Dominio o URL de la empresa"
                        v-validate="'email'"
                      >
                    </div>
                  </div>

                  <!--Logo-->
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://sfo2.digitaloceanspaces.com"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                      :on-success="logo_cargado"
                    >
                      <el-button size="small" class="CMXD-btn-ok">Banner</el-button>
                      <div slot="tip" class="el-upload__tip text-center">Maximo 3 archivos</div>
                    </el-upload>
                  </div>
                  <div class="clear-fix"></div>

                  <!--Sobre nosotros-->
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Quienes Somos o Sobre Nosotros</label>
                      <input
                        class="CMXD-material-input"
                        type="textarea"
                        name="mision"
                        placeholder="Escriba un resumen detallado sobre quienes son"
                        v-model="empresaModel.mision"
                        v-validate="'required|max:200'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('mision')" class="text-warning"></i>
                      <span v-show="errors.has('mision')" class="text-danger">*Maximo 200 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>
                <br>
                <div class="title-business">Servicios</div>
                <br>

                <!-- Servicio 1-->
                <div class="row">
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 1</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_1"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_1"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_1')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_1')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_1"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_1"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 2-->
                <div class="row" v-if="servicio_2">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 2</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_2"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_2"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_2')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_2')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_2"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_2"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 3-->
                <div class="row" v-if="servicio_3">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 3</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_3"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_3"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_3')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_3')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_3"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_3"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 4-->
                <div class="row" v-if="servicio_4">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 4</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_4"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_4"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_4')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_4')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_4"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_4"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 5-->
                <div class="row" v-if="servicio_5">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 5</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_5"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_5"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_5')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_5')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_5"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_5"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 6-->
                <div class="row" v-if="servicio_6">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 6</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_6"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_6"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_6')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_6')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_6"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_6"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 7-->
                <div class="row" v-if="servicio_7">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 7</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_7"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_7"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_7')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_7')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_7"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_7"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 8-->
                <div class="row" v-if="servicio_8">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 8</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_8"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_8"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_8')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_8')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_8"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_8"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 9-->
                <div class="row" v-if="servicio_9">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 9</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_9"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_9"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_9')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_9')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_9"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_9"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>

                <!-- Servicio 10-->
                <div class="row" v-if="servicio_10">
                  <div class="col-md-12">
                    <hr>
                    <br>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">notifications</i>
                    </div>
                    <div class="input-effect js-input">
                      <label>Servicio 10</label>
                      <input
                        class="CMXD-material-input"
                        name="nombre_ser_10"
                        type="text"
                        placeholder="Nombre servicio"
                        v-model="servicioModel.nombre_ser_10"
                        v-validate="'required|max:20'"
                      >
                      <span class="focus-border"></span>
                      <i v-show="errors.has('nombre_ser_10')" class="text-warning"></i>
                      <span
                        v-show="errors.has('nombre_ser_10')"
                        class="text-danger"
                      >*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <el-upload
                      action="http://68.183.124.242:8000/api/archivo/"
                      multiple
                      :limit="1"
                      class="btn-services"
                      :on-exceed="exceso_archivos"
                    >
                      <el-button
                        class="el-button el-button--default el-button--small CMXD-btn-business"
                        plain
                      >
                        <span class="el-icon-upload"></span>
                      </el-button>
                    </el-upload>
                  </div>
                  <div class="form-CMXD row col-md-12">
                    <div class="CMXD-icon-form">
                      <i class="material-icons">title</i>
                    </div>
                    <div class="input-effect js-input textarea-animation">
                      <textarea
                        class="CMXD-material-input"
                        name="ser_10"
                        placeholder="Describa el servicio"
                        v-model="servicioModel.ser_10"
                        v-validate="'required|max:20'"
                      ></textarea>
                      <span class="focus-border"></span>
                      <i v-show="errors.has('ser_3')" class="text-warning"></i>
                      <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
                    </div>
                  </div>
                  <div class="clear-fix"></div>
                </div>
                <div class="text-center">
                  <el-button type="primary" class="btn CMXD-btn-person">Añadir nuevo servicio</el-button>
                </div>
                <!--Info representate-->
                <!--Banner-->
                <!-- <label class="control-label">Cargar imagenes para banner</label>
                        <div class="row">
                          <div class="col-sm-4 col-md-4">
                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                              <i class="el-icon-plus"></i>
                            </el-upload>
                          </div>
                          <div class=" col-sm-4 col-md-4">
                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                              <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                          </div>
                          <div class=" col-sm-4 col-md-4">
                            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                              <i class="el-icon-plus"></i>
                            </el-upload>
                          </div>
                        </div>
                <br>-->
                <br>
                <!--Redes sociales-->
                <div class="title-business">Redes sociales</div>
                <br>
                <div class="row">
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <img src="@/assets/facebook.png" alt>
                    </div>
                    <div class="input-effect js-input">
                      <label>Facebook</label>
                      <input
                        class="CMXD-material-input"
                        name="facebook"
                        type="text"
                        placeholder="Ruta"
                        v-model="empresaModel.facebook"
                        v-validate="'max:100'"
                      >
                      <span class="focus-border"></span>
                      <span v-show="errors.has('facebook')" class="text-warning"></span>
                      <span
                        v-show="errors.has('facebook')"
                        class="text-danger"
                      >*Maximo 100 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <img src="@/assets/instagram.png" alt>
                    </div>
                    <div class="input-effect js-input">
                      <label>Instagram</label>
                      <input
                        class="CMXD-material-input"
                        name="twitter"
                        type="text"
                        placeholder="Ruta"
                        v-model="empresaModel.instagram"
                        v-validate="'max:100'"
                      >
                      <span v-show="errors.has('twitter')" class="text-warning"></span>
                      <span
                        v-show="errors.has('twitter')"
                        class="text-danger"
                      >*Maximo 100 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <img src="@/assets/twitter.png" alt>
                    </div>
                    <div class="input-effect js-input">
                      <label>Twitter</label>
                      <input
                        class="CMXD-material-input"
                        placeholder="Ruta"
                        name="youtube"
                        type="text"
                        v-model="empresaModel.youtube"
                        v-validate="'max:100'"
                      >
                      <span v-show="errors.has('twitter')" class="text-warning"></span>
                      <span
                        v-show="errors.has('twitter')"
                        class="text-danger"
                      >*Maximo 100 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <img src="@/assets/whatsapp.png" alt>
                    </div>
                    <div class="input-effect js-input">
                      <label>Whatsapp</label>
                      <input
                        class="CMXD-material-input"
                        placeholder="Ruta"
                        name="youtube"
                        type="text"
                        v-model="empresaModel.youtube"
                        v-validate="'max:100'"
                      >
                      <span v-show="errors.has('twitter')" class="text-warning"></span>
                      <span
                        v-show="errors.has('twitter')"
                        class="text-danger"
                      >*Maximo 100 caracteres</span>
                    </div>
                  </div>
                  <div class="form-CMXD row col-md-6">
                    <div class="CMXD-icon-form">
                      <img src="@/assets/youtube.png" alt>
                    </div>
                    <div class="input-effect js-input">
                      <label>Youtube</label>
                      <input
                        class="CMXD-material-input"
                        placeholder="Ruta"
                        name="youtube"
                        type="text"
                        v-model="empresaModel.youtube"
                        v-validate="'max:100'"
                      >
                      <span v-show="errors.has('twitter')" class="text-warning"></span>
                      <span
                        v-show="errors.has('twitter')"
                        class="text-danger"
                      >*Maximo 100 caracteres</span>
                    </div>
                  </div>
                </div>
                <br>

                <!-- Button (Double) -->
                <div class="row">
                  <div class="form-CMXD row col-md-12">
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
                </div>
                <div class="btn-form-end">
                  <router-link class="btn CMXD-btn-business" :to="{ path: '/'}">Volver</router-link>
                  <el-button
                    type="primary"
                    class="btn CMXD-btn-person"
                    v-on:click="validateBeforeSubmit"
                  >Registrarme</el-button>
                </div>
                <div class="img-rigth col-md-2 col-lg-2"></div>

                <!--Flooter
                        <div class="modal fade" id="t_and_c_m" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 class="modal-title" id="myModalLabel">Terms & Conditions</h4>
                              </div>
                              <div class="modal-body">
                                <p>Aqui van los terminos y condiciones.</p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">I Agree</button>
                              </div>
                            </div>
                          </div>
                </div>-->
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
import axios from "axios";
export default {
  name: "registro_empresa",
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
      this.$validator.validateAll().then(result => {
        if (result) {
          this.enviar_formulario();
          return;
        }
        this.mensaje_informacion();
        return;
      });
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