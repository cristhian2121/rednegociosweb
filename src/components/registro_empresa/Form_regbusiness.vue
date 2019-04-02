<template>
  <div>
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
            v-validate="'required'"
          >
          <span class="focus-border"></span>
          <span v-show="errors.has('nombre')" class="text-warning"></span>
          <span
            v-show="errors.has('nombre')"
            class="text-danger"
          >Debes ingresar el nombre de tu empresa o negocio</span>
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
          <span
            v-show="errors.has('nit')"
            class="text-danger"
          >*El NIT o RUT deben contener 10 caracteres.</span>
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
          <span
            v-show="errors.has('telefono')"
            class="text-danger"
          >El teléfono debe contener 7 caracteres.</span>
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
          <span
            v-show="errors.has('celular')"
            class="text-danger"
          >El celular debe contener máximo 10 caracteres</span>
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
          <span
            v-show="errors.has('email')"
            class="text-danger"
          >Ingrese un correo electrónico valido.</span>
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
                <el-upload action="http://68.183.124.242:8000/api/archivo/" name="logo" multiple :limit="1" class="btn-services" :on-exceed="exceso_archivos" :on-success="logo_cargado">
                    <el-button size="small" class="CMXD-btn-ok">Cargar logo</el-button>
                    <div slot="tip" class="el-upload__tip text-center">Solo archivos jpg/png con un tamaño menor de 500kb</div>
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
            id="url_emp"
            name="url"
            type="text"
            placeholder="Dominio o URL de la empresa"
          >
        </div>
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
          <span
            v-show="errors.has('mision')"
            class="text-danger"
          >Escriba una descripción corta sobre la empresa o negocio.</span>
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
          >*Ingrese al menos un servicio.</span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_2')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_2')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_3')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_3')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_4')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_4')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_5')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_5')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_6')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_6')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_7')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_7')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_8')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_8')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_9')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_9')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
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
          >
          <span class="focus-border"></span>
          <i v-show="errors.has('nombre_ser_10')" class="text-warning"></i>
          <span v-show="errors.has('nombre_ser_10')" class="text-danger"></span>
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
          <el-button class="el-button el-button--default el-button--small CMXD-btn-business" plain>
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
          ></textarea>
          <span class="focus-border"></span>
          <i v-show="errors.has('ser_3')" class="text-warning"></i>
          <span v-show="errors.has('ser_3')" class="text-danger"></span>
        </div>
      </div>
      <div class="clear-fix"></div>
    </div>
    <div class="text-center">
      <el-button type="primary" class="btn CMXD-btn-person">Añadir nuevo servicio</el-button>
    </div>
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
          >*La URL debe contener máximo 100 caracteres</span>
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
            name="instagram"
            type="text"
            placeholder="Ruta"
            v-model="empresaModel.instagram"
            v-validate="'max:100'"
          >
          <span v-show="errors.has('instagram')" class="text-warning"></span>
          <span
            v-show="errors.has('instagram')"
            class="text-danger"
          >*La URL debe contener un máximo de 100 caracteres</span>
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
            name="twitter"
            type="text"
            v-validate="'max:100'"
          >
          <span v-show="errors.has('twitter')" class="text-warning"></span>
          <span
            v-show="errors.has('twitter')"
            class="text-danger"
          >*La URL debe contener máximo 100 caracteres</span>
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
            name="whatsapp"
            type="text"
            v-validate="'max:100'"
          >
          <span v-show="errors.has('whatsapp')" class="text-warning"></span>
          <span
            v-show="errors.has('whatsapp')"
            class="text-danger"
          >*La URL debe contener máximo 100 caracteres</span>
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
          <span v-show="errors.has('youtube')" class="text-warning"></span>
          <span v-show="errors.has('youtube')" class="text-danger">*Maximo 100 caracteres</span>
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
          <a href="#" data-toggle="modal" data-target="#t_and_c_m">Términos y condiciones</a> establecidos por este sitio, incluido nuestro Uso de cookies.
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
  </div>
</template>

<script>
import formLogin from "@/components/login/Form_login";
import formRegistration from "@/components/registration/Form_registration";

import axios from "axios";
export default {
  name: "registro_empresa",
  components: {
    formLogin,
    formRegistration
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
      this.guardar_usuario()      
    },
    guardar_empresa: function(email) {
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
          user_id: email,
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
    guardar_usuario: function() {
      let name = document.querySelector(".nameReg").value.trim();
      let lastname = document.querySelector(".lastnameReg").value.trim();
      let email = document.querySelector(".emailReg").value.trim();
      let pass = document.querySelector(".passReg").value.trim();
      let pass2 = document.querySelector(".pass2Reg").value.trim();

      axios({
        method: "post",
        url: "http://68.183.124.242:8000/rest-auth/registration/",
        data: {
          // first_name: name,
          // last_name: lastname,
          username: email,
          email: email,
          password1: pass,
          password2: pass2
        }
      })
        .then(respuesta => {
          sessionStorage.setItem("user", email);
          this.guardar_empresa(email);
          // this.$router.push({ path: "home" });
        })
        .catch(e => {
          console.log(e);
          this.$notify({
            message: "No se puede registrar intentalo mas tarde",
            type: "error"
          });
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
      })
      .then( respuesta =>  this.$router.push({ name: "home" }))
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
    logo_cargado(res, file) {
      this.id_archivo = res;
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
    validation: function() {
      let name = document.querySelector(".nameReg").value.trim();
      let lastname = document.querySelector(".lastnameReg").value.trim();
      let email = document.querySelector(".emailReg").value.trim();
      let pass = document.querySelector(".passReg").value.trim();
      let pass2 = document.querySelector(".pass2Reg").value.trim();

      let typeEmail = this.isValidEmail(email);
      let validator = false;

      if (!name) {
        document.querySelector(".ob_name_reg").style.display = "block";
        validator = true;
      }
      if (!lastname) {
        document.querySelector(".ob_lastname_reg").style.display = "block";
        validator = true;
      }
      if (!email || email.length < 65) {
        if (typeEmail == false) {
          document.querySelector(".ob_email_reg").style.display = "block";
          validator = true;
        }
      }
      if (pass.length < 8 || pass.length > 65) {
        document.querySelector(".long_pass_reg").style.display = "block";
        validator = true;
      }
      if (!pass2) {
        document.querySelector(".ob_pass2_reg").style.display = "block";
        validator = true;
      }
      if (pass2.length <8 || pass2.length > 50) {
        document.querySelector(".ob_name_reg").style.display = "block";
        validator = true;
      }
      if(pass != pass2) {
        this.$notify.error({
          title: "Ops",
          message: "Las contraseñas no coinciden"
        });
        validator = true;
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