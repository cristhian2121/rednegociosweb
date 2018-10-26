<template>
  <div class="container loginkr">      
    <div class="row" v-if="!carga">
      <div class="col-md-1 col-lg-2"></div>

      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-8">
        <h2 style="text-align: center;"> Edite la información de la empresa<small></small></h2>
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
          <!-- <div class="col-sm-6 col-md-3">
            <div class="form-group" >
              <label class="control-label">Departamento</label>
              <el-select name="departamento" v-model="empresaModel.id_ciudad" clearable placeholder="Seleccionar" v-validate="'required'">
                <el-option v-for="ciudad in ciudades" :key="ciudad.id_ciudad" 
                :label="ciudad.departamento" :value="ciudad.id_ciudad"></el-option>
              </el-select>
              <span v-show="errors.has('departamento')" class="text-danger">*Este campo es requerido</span>
            </div>
          </div> -->
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
        <!-- <div><h2><small>Representante</small></h2>
        <hr>
        <div class="form-group">
          <label class="control-label" for="nombre">Nombre del representante</label>  
          <input name="nombre" type="text" placeholder="Ingrese el nombre del representante de la empresa" class="form-control input-lg"
          v-model="empresaModel.nombre" v-validate="'required|max:20'">
          <span v-show="errors.has('nombre')" class="text-warning"></span>
          <span v-show="errors.has('nombre')" class="text-danger">*Maximo 20 caracteres</span>
        </div>-->
        <!--fecha cumpleaños-->
        <!-- <div class="row">
          <div class="col-sm-6 col-md-3">
              <label class="control-label">Fecha de nacimiento</label>
          </div>
          <div class=" col-sm-6 col-md-3">
            <el-date-picker v-model="value10" type="date" placeholder="Escoge un día" format="yyyy/MM/dd"></el-date-picker>
          </div>
        </div></div>  
        <br>          -->

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
          <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
            <el-button size="small" type="success">Click para cargar logo de la empresa</el-button>
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
              class="form-control input-lg" v-model="servicioModel.nombre_ser_1"
              v-validate="'required|max:20'">
              <i v-show="errors.has('nombre_ser_1')" class="text-warning"></i>
              <span v-show="errors.has('nombre_ser_1')" class="text-danger">*Maximo 20 caracteres</span>
            </div>
          </div>general
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_1" 
              placeholder="Describa el servicio" v-model="servicioModel.ser_1"
              v-validate="'required|max:20'"></textarea>
              <i v-show="errors.has('ser_3')" class="text-warning"></i>
              <span v-show="errors.has('ser_3')" class="text-danger">*Maximo 20 caracteres</span>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 2-->
        <div class="row" v-if="servicio_2">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_2" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_2">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_2" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_2"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 3-->
        <div class="row" v-if="servicio_3">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_3" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_3">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_3" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_3"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 4-->
        <div class="row" v-if="servicio_4">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_4" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_4">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_4" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_4"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 5-->
        <div class="row" v-if="servicio_5">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_5" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_5" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div> 
        <!--Servicio 6-->
        <div class="row" v-if="servicio_6">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_6" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_6" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 7-->
        <div class="row" v-if="servicio_7">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_7" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_7" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 8-->
        <div class="row" v-if="servicio_8">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_8" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_8" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 9-->
        <div class="row" v-if="servicio_9">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_9" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_9" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        <!--Servicio 10-->
        <div class="row" v-if="servicio_10">
          <div class="col-xs-4 col-sm-4 col-md-4">
            <div class="form-group">
              <input name="nombre_ser_10" type="text" placeholder="Nombre"
              class="form-control input-lg" v-model="servicioModel.nombre_ser_5">
            </div>
          </div>
          <div class="col-xs-7 col-sm-7 col-md-7">
            <div class="form-group">
              <textarea class="form-control input-lg" name="ser_10" 
              placeholder="Describa su servicio" v-model="servicioModel.ser_5"></textarea>
            </div>
          </div>
          <div class="form-group col-xs-1 col-sm-1 col-md-1">
            <el-upload
            action= "http://localhost:8000/api/archivo/"
            multiple
            :limit="1"
            :on-exceed="exceso_archivos">
              <el-button size="small" type="success" plain>Cargar imagen</el-button>
            </el-upload>
          </div>
        </div>
        </div>

        <!--Info representate-->
        <div>
        <hr>
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
        <br> -->
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
            <el-checkbox>Acepto</el-checkbox>
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
    name: 'edicion_empresa',
    props: ['id_empresa'],
    async mounted(){
      await this.traer_ciudaes();
      await this.traer_tipos();
      this.carga = false;
    },
    data(){
      return{
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
          fecha_registro: null,
        },
        servicioModel:{
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
          imagen10: null,
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
        carga: true,
        id_empresa: null
      }                  
    },
    mounted(){        
        this.nombre_empresa = this.$route.params.nombre;
        console.log(this.nombre_empresa)
        if(this.nombre_empresa) this.traer_empresas();
        this.carga = false;
        if(this.nombre_empresa) this.traer_servicios;
        this.carga = false;
    },
    methods:{
      traer_empresas: function() {
        axios.get(`http://localhost:8000/api/detalle/?nombre=${this.nombre_empresa}`)
          .then(respuesta => {
            console.log("shdjsa")
            console.log(respuesta.data)
            this.empresaModel = respuesta.data[0];
          });
      },
      traer_servicios: function() {
        axios.get(`http://localhost:8000/api/servicio/?nombre=${this.nombre_empresa}`)
          .then(respuesta => {
            console.log(respuesta.data)
            this.empresaModel = respuesta.data[0];
          });
          localhost:8000/api/servicio/
      },
      enviar_formulario:async function(){
        this.carga = true;
        axios({
          method: "get",
          url: "http://localhost:8000/api/empresa/",
          data:{
            nombre: this.empresaModel.nombre,
            nit: this.empresaModel.nit,
            direccion: this.empresaModel.direccion,
            telefono: this.empresaModel.telefono,
            celular: this.empresaModel.celular,
            email: this.empresaModel.email,
            mision: this.empresaModel.mision,            
            id_tipo: this.empresaModel.id_tipo,
            id_ciudad: this.empresaModel.id_ciudad,
          }
        })
        .then(respuesta =>{
          this.id_empresa = respuesta.data.id_empresa;
          // this.$route.router.go('/home');
          console.log(this.id_empresa);
          this.enviar_servicios();          
          this.carga = false;
        })
        .catch(e => {
          this.mensaje_error();
          this.carga = false;
        })
        this.enviar_servicios();
      },
      enviar_servicios: async function(){
        console.log(this.servicioModel.nombre_ser_1);
        console.log(this.servicioModel.ser_1);
        axios({
          method: "get",
          url: "http://localhost:8000/api/servicio/",
          data:{
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
            nombre_ser_1: this.servicioModel.nombre_ser_6,
            ser_1: this.servicioModel.ser_6,
            nombre_ser_2: this.servicioModel.nombre_ser_7,
            ser_2: this.servicioModel.ser_7,
            nombre_ser_3: this.servicioModel.nombre_ser_8,
            ser_3: this.servicioModel.ser_8,
            nombre_ser_4: this.servicioModel.nombre_ser_9,
            ser_4: this.servicioModel.ser_9,
            nombre_ser_5: this.servicioModel.nombre_ser_10,
            ser_5: this.servicioModel.ser_10,
          }
        })
        .then(res => {
          this.mensaje_exito();
          this.carga = false;
        })
        .catch(e => {
          this.carga = false;
          this.mensaje_error();          
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
      exceso_archivos(){
      this.$notify.warning({
          title: 'Alerta',
          message: 'Ha excedido el limite e archivos'
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


