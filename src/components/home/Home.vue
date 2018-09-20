<template>
    <div class="home">      
<!-- import iView -->
<div v-if="!carga">
    <section class="banner-area relative" id="home">	
        <div class="">
            <div class="row fullscreen d-flex align-items-center justify-content-center">
            <div class="banner-content col-lg-12">
                <div class="justify-content-center form-wrap">
                        <fieldset >    
                            <div class="col-md-1"></div>
                            <!--For search-->
                            <div class="col-md-3">
                            <label class=" form-cols" for="busqueda"></label>
                                <input id="busqueda" name="busqueda" type="search" placeholder="Que estas buscando?" class="form-control">
                            </div>
                            <div class="col-md-3" v-if="tipos">
                            <label class="" for="b_ciudad">Tipo</label>
                            <template>
                              <el-select v-model="tipoModel" clearable placeholder="Seleccionar">
                                <el-option v-for="tipo in tipos" :key="tipo.id_tipo"
                                 :label="tipo.nombre" :value="tipo.id_tipo">
                                </el-option>
                              </el-select>
                            </template>
                            </div>        
                            <div class="col-md-3" v-if="ciudades">
                            <label class="" for="tipo">Ciudad</label>
                            <template>
                              <el-select v-model="ciudadModel" clearable placeholder="Seleccionar">
                                <el-option v-for="ciudad in ciudades" :key="ciudad.name"
                                 :label="ciudad.ciudad" :value="ciudad.id_ciudad">
                                </el-option>
                              </el-select>
                            </template>
                            </div>      
                            <!-- Button -->
                            <div class="col-md-2"> 
                              <el-button type="primary" icon="el-icon-search" v-on:click="buscar_filtros">Buscar</el-button>      		                               
                            </div>
                        </fieldset >                    
                </div>
            </div>											
        </div>
    </div>
</section>
<!---->

<section class="features-area">
  <div class="container">
    <div class="row">

      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="single-fcat">
          <a href="category.html">
            <img src="../../static/img/o1.png" alt="">
          </a>
          <p>Reparaciones</p>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-fcat">
            <a href="category.html">
              <img src="../../static/img/o2.png" alt="">
            </a>
            <p>Call Center</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-fcat">
            <a href="category.html">
              <img src="../../static/img/o3.png" alt="">
            </a>
            <p>Tecnologia</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-fcat">
            <a href="category.html">
              <img src="../../static/img/o4.png" alt="">
            </a>
            <p>Logistica</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-fcat">
            <a href="category.html">
              <img src="../../static/img/o5.png" alt="">
            </a>
            <p>Medicina</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="single-fcat">
            <a href="category.html">
              <img src="../../static/img/o6.png" alt="">
            </a>
            <p>Ventas</p>
          </div>			
        </div>		   
        
      </div>
    </div>	
  </section>

  <!-- Start popular-post Area -->
<section class="popular-post-area pt-100">
  <div class="container">
          <div class="row align-items-center">
            <div class="container active-popular-post-carusel">
              <div v-for="empresa in empresasAux">
              <div class="single-popular-post d-flex flex-row">
                <div class="thumb">                  
                  <img class="img-responsive" src="empresa.logo" style="width:150px; height:100px" alt="">                  
                  <a class="btns text-uppercase" href="#">view job post</a>
                </div>
                <div class="details">
                  <a href="#"><h4>{{ empresa.nombre }}</h4></a>
                  <h6>servicios</h6>
                  <p>
                    No se que más mostrar jajaja
                  </p>
                </div>
              </div>
              </div>
																																							
            </div>
          </div>
        </div>	
      </section>
<br/>
 <!-- Start post Area -->
      <section class="post-area section-gap">
        <div class="container">
          <div class="row justify-content-center d-flex">
            <div class="col-lg-8 post-list">
              <ul class="cat-list">
                <li><a href="#">Recent</a></li>
                <li><a href="#">Full Time</a></li>
                <li><a href="#">Intern</a></li>
                <li><a href="#">part Time</a></li>
              </ul>
              <div class="single-post d-flex flex-row">
                <div class="thumb">
                  <img src="{% static 'img/post.png' %}" alt="">
                  <ul class="tags">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Design</a>					
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <div class="title d-flex flex-row justify-content-between">
                    <div class="titles">
                      <a href="single.html"><h4>Creative Art Designer</h4></a>
                      <h6>Premium Labels Limited</h6>					
                    </div>
                    <ul class="btns">
                      <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                      <li><a href="#">Apply</a></li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                  </p>
                  <h5>Job Nature: Full time</h5>
                  <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                </div>
              </div>
              <div class="single-post d-flex flex-row">
                <div class="thumb">
                  <img src="{% static 'img/post.png' %}" alt="">
                  
                  <ul class="tags">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Design</a>					
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <div class="title d-flex flex-row justify-content-between">
                    <div class="titles">
                      <a href="single.html"><h4>Creative Art Designer</h4></a>
                      <h6>Premium Labels Limited</h6>					
                    </div>
                    <ul class="btns">
                      <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                      <li><a href="#">Apply</a></li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                  </p>
                  <h5>Job Nature: Full time</h5>
                  <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                </div>
              </div>
              <div class="single-post d-flex flex-row">
                <div class="thumb">
                  <img src="{% static 'img/post.png' %}" alt="">
                  <ul class="tags">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Design</a>					
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <div class="title d-flex flex-row justify-content-between">
                    <div class="titles">
                      <a href="single.html"><h4>Creative Art Designer</h4></a>
                      <h6>Premium Labels Limited</h6>					
                    </div>
                    <ul class="btns">
                      <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                      <li><a href="#">Apply</a></li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                  </p>
                  <h5>Job Nature: Full time</h5>
                  <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                </div>
              </div>		
              <div class="single-post d-flex flex-row">
                <div class="thumb">
                  <img src="{% static 'img/post.png' %}" alt="">
                  <ul class="tags">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Design</a>					
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <div class="title d-flex flex-row justify-content-between">
                    <div class="titles">
                      <a href="single.html"><h4>Creative Art Designer</h4></a>
                      <h6>Premium Labels Limited</h6>					
                    </div>
                    <ul class="btns">
                      <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                      <li><a href="#">Apply</a></li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                  </p>
                  <h5>Job Nature: Full time</h5>
                  <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                </div>
              </div>
              <div class="single-post d-flex flex-row">
                <div class="thumb">
                  <img src="img/post.png" alt="">
                  <ul class="tags">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Design</a>					
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <div class="title d-flex flex-row justify-content-between">
                    <div class="titles">
                      <a href="single.html"><h4>Creative Art Designer</h4></a>
                      <h6>Premium Labels Limited</h6>					
                    </div>
                    <ul class="btns">
                      <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                      <li><a href="#">Apply</a></li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                  </p>
                  <h5>Job Nature: Full time</h5>
                  <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                </div>
              </div>
              <div class="single-post d-flex flex-row">
                <div class="thumb">
                  <img src="img/post.png" alt="">
                  <ul class="tags">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Design</a>					
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <div class="title d-flex flex-row justify-content-between">
                    <div class="titles">
                      <a href="single.html"><h4>Creative Art Designer</h4></a>
                      <h6>Premium Labels Limited</h6>					
                    </div>
                    <ul class="btns">
                      <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                      <li><a href="#">Apply</a></li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                  </p>
                  <h5>Job Nature: Full time</h5>
                  <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                </div>
              </div>															
              <div class="single-post d-flex flex-row">
                <div class="thumb">
                  <img src="img/post.png" alt="">
                  <ul class="tags">
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Design</a>					
                    </li>
                  </ul>
                </div>
                <div class="details">
                  <div class="title d-flex flex-row justify-content-between">
                    <div class="titles">
                      <a href="single.html"><h4>Creative Art Designer</h4></a>
                      <h6>Premium Labels Limited</h6>					
                    </div>
                    <ul class="btns">
                      <li><a href="#"><span class="lnr lnr-heart"></span></a></li>
                      <li><a href="#">Apply</a></li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                  </p>
                  <h5>Job Nature: Full time</h5>
                  <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                  <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                </div>
              </div>	
              
              <a class="text-uppercase loadmore-btn mx-auto d-block" href="category.html">Load More job Posts</a>
  
            </div>
            <div class="col-lg-4 sidebar">
              <div class="single-slidebar">
                <h4>Jobs by Location</h4>
                <ul class="cat-list">
                  <li><a class="justify-content-between d-flex" href="category.html"><p>New York</p><span>37</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Park Montana</p><span>57</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Atlanta</p><span>33</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Arizona</p><span>36</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Florida</p><span>47</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Rocky Beach</p><span>27</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Chicago</p><span>17</span></a></li>
                </ul>
              </div>
  
              <div class="single-slidebar">
                <h4>Top rated job posts</h4>
                <div class="active-relatedjob-carusel">
                  <div class="single-rated">
                    <img class="img-fluid" src="img/r1.jpg" alt="">
                    <a href="single.html"><h4>Creative Art Designer</h4></a>
                    <h6>Premium Labels Limited</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                    <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                    <a href="#" class="btns text-uppercase">Apply job</a>
                  </div>
                  <div class="single-rated">
                    <img class="img-fluid" src="img/r1.jpg" alt="">
                    <a href="single.html"><h4>Creative Art Designer</h4></a>
                    <h6>Premium Labels Limited</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                    <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                    <a href="#" class="btns text-uppercase">Apply job</a>
                  </div>
                  <div class="single-rated">
                    <img class="img-fluid" src="img/r1.jpg" alt="">
                    <a href="single.html"><h4>Creative Art Designer</h4></a>
                    <h6>Premium Labels Limited</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
                    </p>
                    <h5>Job Nature: Full time</h5>
                    <p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
                    <p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
                    <a href="#" class="btns text-uppercase">Apply job</a>
                  </div>																		
                </div>
              </div>							
  
              <div class="single-slidebar">
                <h4>Jobs by Category</h4>
                <ul class="cat-list">
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Technology</p><span>37</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Media & News</p><span>57</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Goverment</p><span>33</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Medical</p><span>36</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Restaurants</p><span>47</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Developer</p><span>27</span></a></li>
                  <li><a class="justify-content-between d-flex" href="category.html"><p>Accounting</p><span>17</span></a></li>
                </ul>
              </div>
  
              <div class="single-slidebar">
                <h4>Carrer Advice Blog</h4>
                <div class="blog-list">
                  <div class="single-blog " style="background:#000 url(img/blog1.jpg);">
                    <a href="single.html"><h4>Home Audio Recording <br>
                    For Everyone</h4></a>
                    <div class="meta justify-content-between d-flex">
                      <p>
                        02 Hours ago
                      </p>
                      <p>
                        <span class="lnr lnr-heart"></span>
                        06
                         <span class="lnr lnr-bubble"></span>
                        02
                      </p>
                    </div>
                  </div>
                  <div class="single-blog " style="background:#000 url(img/blog2.jpg);">
                    <a href="single.html"><h4>Home Audio Recording <br>
                    For Everyone</h4></a>
                    <div class="meta justify-content-between d-flex">
                      <p>
                        02 Hours ago
                      </p>
                      <p>
                        <span class="lnr lnr-heart"></span>
                        06
                         <span class="lnr lnr-bubble"></span>
                        02
                      </p>
                    </div>
                  </div>
                  <div class="single-blog " style="background:#000 url(img/blog1.jpg);">
                    <a href="single.html"><h4>Home Audio Recording <br>
                    For Everyone</h4></a>
                    <div class="meta justify-content-between d-flex">
                      <p>
                        02 Hours ago
                      </p>
                      <p>
                        <span class="lnr lnr-heart"></span>
                        06
                         <span class="lnr lnr-bubble"></span>
                        02
                      </p>
                    </div>
                  </div>																		
                </div>
              </div>							
  
            </div>
          </div>
        </div>	
      </section>

<br/>
</div>
 <!--loader-->
  <div class="centrar" v-if="carga">
    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
</div>


</template>

<script>
import axios from "axios";
import Ciudad from "../../models/ciudad.js";
import Tipo from "../../models/tipo.js";

export default {
  name: "home",
  async mounted() {
    await this.traer_ciudades();
    await this.traer_tipos();
    await this.traer_Empresas();     
  },
  data() {
    return {
      ciudades: Ciudad,
      tipos: Tipo,
      ciudadModel:"",
      tipoModel: "",
      pequ: Ciudad,
      empresas: [Object],
      empresasAux: [Object],
      carga: true
    };
  },
  methods: {
    buscar_filtros: function() {
      if (this.ciudadModel) {
        this.empresasAux = this.empresas.filter(
          empresa => empresa.id_ciudad == this.ciudadModel
        );
      }
      else if (this.tipoModel) {
        this.empresasAux = this.empresas.filter(
          empresa => empresa.id_tipo == this.tipoModel
        );
      }
      else{
        this.empresasAux = this.empresas;
      }
    },

    traer_Empresas: async function() {
      axios.get("http://localhost:8000/api/empresa/").then(respuesta => {
      this.empresas = respuesta.data;
      this.empresasAux = this.empresas;
      this.carga = false;   
    });
    },
    traer_tipos: async function(){
      axios.get("http://localhost:8000/api/tipo/").then(respuesta => {
      this.tipos = respuesta.data;
      console.log(this.tipos);
    });
    },
    traer_ciudades: async function(){
      axios.get("http://localhost:8000/api/ciudad/").then(respuesta => {
      this.ciudades = respuesta.data;
    });
    }

  }
};
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