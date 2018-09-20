<template>
    <div class="container">      
<div v-if="!carga">

  <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
  
        <h2> Registre su empresa<small></small></h2>
        <hr>

        <h2><small>Información general</small></h2>
        <hr>
            <!--Nombre empresa-->
            <div class="form-group">
              <label class="control-label" for="nombre">Nombre de la empresa</label>  
              <input id="nombre" name="nombre" type="text"
               placeholder="Ingrese el nombre de la empresa"
                class="form-control input-lg" required=""
                 v-model="empresaModel.nombre" v-validate="'required|max:20'">
                 <i v-show="errors.has('nombre')" class="text-warning"></i>
                  <span v-show="errors.has('nombre')" class="text-danger">
                  *Maximo 20 caracteres</span>
            </div>
            
            <!--nit/rut-->
            <div class="form-group">
              <label class="control-label" for="nit_emp">NIT/RUT</label>  
              <input id="nit_emp" name="nit" type="number" placeholder="NIT o RUT de la empresa"
               class="form-control input-lg" v-model="empresaModel.nit">
            </div>

            <div class="row">
              <!-- departamento -->
              <div class="col-xs-3 col-sm-3 col-md-3">
                  <div class="form-group" >
                    <label class="control-label" for="dep_emp">Departamento</label>
                    <select id="dep_emp" name="departamento" class="form-control input-md">
                      <option value="1">Departamento</option>
                      <option value="2">Option two</option>
                    </select>
                  </div>
              </div>

              <!-- ciudad -->
              <div class="col-xs-3 col-sm-3 col-md-3">
                <div class="form-group">
                  <label class="control-label" for="ciudad_emp">Ciudad</label>
                  <template>
                    <el-select v-model="empresaModel.id_ciudad" clearable placeholder="Seleccionar">
                      <el-option v-for="ciudad in ciudades" :key="ciudad.id_ciudad"
                        :label="ciudad.ciudad" :value="ciudad.id_ciudad">
                      </el-option>
                    </el-select>
                  </template>
                </div>
              </div>
              
              <!-- dirección-->
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="form-group">
                  <label class="control-label" for="dir_emp">Dirección</label>  
                  <input id="dir_emp" name="direccion" type="text" placeholder="Dirección"
                   class="form-control input-lg" v-model="empresaModel.direccion"
                   v-validate="'required|max:20'">
                  <i v-show="errors.has('direccion')" class="text-warning"></i>
                  <span v-show="errors.has('direccion')" class="text-danger">
                  *Requerrido, maximo 20 caracteres</span>
                </div>
              </div>
            </div>            

            <div class="row">
              <!-- Teléfono-->
              <div class="col-xs-3 col-sm-3 col-md-3">
                <div class="form-group">
                  <label class="control-label" for="tel_emp">Teléfono</label>  
                  <input id="tel_emp" name="telefono" type="number" placeholder="Teléfono"
                   class="form-control input-lg" v-model="empresaModel.telefono">
                </div>
              </div>

              <!-- ciudad -->
              <div class="col-xs-3 col-sm-3 col-md-3">
                <div class="form-group">
                  <label class="col-md-4 control-label" for="cel_emp">Celular</label>  
                  <input id="cel_emp" name="celular" type="number" placeholder="celular" 
                  class="form-control input-lg" v-model="empresaModel.celular">
                </div>
              </div>
                
              <!-- Email-->
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="form-group">
                  <label class="control-label" for="email_emp">Email</label>  
                  <input id="email_emp" name="email" type="email" placeholder="Email"
                   class="form-control input-lg" v-model="empresaModel.email"
                   v-validate="'required|email'">
                  <i v-show="errors.has('email')" class="text-warning"></i>
                  <span v-show="errors.has('email')" class="text-danger">
                  *Requerrido</span>
                </div>
              </div>
            </div>
            <br>
            <hr>            
                        
            <!--sección-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="tipo">¿En que sección desea aparecer?</label>
              <div class="col-md-8">
                <template>
                    <el-select v-model="empresaModel.id_tipo" clearable placeholder="Seleccionar">
                      <el-option v-for="tipo in tipos" :key="tipo.id_tipo"
                        :label="tipo.nombre" :value="tipo.id_tipo">
                      </el-option>
                    </el-select>
                 </template>
              </div>
            </div>           

            <h2><small>Sobre nosotros</small></h2>
            <hr>
            <!--lema-->
            <div class="form-group">
              <label class="control-label" for="lema">Lema</label> 
              <textarea class="form-control input-lg" id="lema" name="lema"
               placeholder="Escriba aquí el lema de la empresa"
                v-model="empresaModel.lema" v-validate="'required|max:40'">
               </textarea>               
                 <i v-show="errors.has('lema')" class="text-warning"></i>
                  <span v-show="errors.has('lema')" class="text-danger">
                  *Maximo 24 caracteres</span>
               
            </div>

            <div class="row">
              <!-- Misión-->
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="form-group">
                  <label class="control-label" for="mision">Misión</label>
                  <textarea class="form-control input-lg" id="mision" name="mision" 
                  placeholder="Escriba aquí la misión de la empresa" v-model="empresaModel.mision">
                  </textarea>
                </div>
              </div>

              <!-- Visión -->
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="form-group">
                  <label class=" control-label" for="vision">Visión</label>
                  <textarea class="form-control input-lg" id="vision" name="vision"
                   placeholder="Escriba aquí la visión de la empresa" v-model="empresaModel.vision">
                  </textarea>
                </div>
              </div>
            </div>
            <br>

            <!--Logo-->
            <div class="form-group">
              <label class="col-md-2 control-label" for="logo">Logo</label>
              <div class="col-md-10">
                <input id="logo" name="logo" type="file" class="input-file input-lg">
              </div>
            </div>
            
            <br>
            <!-- Servicios-->
            <h2><small>Servicios</small></h2>
            <hr>
            
            <!-- numero servicios -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="num_ser">¿Cuántos más servicios ofrece?</label>
              <div class="col-md-8"> 
                <el-radio-group v-model="radio_servicios" v-on:change="cambio_servicios">
                  <el-radio :label="1">1</el-radio>
                  <el-radio :label="2">2</el-radio>
                  <el-radio :label="3">3</el-radio>
                  <el-radio :label="4">4</el-radio>
                  <el-radio :label="5">5</el-radio>
                </el-radio-group>
              </div>
            </div>
            <br>
            <br> 
            <br> 
            
            <!--Servicio 1-->
            <div class="row">
              <!-- nombre-->
              <div class="col-xs-4 col-sm-4 col-md-4">
                <div class="form-group">
                  <label class="control-label" for="ser1">Nombre:</label>
                  <input id="ser1" name="nombre_ser_1" type="text" placeholder="Nombre"
                   class="form-control input-lg" v-model="empresaModel.nombre_ser_1"
                    required="" v-validate="'required|max:20'">
                    <i v-show="errors.has('nombre_ser_1')" class="text-warning"></i>
                  <span v-show="errors.has('nombre_ser_1')" class="text-danger">
                  *Maximo 20 caracteres</span>
                </div>
              </div>
              <!-- servicio -->
              <div class="col-xs-8 col-sm-8 col-md-8">
                <div class="form-group">
                  <label class=" control-label" for="ser3">Servicio:</label>
                  <textarea class="form-control input-lg" id="ser_3" name="ser_3" 
                  placeholder="Describa su servicio" v-model="empresaModel.ser_3"
                  v-validate="'required|max:20'">
                  </textarea>
                    <i v-show="errors.has('ser_3')" class="text-warning"></i>
                  <span v-show="errors.has('ser_3')" class="text-danger">
                  *Maximo 20 caracteres</span>
                </div>
              </div>
            </div>

            <!--Servicio 2-->
            <div class="row" v-if="servicio_2">
              <!-- nombre-->
              <div class="col-xs-4 col-sm-4 col-md-4">
                <div class="form-group">
                  <label class="control-label" for="ser1">Nombre:</label>
                  <input id="ser1" name="nombre_ser_2" type="text" placeholder="Nombre"
                   class="form-control input-lg" v-model="empresaModel.nombre_ser_2">
                </div>
              </div>
              <!-- servicio -->
              <div class="col-xs-8 col-sm-8 col-md-8">
                <div class="form-group">
                  <label class=" control-label" for="ser_2">Servicio:</label>
                  <textarea class="form-control input-lg" id="ser_2" name="ser_2" 
                    placeholder="Describa su servicio" v-model="empresaModel.ser_2">
                  </textarea>
                </div>
              </div>
            </div>

            <!--Servicio 3-->
            <div class="row" v-if="servicio_3">
              <!-- nombre-->
              <div class="col-xs-4 col-sm-4 col-md-4">
                <div class="form-group">
                  <label class="control-label" for="ser3">Nombre:</label>
                  <input id="ser3" name="nombre_ser_3" type="text" placeholder="Nombre"
                   class="form-control input-lg" v-model="empresaModel.nombre_ser_3">
                </div>
              </div>
              <!-- servicio -->
              <div class="col-xs-8 col-sm-8 col-md-8">
                <div class="form-group">
                  <label class=" control-label" for="ser3_det">Servicio:</label>
                  <textarea class="form-control input-lg" id="ser_3" name="ser_3" 
                  placeholder="Describa su servicio" v-model="empresaModel.ser_3">
                  </textarea>
                </div>
              </div>
            </div>

            <!--Servicio 4-->
            <div class="row" v-if="servicio_4">
              <!-- nombre-->
              <div class="col-xs-4 col-sm-4 col-md-4">
                <div class="form-group">
                  <label class="control-label" for="ser4">Nombre:</label>
                  <input id="ser1" name="nombre_ser_4" type="text" placeholder="Nombre"
                   class="form-control input-lg" v-model="empresaModel.nombre_ser_4">
                </div>
              </div>
              <!-- servicio -->
              <div class="col-xs-8 col-sm-8 col-md-8">
                <div class="form-group">
                  <label class=" control-label" for="ser4">Servicio:</label>
                  <textarea class="form-control input-lg" id="ser_4" name="ser_4" 
                    placeholder="Describa su servicio" v-model="empresaModel.ser_4">
                  </textarea>
                </div>
              </div>
            </div>

            <!--Servicio 5-->
            <div class="row" v-if="servicio_5">
              <!-- nombre-->
              <div class="col-xs-4 col-sm-4 col-md-4">
                <div class="form-group">
                  <label class="control-label" for="ser5">Nombre:</label>
                  <input id="ser5" name="nombre_ser_5" type="text" placeholder="Nombre"
                   class="form-control input-lg" v-model="empresaModel.nombre_ser_5">
                </div>
              </div>
              <!-- servicio -->
              <div class="col-xs-8 col-sm-8 col-md-8">
                <div class="form-group">
                  <label class=" control-label" for="ser5">Servicio:</label>
                  <textarea class="form-control input-lg" id="ser5" name="ser_5" 
                  placeholder="Describa su servicio" v-model="empresaModel.ser_5">
                  </textarea>
                </div>
              </div>
            </div>
            
            <hr>
  
            
            <!--Registro-->
        
              <!-- Button (Double) -->      
        
            
            

        
        <div class="row">
          <div class="col-xs-3 col-sm-3 col-md-3">
            <span class="button-checkbox">
              <button type="button" class="btn" data-color="info" tabindex="7">I Agree</button>
                <input type="checkbox" name="t_and_c" id="t_and_c" class="hidden" value="1">
            </span>
          </div>
          <div class="col-xs-9 col-sm-9 col-md-9">
             By clicking <strong class="label label-primary">Register</strong>, you agree to the <a href="#" data-toggle="modal" data-target="#t_and_c_m">Terms and Conditions</a> set out by this site, including our Cookie Use.
          </div>
        </div>
        <hr>

    

        <div class="form-group">
          <label class="col-md-4 control-label" for="buttonatras1id"></label>
          <div class="col-md-8">
            <button id="buttonatras1id" name="buttonatras1id" class="btn btn-info">Atras</button>
            <button  name="continuar" class="save btn btn-success">Continuar registro</button>
          </div>
        </div>
        <br>
        <br>

      <button type="button" class=" btn btn-default"
      v-on:click="validateBeforeSubmit">Guardar</button>

        
        
    </div>
  </div>

  
  <!--Flooter-->
  <div class="modal fade" id="t_and_c_m" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title" id="myModalLabel">Terms & Conditions</h4>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">I Agree</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->  
  </div>

<!--gif loader-->
  <div class="centrar" v-if="carga">
<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
            break;
          case 2:
            this.servicio_2 = true; this.servicio_3 = false; 
            this.servicio_4 = false; this.servicio_5 = false;
            break;
          case 3:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = false; this.servicio_5 = false;
            break;
          case 4:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = false;
            break;
          case 5:
            this.servicio_2 = true; this.servicio_3 = true; 
            this.servicio_4 = true; this.servicio_5 = true;
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


