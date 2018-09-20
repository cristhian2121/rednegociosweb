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

<template>

    <div class="container login-kr">
  
  <div class="row" id="pwd-container">
    <div class="col-md-4"></div>
    
    <div class="col-md-4">
      <section class="login-form">
          <p>
              <img src="https://thumbs.dreamstime.com/b/conexi%C3%B3n-de-red-social-y-comunicaci%C3%B3n-empresarial-global-89882816.jpg" class="img-responsive" alt="" />
          </p>
          <p>
              <input v-model="usuario_model.email" type="email" name="email" placeholder="Correo electrónico" required class="form-control input-lg"/>          
          </p>
          
          <p>
              <input v-model="usuario_model.password" type="password1" class="form-control input-lg" id="password1" placeholder="Contraseña" required="" />          
          </p>
          
          <div class="pwstrength_viewport_progress"></div>          
          
          <button class="btn btn-lg btn-primary btn-block"
          v-on:click="ingresar()">Ingresar</button>
          <div>
            <router-link :to="{ path: '/registration' }">Registrarme</router-link>- <a href="#">Olvide Contraseña</a>
          </div>
<!--           
        
        <div class="form-links">
          <a href="#">www.website.com</a>
        </div> -->
      </section>  
      </div>
      
      <div class="col-md-4"></div>     

  </div>
    </div>
</template>

<style>
.login-kr{
	padding-top: 15%;
}
</style>


