<template>
  <div class="container loginkr">      
    <div class="row" v-if="!carga">
      <div class="col-md-1 col-lg-2"></div>

      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-8">
        <h2 style="text-align: center;"> Registre su empresa<small></small></h2>
        <hr>
        <br>
        <!--Info empresa-->
        <div><h2><small>Información general</small></h2>
        <hr> 
        <div class="form-group">
          <label class="control-label" for="nombre">Nombre de la empresa</label>  
          <input name="nombre" type="text" placeholder="Ingrese el nombre de la empresa" class="form-control input-lg"
          v-model="empresaModel.nombre" v-validate="'required|max:20'">
          <span v-show="errors.has('nombre')" class="text-warning"></span>
          <span v-show="errors.has('nombre')" class="text-danger">*Maximo 20 caracteres</span>
        </div> 
        <!--nit/rut-->
        <div class="form-group">
          <label class="control-label" for="nit_emp">NIT/RUT</label>  
          <input name="nit" type="number" v-model="empresaModel.nit" v-validate="'required|max:10'"
          placeholder="NIT o RUT de la empresa"  class="form-control input-lg">
          <span v-show="errors.has('nit')" class="text-danger">*Maximo 10 caracteres</span>
        </div>
        <div class="row">
          <!-- departamento -->
          <div class="col-sm-6 col-md-3">
            <div class="form-group" >
              <label class="control-label">Departamento</label>
              <el-select name="departamento" v-model="empresaModel.id_ciudad" clearable placeholder="Seleccionar" v-validate="required">
                <el-option v-for="ciudad in ciudades" :key="ciudad.id_ciudad" 
                :label="ciudad.departamento" :value="ciudad.id_ciudad"></el-option>
              </el-select>
              <span v-show="errors.has('departamento')" class="text-danger">*Este campo es requerido</span>
            </div>
          </div>
          <!-- ciudad -->
          <div class=" col-sm-6 col-md-3">
            <div class="form-group">
              <label class="control-label" for="ciudad_emp">Ciudad</label>
              <el-select v-model="empresaModel.id_ciudad" clearable placeholder="Seleccionar" >
                <el-option v-for="ciudad in ciudades" :key="ciudad.id_ciudad" 
                :label="ciudad.ciudad" :value="ciudad.id_ciudad"></el-option>
              </el-select>
            </div>
          </div>
          <!-- dirección-->
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label">Dirección</label>  
              <input id="dir_emp" name="direccion" type="text" placeholder="Dirección"
              class="form-control input-lg" v-model="empresaModel.direccion" >
              <i v-show="errors.has('direccion')" class="text-warning"></i>
            </div>
          </div>
        </div>            
        <div class="row">
          <!-- Teléfono-->
          <div class="col-sm-2 col-md-3">
            <div class="form-group">
              <label class="control-label">Teléfono</label>  
              <input name="telefono" type="number" placeholder="Teléfono" class="form-control input-lg"
              v-model="empresaModel.telefono" v-validate="'max:7'">
              <i v-show="errors.has('telefono')" class="text-warning"></i>
              <span v-show="errors.has('telefono')" class="text-danger">*Máximo 7 caracteres</span>
            </div>
          </div>
          <!-- celular -->
          <div class="col-sm-2 col-md-3">
            <div class="form-group">
              <label class="control-label">Celular/Whatsapp</label>  
              <input id="cel_emp" name="celular" type="number" placeholder="Whatsapp" class="form-control input-lg" 
              v-model="empresaModel.celular" v-validate="'max:10'">
              <i v-show="errors.has('celular')" class="text-warning"></i>
              <span v-show="errors.has('celular')" class="text-danger">*Máximo 10 caracteres</span>
            </div>
          </div>  
          <!-- Email-->
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label" for="email_emp">Email</label>  
              <input id="email_emp" name="email" type="email" placeholder="Email"
              class="form-control input-lg" v-model="empresaModel.email" v-validate="'email'">
              <i v-show="errors.has('email')" class="text-warning"></i>
              <span v-show="errors.has('email')" class="text-danger">*Campo requerido</span>
            </div>
          </div>
        </div></div>
        <br>

        <!--Info representate-->
        <div><h2><small>Representante</small></h2>
        <hr>
        <div class="form-group">
          <label class="control-label" for="nombre">Nombre del representante</label>  
          <input name="nombre" type="text" placeholder="Ingrese el nombre del representante de la empresa" class="form-control input-lg"
          v-model="empresaModel.nombre" v-validate="'required|max:20'">
          <span v-show="errors.has('nombre')" class="text-warning"></span>
          <span v-show="errors.has('nombre')" class="text-danger">*Maximo 20 caracteres</span>
        </div>
        <!--fecha cumpleaños-->
        <div class="row">
          <div class="col-sm-6 col-md-3">
              <label class="control-label">Fecha de nacimiento</label>
          </div>
          <div class=" col-sm-6 col-md-3">
            <el-date-picker v-model="value10" type="date" placeholder="Escoge un día" format="yyyy/MM/dd"></el-date-picker>
          </div>
        </div></div>  
        <br>        

        <!--Sobre nosotros-->
        <div><h2><small>Sobre nosotros</small></h2>
        <hr>            
        <!--sección-->
        <div class="row">
          <div class="col-sm-6 col-md-6">
              <label class="control-label">¿En que sección desea aparecer? </label>
          </div>
          <div class=" col-sm-6 col-md-6">
            <el-select  v-model="empresaModel.id_tipo" clearable placeholder="Seleccionar sección">
              <el-option v-for="tipo in tipos" :key="tipo.id_tipo" 
              :label="tipo.nombre" :value="tipo.id_tipo"> </el-option>
            </el-select>
          </div>
        </div>

        <!--Sobre nosotros-->
        <div class="form-group">
          <label class="control-label">Quienes Somos o Sobre Nosotros</label> 
          <textarea class="form-control input-lg" name="mision"
          placeholder="Escriba un resumen detallado sobre quienes son"
          v-model="empresaModel.mision" v-validate="'required|max:200'"></textarea>               
          <i v-show="errors.has('mision')" class="text-warning"></i>
          <span v-show="errors.has('mision')" class="text-danger">*Maximo 200 caracteres</span>
        </div>
        <br>
        <!--Logo-->
        <div class="text-center blanc">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
          :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="success">Clic para cargar logo de la empresa</el-button>
            <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tamaño menor de 500kb</div>
          </el-upload>
        </div></div>
        <br>

        <!-- Servicios-->
        <div><h2><small>Servicios</small></h2>
        <hr> 
        <!-- numero servicios -->
        <div class="form-group">
          <label class="control-label" for="num_ser">¿Cuántos servicios ofrece?</label>
          <el-radio-group v-model="radio_servicios" v-on:change="cambio_servicios">
            <el-radio :label="1">1</el-radio>
            <el-radio :label="2">2</el-radio>
            <el-radio :label="3">3</el-radio>
            <el-radio :label="4">4</el-radio>
            <el-radio :label="5">5</el-radio>
            <el-radio :label="6">6</el-radio>
            <el-radio :label="7">7</el-radio>
            <el-radio :label="8">8</el-radio>
            <el-radio :label="9">9</el-radio>
            <el-radio :label="10">10</el-radio>
          </el-radio-group>
        </div>
        <!-- servicio 1-->
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_1" type="text" placeholder="Nombre servicio"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_1"
              required="" v-validate="'required|max:20'">
              <i v-show="errors.has('nombre_ser_1')" class="text-warning"></i>
              <span v-show="errors.has('nombre_ser_1')" class="text-danger">*Maximo 20 caracteres</span>
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_1" 
              placeholder="Describa el servicio" v-model="empresaModel.ser_3"
              v-validate="'required|max:20'"></textarea>
              <i v-show="errors.has('ser_3')" class="text-warning"></i>
              <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 2-->
        <div class="row" v-if="servicio_2">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_2" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_2">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_2" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_2"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 3-->
        <div class="row" v-if="servicio_3">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_3" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_3">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_3" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_3"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 4-->
        <div class="row" v-if="servicio_4">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_4" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_4">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_4" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_4"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 5-->
        <div class="row" v-if="servicio_5">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_5" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_5" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div> 
        <!--Servicio 6-->
        <div class="row" v-if="servicio_6">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_6" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_6" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 7-->
        <div class="row" v-if="servicio_7">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_7" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_7" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 8-->
        <div class="row" v-if="servicio_8">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_8" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_8" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 9-->
        <div class="row" v-if="servicio_9">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_9" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_9" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 10-->
        <div class="row" v-if="servicio_10">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_10" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="empresaModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_10" 
              placeholder="Describa su servicio" v-model="empresaModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" 
            :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        </div>

        <!--Info representate-->
        <div>
        <hr>
        <!--Banner-->
        <label class="control-label">Cargar imagenes para banner</label>
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
        <br>
        <!--Redes sociales-->
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <label class="control-label">Ruta de Facebook</label>
            <input name="facebook" type="text" placeholder="Ingrese el nombre de la empresa" class="form-control input-lg"
            v-model="empresaModel.nombre" v-validate="'max:100'">
            <span v-show="errors.has('facebook')" class="text-warning"></span>
            <span v-show="errors.has('facebook')" class="text-danger">*Maximo 100 caracteres</span>  
          </div>
          <div class=" col-sm-6 col-md-4">
            <label class="control-label">Ruta de Twitter</label>
            <input name="twitter" type="text" placeholder="Ingrese el nombre de la empresa" class="form-control input-lg"
            v-model="empresaModel.nombre" v-validate="'max:100'">
            <span v-show="errors.has('twitter')" class="text-warning"></span>
            <span v-show="errors.has('twitter')" class="text-danger">*Maximo 100 caracteres</span> 
          </div>
          <div class=" col-sm-6 col-md-4">
            <label class="control-label">Ruta de Youtube</label>
            <input name="youtube" type="text" placeholder="Ingrese el nombre de la empresa" class="form-control input-lg"
            v-model="empresaModel.nombre" v-validate="'max:100'">
            <span v-show="errors.has('youtube')" class="text-warning"></span>
            <span v-show="errors.has('youtube')" class="text-danger">*Maximo 100 caracteres</span> 
          </div>
        </div></div>
        <br>


        <hr>
        <!-- Button (Double) -->      
        <div class="row">
          <div class="col-xs-3 col-sm-3 col-md-3">
            <el-checkbox v-model="checked">Acepto</el-checkbox>
          </div>
          <div class="col-xs-9 col-sm-9 col-md-9"> 
            Al hacer clic en <strong class="label label-primary">Guardar registro</strong>,
            usted acepta los <a href="#" data-toggle="modal" data-target="#t_and_c_m">Términos
            y condiciones</a> establecidos por este sitio, incluido nuestro Uso de cookies. 
          </div>
        </div>
        <br>
        <br>
        <div class="form-group blanc">
          <label class="col-md-4 control-label" for="buttonatras1id"></label>
          <el-button type="danger">Cancelar</el-button>
          <el-button v-on:click="validateBeforeSubmit" type="primary">Guardar registro</el-button> 
        </div>        
      </div>

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
      <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>

  </div>
</template>

<script>
import { Empresa } from '../../models/empresa'
import axios from "axios";
export default {  
    name: "registro_empresa",
    async mounted(){
      await this.traer_ciudaes();
      await this.traer_tipos();
      this.carga = false;
    },
    data(){
      return{
        value10: '',
        empresaModel: {
          nombre: null,
          nit: null,
          id_tipo: null,
          id_ciudad: null,
          direccion: null,
          telefono: null,
          celular: null,
          email: null,
          lema: null,
          logo: null,
          mision: null,
          vision: null,
          nombre_ser_1: null,
          ser_1: null,
          nombre_ser_2: null,
          ser_2: null,
          nombre_ser_3: null,
          ser_3: null,
          nombre_ser_4: null,
          ser_4: null,
          nombre_ser_5: null,
          ser_5: null,
          fecha_registro: null,
        },
        ciudades:[{
          id_ciudad: null,
          departamento: null,
          ciudad: null
        }],
        tipos: [{
          id_tipo: null,
          nombre: null
        }],
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
        carga: true
      }                  
    },
    methods:{
      enviar_formulario:async function(){
        axios({
          method: "post",
          url: "http://localhost:8000/api/empresa/",
          data:{
            nombre: this.empresaModel.nombre,
            nit: this.empresaModel.nit,
            direccion: this.empresaModel.direccion,
            telefono: this.empresaModel.telefono,
            celular: this.empresaModel.celular,
            email: this.empresaModel.email,
            logo: this.empresaModel.logo,
            lema: this.empresaModel.lema,
            mision: this.empresaModel.mision,
            vision: this.empresaModel.vision,
            nombre_ser_1: this.empresaModel.nombre_ser_1,
            ser_1: this.empresaModel.ser_1,
            nombre_ser_2: this.empresaModel.nombre_ser_2,
            ser_2: this.empresaModel.ser_2,
            nombre_ser_3: this.empresaModel.nombre_ser_3,
            ser_3: this.empresaModel.ser_3,
            nombre_ser_4:  this.empresaModel.nombre_ser_4,
            ser_4: this.empresaModel.ser_4,
            nombre_ser_5:  this.empresaModel.nombre_ser_5,
            ser_5: this.empresaModel.ser_5,
            fecha_registro:  null,
            id_tipo:  this.empresaModel.id_tipo,
            id_ciudad:  this.empresaModel.id_ciudad
          }
        })
        .then(respuesta =>{
          console.log(respuesta.status);
          this.$route.router.go('/home');
          this.mensaje_exito();
          this.carga = false;
        })
        .catch(e => {
          console.log(this.empresaModel);
          this.mensaje_error();
          this.carga = false;
        })

      },
      traer_ciudaes: async function(){
        axios.get("http://localhost:8000/api/ciudad/").then(respuesta => {
        this.ciudades = respuesta.data;
        });   
      },
      traer_tipos: async function(){
        axios.get("http://localhost:8000/api/tipo/").then(respuesta => {
        this.tipos = respuesta.data;
        });
      },
      cambio_servicios: function(){
        switch(this.radio_servicios){
          case 1:
            this.servicio_2 = false; this.servicio_3 = false; 
            this.servicio_4 = false; this.servicio_5 = false;
            this.servicio_6 = false; this.servicio_7 = false; 
            this.servicio_8 = false; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 2:
            this.servicio_2 = true; this.servicio_3 = false; 
            this.servicio_4 = false; this.servicio_5 = false;
            this.servicio_6 = false; this.servicio_7 = false; 
            this.servicio_8 = false; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 3:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = false; this.servicio_5 = false;
            this.servicio_6 = false; this.servicio_7 = false; 
            this.servicio_8 = false; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 4:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = false;
            this.servicio_6 = false; this.servicio_7 = false; 
            this.servicio_8 = false; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 5:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = true;
            this.servicio_6 = false; this.servicio_7 = false; 
            this.servicio_8 = false; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 6:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = true;
            this.servicio_6 = true; this.servicio_7 = false; 
            this.servicio_8 = false; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 7:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = true;
            this.servicio_6 = true; this.servicio_7 = true; 
            this.servicio_8 = false; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 8:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = true;
            this.servicio_6 = true; this.servicio_7 = true; 
            this.servicio_8 = true; this.servicio_9 = false;
            this.servicio_10 = false;
            break;
          case 9:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = true;
            this.servicio_6 = true; this.servicio_7 = true; 
            this.servicio_8 = true; this.servicio_9 = true;
            this.servicio_10 = false;
            break;
          case 10:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = true;
            this.servicio_6 = true; this.servicio_7 = true; 
            this.servicio_8 = true; this.servicio_9 = true;
            this.servicio_10 = true;
            break;
        }
      },
      mensaje_exito: function() {
        this.$notify.success({
          message: 'Exito, Se ha agregado una nueva empresa.',
          type: 'success'
        });
      },
      mensaje_error() {
        this.$notify.error({
          title: 'Ops',
          message: 'Ha ocurrido un error intentalo nuevamente'
        });
      },
      mensaje_informacion() {
        this.$notify.info({
          title: 'Por favor',
          message: 'Valida los campos del formulario'
        });
      },
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.enviar_formulario();
            return;
          }
          this.mensaje_informacion();
          return;
        });
    }
    }
}
</script>

<style>
.blanc span {
  color:#fff;
}

.centrar
	{
		position: absolute;
		/*nos posicionamos en el centro del navegador*/
		top:50%;
		left:50%;
    padding-top: 20%;
	
	}

.lds-default {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-default div {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #2F4F4F;
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  animation-delay: 0s;
  top: 29px;
  left: 53px;
}
.lds-default div:nth-child(2) {
  animation-delay: -0.1s;
  top: 18px;
  left: 50px;
}
.lds-default div:nth-child(3) {
  animation-delay: -0.2s;
  top: 9px;
  left: 41px;
}
.lds-default div:nth-child(4) {
  animation-delay: -0.3s;
  top: 6px;
  left: 29px;
}
.lds-default div:nth-child(5) {
  animation-delay: -0.4s;
  top: 9px;
  left: 18px;
}
.lds-default div:nth-child(6) {
  animation-delay: -0.5s;
  top: 18px;
  left: 9px;
}
.lds-default div:nth-child(7) {
  animation-delay: -0.6s;
  top: 29px;
  left: 6px;
}
.lds-default div:nth-child(8) {
  animation-delay: -0.7s;
  top: 41px;
  left: 9px;
}
.lds-default div:nth-child(9) {
  animation-delay: -0.8s;
  top: 50px;
  left: 18px;
}
.lds-default div:nth-child(10) {
  animation-delay: -0.9s;
  top: 53px;
  left: 29px;
}
.lds-default div:nth-child(11) {
  animation-delay: -1s;
  top: 50px;
  left: 41px;
}
.lds-default div:nth-child(12) {
  animation-delay: -1.1s;
  top: 41px;
  left: 50px;
}
@keyframes lds-default {
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
</style>


