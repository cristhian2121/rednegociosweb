<template>
  <header id="header">
    <div class="container justify-content-between d-flex">
      
        <img src="@/assets/logo.png" class="im-logo"/>
      
      
      <nav id="nav-menu-container">
        <ul class="nav-menu">     
          <li>         
            <span class="el-icon-menu ticker-txt"></span>
            <router-link :to="{ path: '/home' }">Inicio</router-link>                 
          </li>              
          <li>
            <span class="el-icon-edit-outline ticker-txt"></span> 
            <router-link :to="{ path: '/empresa/registro' }">Anúnciate</router-link>
          </li>
            <!-- <li><span class="glyphicon glyphicon-user ticker-txt">
              </span>
            <router-link :to="{ path: '/login' }">Iniciar sesión</router-link>              
            </li> -->
          <li>
            <span class="el-icon-circle-close-outline ticker-txt"></span>
            <router-link :to="{ path: '/' }">Salir</router-link>     
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default{
  data () {
    return {
}
  }
}
</script>

<style>
.im-logo{
  height: 70px;
}
</style>




