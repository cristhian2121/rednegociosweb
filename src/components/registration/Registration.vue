<template>
<div class="">
    <div class="row">
        <div class="img-left col-md-3"></div>
    
        <div class="loginkr col-md-6">
            <h2 style="text-align:center">Registro Personas</h2>
            <hr><br>
            <section class="login-form">
          
                <p><el-input v-model="usuario_model.email" type="email" name="email" placeholder="Correo electrónico" required ></el-input></p>
                <p><el-input v-model="usuario_model.password1" type="password"  placeholder="Contraseña" required=""></el-input></p>
                <p><el-input v-model="usuario_model.password2" type="password" placeholder="Repita Contraseña" required=""></el-input></p>

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
                if (this.btn_empresa==1){
                    this.$router.push({ path: '/registration/business'})
                }else{
                    this.$router.push({ path: 'home'})
                }
            })
            .catch(e =>{                
                this.$notify({
                    message: 'La contraseña no coincide',
                    type: 'warning'
                });
            })
        }

    }
}
</script>



<style>
.login-kr{
	padding-top: 8%;
}
</style>


