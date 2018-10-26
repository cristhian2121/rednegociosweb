<template>
    <div class="container loginkr">
        <div class="row">
            <div class="col-md-3"></div>
            
            <div class="col-md-6">
                <section class="login-form">
                    <p><img src="@/assets/logo.png" class="img-responsive img-logo" alt="" /></p> <!--https://thumbs.dreamstime.com/b/conexi%C3%B3n-de-red-social-y-comunicaci%C3%B3n-empresarial-global-89882816.jpg" class="img-responsive" alt="" /></p>-->
                    <p><input v-model="usuario_model.email" type="email" name="email" placeholder="Correo electrónico" required class="form-control input-lg"/></p>
                    <p><input v-model="usuario_model.password" type="password" class="form-control input-lg" id="password1" placeholder="Contraseña" required="" /></p>
                    <form>
                        <div class="g-recaptcha" data-sitekey="6LdOw3UUAAAAADpYeBKGykbrkXelEx6mtlrVI4rb"></div>
                    </form>
                    
                    
                    <el-button type="primary" class="btn-lg btn-block" v-on:click="ingresar()">Ingresar</el-button>
                    
                    <router-link :to="{ path: '/registration'}">Registrarme -</router-link><a href="#"> Olvide Contraseña</a>
                </section>  
            </div>
      
            <div class="col-md-3">
                <el-button type="info">Preguntas frecuentes</el-button>
            </div>
 
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
                url: 'http://localhost:8000/rest-auth/login/',
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
                    message: 'Contraseña invalida.',
                    type: 'warning'
                });
            })
        }
    }
}
</script>

<style>
.loginkr{
    padding-top: 9%;
}

.img-logo{
  display:block;
  margin-left: auto;
  margin-right: auto;
}

.txt-cen{
  color: #777777;
  margin-left: 50%;
}
</style>


