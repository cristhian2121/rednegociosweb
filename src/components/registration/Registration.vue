<template>
   <div class="container">
      <div class="row">
         <div class="img-left col-md-3"></div>
         <div class="loginkr-r col-md-6">
            <h2 style="text-align:center">Registro Personas</h2>
            <hr>
            <br>
            <section class="login-form">
               <p>
                  <el-input v-model="usuario_model.email" type="email" name="email" placeholder="Correo electrónico" v-validate="'required|max:65'" ></el-input>
                  <span class='email_type text-danger'>*El correo debe ser de tipo email.</span>
                  <span v-show="errors.has('email')" class="text-danger">*El correo debe contener entre 1 y 65 caracteres</span>
               </p>
               <p>
                  <el-input v-model="usuario_model.password1" name='password1' type="password"  placeholder="Contraseña" v-validate="'required|min:8|max:50'"></el-input>
                  <span v-show="errors.has('password1')" class="text-danger">*La contraseña debe contener entre 8 y 50 caracteres</span>
               </p>
               <p>
                  <el-input v-model="usuario_model.password2" name='password2' type="password" placeholder="Repita Contraseña" v-validate="'required|min:8|max:50'"></el-input>
                  <span v-show="errors.has('password2')" class="text-danger">*La contraseña debe contener entre 8 y 50 caracteres</span>
               </p>
               <p class="txt-cen">¿Quiere inscribir su empresa?</p>
               <div class="form-group txt-cen">
                  <el-radio type="radio" v-model="btn_empresa" label="1">Si</el-radio>
                  <el-radio type="radio" v-model="btn_empresa" label="2">No</el-radio>
               </div>
               <el-button type="primary" class="btn-lg btn-block" v-on:click="registrar()">Registrarme</el-button>
            </section>
         </div>
         <div class="img-rigth col-md-3"></div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "registration",
    data(){
        return{
            usuario_model: {
                username: null,
                email: null,
                password1: null,
                password2: null
            },
            respuesta: '',
            btn_empresa: '2'
        }
    },

    mounted(){     
    },

    methods:{
        registrar: function(){
            let emailAux= this.usuario_model.email;
            let typeEmail= this.isValidEmail(emailAux);
            if(typeEmail==false){
                document.querySelector('.email_type').style.display='block';
                return
            }else{
                document.querySelector('.email_type').style.display='none';
            }
            
            axios({
                method: "post",
                url: 'http://68.183.124.242:8000/rest-auth/registration/',
                data:{
                    username: this.usuario_model.email,
                    email: this.usuario_model.email,
                    password1: this.usuario_model.password1,
                    password2: this.usuario_model.password2
                }
            })
            .then(respuesta => {
                sessionStorage.setItem('user',this.usuario_model.email);
                if (this.btn_empresa==1){
                    this.$router.push({ path: '/registration/business'})
                }else{
                    this.$router.push({ path: 'home'})
                }
            })
            .catch(e =>{                
                this.$notify({
                    message: 'Las contraseñas no coincide',
                    type: 'warning'
                });
            })
        },
        isValidEmail: function(mail){
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
        }

    }
}
</script>



<style>
.loginkr-r {
    padding-top: 10%;
    padding-bottom: 13%;
}

</style>


