<template>
      <div class="row">
         <div class="img-left col-md-3"></div>
         <div class="loginkr col-md-6">
            <section class="login-form">
               <p><img src="@/assets/logo.png" class="img-responsive img-logo" alt="" /></p>
               <!--https://thumbs.dreamstime.com/b/conexi%C3%B3n-de-red-social-y-comunicaci%C3%B3n-empresarial-global-89882816.jpg" class="img-responsive" alt="" /></p>-->
               <p>
                  <el-input v-model="usuario_model.email" type="email" name="email" placeholder="Correo electrónico" required></el-input>
               </p>
               <p>
                  <el-input v-model="usuario_model.password" type="password" id="password1" placeholder="Contraseña" required=""></el-input>
               </p>
               <p>
               <div class="cont-center g-recaptcha" data-sitekey="6LdOw3UUAAAAADpYeBKGykbrkXelEx6mtlrVI4rb"></div>
               </p>
               <el-button type="primary" class="btn-lg btn-block" v-on:click="ingresar()">Ingresar</el-button>
               <router-link :to="{ path: '/registration'}">Registrarme -</router-link>
               <a href="#"> Olvide Contraseña</a>
            </section>
         </div>
         <div class="img-rigth col-md-3">
            <div style="height: 20%;"></div>
            <el-button type="info">Preguntas frecuentes</el-button>
         </div>
      </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "login",
    data(){
        return{
            usuario_model: {
                email: null,
                password: null
            },
            respuesta: ''
        }
    },
    mounted(){    
        sessionStorage.removeItem('user') ;
    },
    methods:{
        ingresar: function(){
            axios({
                method: "post",
                url: 'http://68.183.124.242:8000/rest-auth/login/',
                data:{
                    username: this.usuario_model.email,
                    email: this.usuario_model.email,
                    password: this.usuario_model.password
                }
            })
            .then(respuesta => {
                sessionStorage.setItem('user',this.usuario_model.email);
                this.$router.push({ path: 'home'})
            })
            .catch(e =>{
                this.$notify({
                    message: 'Usuario o contraseña invalida.',
                    type: 'warning'
                });
            })
        }
    }
}
</script>

<style>


.img-logo{
  display:block;
  margin-left: auto;
  margin-right: auto;
}

.txt-cen{
  color: #777777;
  margin-left: 50%;
}
.loginkr {
    padding-top: 5%;
    padding-bottom: 8%;
}

 /* @media only screen and (max-width: 1024px) {
  .loginkr {
    padding-top: 5%;
    padding-bottom: 10%;
  }
}
@media only screen and (max-width: 768px) {
  .loginkr {
    padding-top: 5%;
    padding-bottom: 9%;
  }
}
@media only screen and (max-width: 650px) {
  .loginkr {
    padding-top: 5%;
    padding-bottom: 8%;
  }
}
@media only screen and (max-width: 600px) {
  .loginkr {
    padding-top: 5%;
    padding-bottom: 7%;
  }
}
@media only screen and(max-width: 500px) {
  .loginkr {
    padding-top: 5%;
    padding-bottom: 6%;
  }
}
@media (max-width: 400px) {
  .loginkr {
    padding-top: 5%;
    padding-bottom: 5%;
  }
} */

</style>


