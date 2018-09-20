<template>

    <div class="container login-kr">
  
  <div class="row" id="pwd-container">
    <div class="col-md-4"></div>
    
    <div class="col-md-4">
      <section class="login-form">
          
          <p>
              <input v-model="usuario_model.email" type="email" name="email" placeholder="Correo electrónico" required class="form-control input-lg"/>          
          </p>
          
          <p>
              <input v-model="usuario_model.password1" type="password" class="form-control input-lg" id="password" placeholder="Contraseña" required="" />          
          </p>

          <p>
              <input v-model="usuario_model.password2" type="password" class="form-control input-lg" id="password" placeholder="Repita Contraseña" required="" />          
          </p>
          
          <div class="pwstrength_viewport_progress"></div>          
          
          <button class="btn btn-lg btn-primary btn-block"
          v-on:click="registrar()">Registrarme</button>
          
      </section>  
      </div>
      
      <div class="col-md-4"></div>     

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
            respuesta: ''
        }
    },

    mounted(){     
    },

    methods:{
        registrar: function(){
            axios({
                method: "post",
                url: 'http://localhost:8000/rest-auth/registration/',
                data:{
                    username: this.usuario_model.email,
                    email: this.usuario_model.email,
                    password1: this.usuario_model.password1,
                    password2: this.usuario_model.password2
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
.login-kr{
	padding-top: 15%;
}
</style>


