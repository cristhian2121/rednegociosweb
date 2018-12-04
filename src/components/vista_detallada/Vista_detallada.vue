<template>   
  <div id="top" v-if="!carga">
    <!-- barra de navegación -->
    <header class="s-header">
        <div class="header-logo">
            <a class="site-logo" href=""><img src="" alt="Logo"></a>
        </div>
        <router-link class="header-menu-toggle" :to="{ path: '/home' }">Inicio</router-link>
    </header>
    <!-- end barra de navegación -->

    <!-- banner -->
    <section id="home" class="s-home" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width=3000 data-natural-height=2000 data-position-y=top>
        <div class="shadow-overlay"></div>
        <div class="container home-content">
            <div class="home-content__main">
                <h1>{{ empresas.nombre }}<br></h1>
                <!--<p>lema <br></p>-->
            </div>
        </div>
        <ul class="home-sidelinks">
            <li><a class="smoothscroll" href="#about">Nosotros<span></span></a></li>
            <li><a class="smoothscroll" href="#services">Servicios<span></span></a></li>
            <li><a  class="smoothscroll" href="#contact">Contacto<span></span></a></li>
        </ul>
        <ul class="home-social">
            <li class="home-social-title">Siguenos</li>
            <li><a href="#0"><i class="fab fa-facebook"></i><span class="home-social-text">Facebook</span></a></li>
            <li><a href="#0"><i class="fab fa-twitter"></i><span class="home-social-text">Twitter</span></a></li>
            <li><a href="#0"><i class="fab fa-linkedin"></i><span class="home-social-text">LinkedIn</span></a></li>
        </ul>
        <a href="#about" class="home-scroll smoothscroll">
            <span class="home-scroll__text">Bajar</span><span class="home-scroll__icon"></span>
        </a>
    </section>
    <!-- end banner -->
    <!---->


    <!-- about -->
    <section id='about' class="s-about">
        <div>
            <div class="col-full">
                <h3 class="subhead">Quienes somos</h3>
                <!--<h1 class="display-1--light">{{ empresa.lema}}</h1>-->
            </div>
        </div>
        <div >
            <div class="col-full">
                <p class="lead">{{ empresas.mision }}
                </p>
            </div>
        </div>
    </section>
    <!-- end about -->

    <!-- services -->
    <section id='services' class="s-services light-gray popular-post-area pt-100">

      <div >
        <div class="col-full">
          <h3 class="subhead">Nuestros servicios</h3>
                <!--<h1 class="display-1--light">resumen sobre servicios.</h1>-->
        </div>
      </div>

      <div class="services-list align-items-center">
          <div v-for="servicio in servicios">
            <div class="service-item d-flex flex-row">
              <div class="thumb">                  
                <img class="img-responsive" v-bind:src="'D:/proyectoRolo/Api/archivo/'+empresas.nombre_logo"
                style="width:150px; height:100px" alt=""/> 
              </div>

              <div class="details">
                <a class='h4 name-emp'>{{ empresas.nombre }}</a>
                <p>{{ empresas.mision }} Nemo cupiditate ab quibusdam quaerat impedit magni. Ea</p>
              </div>                      
            </div>
          </div>																																			
      </div>

    </section>
    <!-- end services -->

    <!-- Blog-->
    <section id='works' class="s-works">

        <!--<div class="row section-header">
            <div class="col-full">
                <h3 class="subhead">Ultimas publicaciones</h3>
                <h1 class="display-1--light">Estas son unos de nuestros ultimos productos.</h1>
            </div>
        </div>

        <div class="row masonry-wrap">
            <div class="masonry">
                <div class="masonry__brick">
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                            <a href="images/portfolio/gallery/g-lamp.jpg" class="thumb-link" title="Lamp" data-size="1050x700">
                                <img src="images/portfolio/lamp.jpg"
                                     srcset="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x" alt="">
                            </a>
                        </div>
                        <div class="item-folio__text">
                            <h3 class="item-folio__title">
                                Lamp
                            </h3>
                            <p class="item-folio__cat">
                                Web Design
                            </p>
                        </div>
                        <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
                            Project Link
                        </a>
                        <div class="item-folio__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div>

                <div class="masonry__brick">
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                            <a href="images/portfolio/gallery/g-salad.jpg" class="thumb-link" title="Salad" data-size="1050x700">
                                <img src="images/portfolio/salad.jpg"
                                     srcset="images/portfolio/salad.jpg 1x, images/portfolio/salad@2x.jpg 2x" alt="">
                            </a>
                        </div>
                        <div class="item-folio__text">
                            <h3 class="item-folio__title">Salad</h3>
                            <p class="item-folio__cat">Branding</p>
                        </div>
                        <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
                            Project Link
                        </a>
                        <span class="item-folio__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </span>
                    </div>
                </div>

                <div class="masonry__brick">
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                            <a href="images/portfolio/gallery/g-woodcraft.jpg" class="thumb-link" title="Woodcraft" data-size="1050x700">
                                <img src="images/portfolio/woodcraft.jpg"
                                     srcset="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x" alt="">
                            </a>
                        </div>
                        <div class="item-folio__text">
                            <h3 class="item-folio__title">Woodcraft</h3>
                            <p class="item-folio__cat">Branding</p>
                        </div>
                        <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
                            Project Link
                        </a>
                        <span class="item-folio__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </span>
                    </div>
                </div>

                <div class="masonry__brick">
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                            <a href="images/portfolio/gallery/g-liberty.jpg" class="thumb-link" title="Liberty" data-size="1050x700">
                                <img src="images/portfolio/liberty.jpg"
                                     srcset="images/portfolio/liberty.jpg 1x, images/portfolio/liberty@2x.jpg 2x" alt="">
                            </a>
                        </div>
                        <div class="item-folio__text">
                            <h3 class="item-folio__title">Liberty</h3>
                            <p class="item-folio__cat">Web Development</p>
                        </div>
                        <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
                            Project Link
                        </a>
                        <span class="item-folio__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </span>
                    </div>
                </div>

                <div class="masonry__brick">
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                            <a href="images/portfolio/gallery/g-fuji.jpg" class="thumb-link" title="Fuji" data-size="1050x700">
                                <img src="images/portfolio/fuji.jpg"
                                     srcset="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x" alt="">
                            </a>
                        </div>
                        <div class="item-folio__text">
                            <h3 class="item-folio__title">Fuji</h3>
                            <p class="item-folio__cat">Web Design</p>
                        </div>
                        <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
                            Project Link
                        </a>
                        <span class="item-folio__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </span>
                    </div>
                </div>

                <div class="masonry__brick">
                    <div class="item-folio">
                        <div class="item-folio__thumb">
                            <a href="images/portfolio/gallery/g-shutterbug.jpg" class="thumb-link" title="Shutterbug" data-size="1050x700">
                                <img src="images/portfolio/shutterbug.jpg"
                                     srcset="images/portfolio/shutterbug.jpg 1x, images/portfolio/shutterbug@2x.jpg 2x" alt="">
                            </a>
                        </div>
                        <div class="item-folio__text">
                            <h3 class="item-folio__title">Lady Shutterbug</h3>
                            <p class="item-folio__cat">Branding</p>
                        </div>
                        <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
                            Project Link
                        </a>
                        <span class="item-folio__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        end blog -->

        <!-- lo que dicen los clientes-->
        <div class="testimonials-wrap" >
          
                <div class="col-full testimonials-header">
                    <h2>Ultimos comentarios</h2>
                </div>

            <div class="testimonials">
                    <div class="testimonials__slide">
                        <img src="images/avatars/user-01.jpg" alt="image" class="testimonials__avatar">
                        <p>Muy buen servicio.</p>
                        <div class="testimonials__author">
                            Tim Cook<span>CEO, Apple</span>
                        </div>
                    </div>
                    <div class="testimonials__slide">
                        <img src="images/avatars/user-05.jpg" alt="Author image" class="testimonials__avatar">
                        <p>¿Cuanto valen los nevecones?</p>
                        <div class="testimonials__author">
                            Sundar Pichai
                            <span>CEO, Google</span>
                        </div>
                    </div>
                    <div class="testimonials__slide">
                        <img src="images/avatars/user-02.jpg" alt="Author image" class="testimonials__avatar">
                        <p>les doy 5 estrellas.</p>
                        <div class="testimonials__author">
                            Satya Nadella
                            <span>CEO, Microsoft</span>
                        </div>
                    </div>

            </div>
        </div>
    </section>


    <!-- contact -->
    <section id="contact" class="s-contact">

        <div>
            <div class="col-full">
                <h3 class="subhead">Contactanos</h3>
                <h3 class="display-1--light">Ponte en contacto y hagamos algo genial juntos.</h3>
            </div>
        </div>

        <div class="">
            <div class="col-full contact-main">
                <p>
                <a href="mailto:#0" class="contact-email">{{ empresas.email}}</a>
                <span class="contact-number"> {{ empresas.telefono}}  /  {{ empresas.celular }}</span>
                </p>
            </div>
        </div>

        <div class="row">

            <div class="col-md-7 contact-secondary">
                <h3 class="subhead">Donde encontrarnos</h3>

                <p class="contact-address">
                    {{ empresas.ciudad }}, {{ empresas.pais}}<br>
                    {{ empresas.direccion }}
                </p>
            </div>

            <div class="col-md-5 contact-secondary">
                <h3 class="subhead">Siguenos</h3>

                <ul class="contact-social">
                    <li><a href="#0"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#0"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#0"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#0"><i class="fab fa-behance"></i></a></li>
                    <li><a href="#0"><i class="fab fa-dribbble"></i></a></li>
                </ul>

                <!--<div class="contact-subscribe">
                    <form id="mc-form" class="group mc-form" novalidate="true">
                        <input type="email" value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address" required="">
                        <input type="submit" name="subscribe" value="Subscribete">
                        <label for="mc-email" class="subscribe-message"></label>
                    </form>
                </div>-->
            </div>

        </div> <!-- end row -->

        <div class="row">
            <!--<div class="col-full cl-copyright">
                <span>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://bitools.co" target="_blank">Bitools</a>
            </div>-->
        </div>

        <div class="cl-go-top">
            <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up" aria-hidden="true"></i></a>
        </div>

    </section>
    <!-- end s-contact -->
    </div>
    <!-- /.container -->
</template>

<script>
import axios from "axios";

export default {
  name: "vista-detallada",
  props: ["id_empresa"],

  async mounted() {
    this.carga = true; 
    await this.traer_servicios();   
  },
  data() {
    return {
      empresas: [Object],
      empresasAux: [Object],
      servicios: [Object],
      nombre_empresa: "",
      carga: true
    };
  },
  mounted() {
    this.nombre_empresa = this.$route.params.nombre;
    if (this.nombre_empresa) this.traer_empresas();
  },
  methods: {

    mostrar_servicios: function() {
      if (this.servicioModel) {
        this.empresas = this.empresas.filter(
          empresa => empresa.id_empresa == this.servicioModel
        );
      }
      
    },


    traer_empresas: function() {
      axios
        .get(`http://68.183.124.242:8000/api/detalle/?nombre=${this.nombre_empresa}`)
        .then(respuesta => {
          this.empresas = respuesta.data[0];
          this.carga = false;
        });
    },
    traer_servicios: async function() {
      axios.get("http://68.183.124.242:8000/api/servicio/").then(respuesta => {
          this.servicios = respuesta.data[0];
          this.carga = false;
        });
    }
  }
};
</script>

<style>
/* ===================================================================
 * # base style overrides
 *
 * ------------------------------------------------------------------- */
/*
 
@media only screen and (max-width: 400px) {
  html {
    font-size: 9.411764705882353px;
  }
} */

/* ===================================================================
 * # typography & general theme styles
 * 
 * ------------------------------------------------------------------- */
.aaa {
  font-size: 10px;
}

p.lead {
  font-family: "metropolis-regular", sans-serif;
  font-size: 1.6rem;
  line-height: 1.75;
  margin-bottom: 3.6rem;
  color: rgba(85, 85, 85, 0.95);
  text-align: center;
}
@media only screen and (max-width: 1200px) {
  p.lead {
    font-size: 1.7rem;
  }
}
@media only screen and (max-width: 1000px) {
  p.lead {
    font-size: 1.7rem;
  }
}
@media only screen and (max-width: 800px) {
  p.lead {
    font-size: 1.6rem;
  }
}

/* ------------------------------------------------------------------- 
 * ## display headings
 * ------------------------------------------------------------------- */
.display-1--light {
  color: #ffffff;
  font-size: 1.2rem;
}

.subhead {
  font-family: "metropolis-semibold", sans-serif;
  font-size: 0.9rem;
  line-height: 1.3125;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  color: #cc147f;
  margin-top: 0;
  margin-bottom: 2.1rem;
}
.subhead::before {
  content: "/ ";
}

.light-gray {
  background-color: #f1f1f1;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * display headings
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 800px) {
  .subhead {
    font-size: 1.3rem;
  }
}
@media only screen and (max-width: 600px) {
  .display-1--light {
    font-size: 0.8rem;
  }
}
@media only screen and (max-width: 500px) {
  .subhead {
    font-size: 1.2rem;
  }
}

/* ===================================================================
 * # header styles
 *
 * ------------------------------------------------------------------- */
.s-header {
  z-index: 500;
  width: 100%;
  height: 96px;
  background-color: transparent;
  position: absolute;
  top: 24px;
}

/* -------------------------------------------------------------------
 * ## header logo
 * ------------------------------------------------------------------- */
.header-logo {
  z-index: 501;
  display: inline-block;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 110px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.header-logo a {
  display: block;
  padding: 0;
  outline: 0;
  border: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.header-logo img {
  width: 200px;
  height: 38px;
}

/* ------------------------------------------------------------------- 
 * ## mobile menu toggle 
 * ------------------------------------------------------------------- */
.header-menu-toggle {
  position: fixed;
  right: 110px;
  top: 42px;
  width: 48px;
  height: 45px;
  line-height: 45px;
  font-family: "metropolis-regular", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: #cc147f;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.header-menu-toggle::before {
  display: inline-block;
  /*content: "Menu";*/
  height: 45px;
  left: auto;
  text-align: right;
  padding-left: 15px;
  padding-right: 10px;
  position: absolute;
  top: 0;
  right: 100%;
}
.header-menu-toggle.opaque {
  background-color: #000000;
}
.header-menu-toggle.opaque::before {
  display: none;
}
.header-menu-toggle:hover,
.header-menu-toggle:focus,
.header-menu-toggle:active {
  color: #1714cc;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * header
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1600px) {
  .header-logo {
    left: 60px;
  }

  .header-menu-toggle {
    right: 60px;
  }
}
@media only screen and (max-width: 800px) {
  .header-logo {
    left: 40px;
  }

  .header-menu-toggle {
    right: 40px;
  }
}
@media only screen and (max-width: 600px) {
  .s-header {
    height: 90px;
    top: 12px;
  }

  .header-logo {
    left: 30px;
  }
  .header-logo img {
    width: 180px;
    height: 34px;
  }

  .header-menu-toggle {
    right: 25px;
    top: 30px;
  }
}
@media only screen and (max-width: 500px) {
  .header-menu-toggle::before {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  .s-header {
    top: 6px;
  }

  .header-logo {
    left: 25px;
  }
  .header-logo img img {
    width: 141px;
    height: 27px;
  }

  .header-menu-toggle {
    top: 24px;
    right: 20px;
  }
}

/* ===================================================================
 * # home
 *
 * ------------------------------------------------------------------- */
.s-home {
  width: 100%;
  height: 80%;
  /*min-height: 786px;*/
  background-color: transparent;
  position: relative;
  /*display: table;*/
}
.s-home .shadow-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: linear-gradient(to right, black 0%, black 20%, transparent 100%);
}
.s-home::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.65;
  background-color: #000000;
}

.no-js .s-home {
  background: #000000;
}

/* ------------------------------------------------------------------- 
 * ## home content
 * ------------------------------------------------------------------- */
.home-content {
  /*display: table-cell;*/
  width: 100%;
  height: 100%;
  vertical-align: middle;
  padding-bottom: 5%;
  overflow: hidden;
  position: relative;
}
.home-content h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-top: 0;
  color: #ffffff;
}
.home-content h1 + p {
  font-size: 2rem;
  line-height: 1.421;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2.4rem;
  padding-left: 10rem;
  position: relative;
}
.home-content h1 + p::before {
  content: "";
  display: block;
  width: 6.5rem;
  height: 1px;
  background-color: #cc147f;
  position: absolute;
  left: 6px;
  top: 2.7rem;
}

.home-content__main {
  padding-top: 15rem;
  padding-right: 5rem;
  position: relative;
}

/* ------------------------------------------------------------------- 
 * ## home sidelinks
 * ------------------------------------------------------------------- */
.home-sidelinks {
  list-style: none;
  font-family: "metropolis-regular", sans-serif;
  font-size: 1rem;
  line-height: 1.714;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 0;
}
.home-sidelinks li {
  display: block;
  padding: 0;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  position: relative;
}
.home-sidelinks li:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.home-sidelinks li::before {
  content: "";
  display: block;
  height: 6px;
  width: 6px;
  background-color: #cc147f;
  border-radius: 50%;
  position: absolute;
  top: 3rem;
  left: 2rem;
}
.home-sidelinks a {
  display: block;
  padding: 2.1rem 15rem 2.1rem 4rem;
  color: #ffffff;
}
.home-sidelinks span {
  display: block;
  font-family: "metropolis-regular", sans-serif;
  font-size: 1.5rem;
  line-height: 1.6rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: none;
  letter-spacing: 0;
}
.home-sidelinks li:hover {
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* ------------------------------------------------------------------- 
 * ## home scroll
 * ------------------------------------------------------------------- */
.home-scroll {
  height: 4.8rem;
  position: absolute;
  right: 110px;
  bottom: 0.001rem;
}
.home-scroll__text {
  display: inline-block;
  font-family: "metropolis-semibold", sans-serif;
  font-size: 11px;
  line-height: 4.8rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: #ffffff;
  border-bottom: 1px solid transparent;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  position: relative;
  right: 7.5rem;
}
.home-scroll__icon {
  display: block;
  height: 60px;
  width: 60px;
  background-color: #ffffff;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 10px 15px;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
}
.home-scroll:hover .home-scroll__text {
  border-bottom: 1px solid #ffffff;
}

.no-svg .home-scroll__icon {
  /*background-image: url(@/assets/icon-arrow-down.png);*/
}

/* ------------------------------------------------------------------- 
 * ## home scroll
 * ------------------------------------------------------------------- */
.home-social {
  list-style: none;
  font-size: 14px;
  line-height: 4.8rem;
  margin: 0;
  color: #ffffff;
  position: absolute;
  bottom: 1rem;
  left: 110px;
}
.home-social a {
  color: #ffffff;
  border-bottom: 1px solid transparent;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.home-social a:hover {
  border-bottom: 1px solid #ffffff;
}
.home-social i {
  display: none;
}
.home-social .home-social-title {
  font-family: "metropolis-semibold", sans-serif;
  padding-right: 4rem;
  margin-right: 0.8rem;
  position: relative;
}
.home-social .home-social-title::after {
  display: block;
  content: "";
  width: 2.4rem;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  right: 0;
  top: 50%;
}
.home-social li {
  display: inline-block;
  position: relative;
  margin-right: 0.6rem;
}
.home-social li a {
  display: block;
}
.home-social li:last-child {
  margin-right: 0;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * home
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1600px) {
  .home-scroll {
    right: 60px;
  }

  .home-social {
    left: 60px;
  }
}
@media only screen and (max-width: 1500px) {

  .home-content__main {
    max-width: 1100px;
  }
}
@media only screen and (max-width: 1400px) {
  .home-content h1 + p::before {
    top: 2.4rem;
  }

  .home-content__main {
    max-width: 1000px;
  }

  .home-sidelinks a {
    padding: 2.1rem 12rem 2.1rem 4rem;
  }
}
@media only screen and (max-width: 1200px) {
  .home-content h1 + p::before {
    width: 5.5rem;
    top: 1.8rem;
  }
  .home-content br {
    display: none;
  }

  .home-content__main {
    max-width: 850px;
  }

  .home-sidelinks a {
    padding: 1.8rem 6rem 1.8rem 4rem;
  }
}
@media only screen and (max-width: 1000px) {
  .home-content__main {
    max-width: 650px;
    padding-right: 0;
  }

  .home-sidelinks {
    display: none;
  }
}
@media only screen and (max-width: 800px) {

  .home-content__main {
    max-width: 580px;
  }

  .home-scroll {
    right: 40px;
  }
  .home-scroll__text {
    display: none;
  }

  .home-social {
    left: 40px;
  }
}
@media only screen and (max-width: 700px) {
  .home-content h1 + p::before {
    top: 1.6rem;
  }

  .home-content__main {
    max-width: 480px;
  }
}
@media only screen and (max-width: 600px) {
  .home-content h1 + p::before {
    left: 0;
    top: 0;
  }

  .home-content__main {
    width: auto;
    padding-left: 35px;
    padding-right: 35px;
  }

  .home-social {
    left: 30px;
    bottom: 6rem;
    bottom: 6rem;
  }
  .home-social i {
    display: inline;
  }
  .home-social .home-social-text {
    display: none;
  }

  .home-scroll {
    right: 30px;
    bottom: 6rem;
  }
  .home-scroll__icon {
    height: 4.2rem;
    width: 4.2rem;
  }
}
@media only screen and (max-width: 500px) {
  .s-home {
    min-height: 642px;
  }
}
@media only screen and (max-width: 400px) {
  .s-home {
    min-height: 630px;
  }
  .home-content__main {
    padding-left: 25px;
    padding-right: 25px;
  }

  .home-social {
    font-size: 13px;
    left: 25px;
  }
  .home-social .home-social-title {
    padding-right: 0.6rem;
  }
  .home-social .home-social-title::after {
    display: none;
  }

  .home-scroll {
    right: 25px;
  }
}

/* ===================================================================
 * # about
 *
 * ------------------------------------------------------------------- */
.s-about {
  padding: 7%;
  background-color: #ffffff;
  position: relative;
}

/* ===================================================================
 * # services
 *
 * ------------------------------------------------------------------- */
.s-services {
  padding: 7%;
  /*padding-bottom: 18rem;*/
  color: #555555;
  position: relative;
}

/* ------------------------------------------------------------------- 
 * ## services list
 * ------------------------------------------------------------------- */
.services-list {
  margin-top: 2%;
}

.service-item{
  padding: 2%;
}

.service-item .thumb {
  display: inline-block;
}

.service-item .thumb img {
  margin-top: 10px;
  margin-left: 5px;
}

.service-item .details {
  margin-left: 40px;
}

.service-item .details p {
  font-size: 1.1rem;
}

.service-item .details .name-emp {
  font-size: 1.5rem;
}
/* ------------------------------------------------------------------- 
 * responsive:
 * services
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1200px) {

  .services-list [class*="col-"]:nth-child(2n + 1) {
    padding-right: 30px;
  }
  .services-list [class*="col-"]:nth-child(2n + 2) {
    padding-left: 30px;
  }
}
@media only screen and (max-width: 800px) {

  .services-list {
    margin-top: 3rem;
  }
  .services-list .service-icon {
    font-size: 4.5rem;
  }
  .services-list [class*="col-"]:nth-child(n) {
    padding: 0 15px;
  }
}
@media only screen and (max-width: 600px) {
  .services-list [class*="col-"]:nth-child(n) {
    padding: 0 10px;
  }
}
@media only screen and (max-width: 400px) {

  .services-list [class*="col-"]:nth-child(n) {
    padding: 0;
  }
}

/* ===================================================================
 * # works
 *
 * ------------------------------------------------------------------- */
.s-works {
  background: #ffffff;
  padding-bottom: 7%;
  position: relative;
}

/* ------------------------------------------------------------------- 
 * ## bricks/masonry
 * ------------------------------------------------------------------- */
.masonry-wrap {
  margin-top: 6rem;
  max-width: none;
  width: 1380px;
}

.masonry:after {
  content: "";
  display: table;
  clear: both;
}
.masonry .grid-sizer,
.masonry__brick {
  width: 460px;
}
.masonry__brick {
  float: left;
  padding: 0;
}

.item-folio {
  position: relative;
  overflow: hidden;
}

.item-folio__thumb img {
  vertical-align: top;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.item-folio__thumb a {
  display: block;
}
.item-folio__thumb a::before {
  z-index: 1;
  display: block;
  background-color: rgba(255, 255, 255, 0.7);
  content: "";
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.item-folio__thumb a::after {
  z-index: 1;
  content: "...";
  font-family: georgia, serif;
  font-size: 3rem;
  color: #000000;
  display: block;
  height: 30px;
  width: 30px;
  line-height: 30px;
  margin-left: -15px;
  margin-top: -15px;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
}

.item-folio__text {
  z-index: 2;
  position: absolute;
  left: 0;
  bottom: 3.6rem;
  padding: 0 3rem;
  -webkit-transform: translate3d(0, -100%, 0);
  -ms-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.item-folio__title {
  color: #000000;
  font-size: 1.8rem;
  margin: 0;
}

.item-folio__cat {
  color: black;
  font-family: "metropolis-regular", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0;
}

.item-folio__caption {
  display: none;
}

.item-folio__project-link {
  z-index: 500;
  display: block;
  font-family: "metropolis-semibold", sans-serif;
  font-size: 1.3rem;
  color: #ffffff;
  background-color: #000000;
  padding: 0.6rem 1.2rem;
  position: absolute;
  top: 3rem;
  left: 3rem;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
.item-folio__project-link::before {
  display: block;
  content: "";
  height: 1px;
  width: 3rem;
  background-color: white;
  position: absolute;
  top: 50%;
  left: -3rem;
}
.item-folio__project-link:hover,
.item-folio__project-link:focus,
.item-folio__project-link:active {
  background-color: #cc147f;
  color: #ffffff;
}

/* on hover */
.item-folio:hover .item-folio__thumb a::before {
  opacity: 1;
  visibility: visible;
}
.item-folio:hover .item-folio__thumb a::after {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.item-folio:hover .item-folio__thumb img {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
.item-folio:hover .item-folio__project-link {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.item-folio:hover .item-folio__text {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

/* ------------------------------------------------------------------- 
 * responsive:
 * works
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1500px) {
  .masonry-wrap {
    width: 1200px;
  }

  .masonry .grid-sizer,
  .masonry__brick {
    width: 400px;
  }
}
@media only screen and (max-width: 1350px) {
  .masonry-wrap {
    width: 1158px;
  }

  .masonry .grid-sizer,
  .masonry__brick {
    width: 386px;
  }
}
@media only screen and (max-width: 1300px) {
  .masonry-wrap {
    width: 990px;
  }

  .masonry .grid-sizer,
  .masonry__brick {
    width: 330px;
  }
}
@media only screen and (max-width: 1100px) {
  .masonry-wrap {
    width: 90%;
    max-width: 800px;
  }

  .masonry .grid-sizer,
  .masonry__brick {
    width: 50%;
  }
}
@media only screen and (max-width: 800px) {
  .masonry-wrap {
    margin-top: 3rem;
  }
}
@media only screen and (max-width: 600px) {
  .masonry .grid-sizer,
  .masonry__brick {
    width: 100%;
  }
}
@media only screen and (max-width: 400px) {
  .masonry-wrap {
    width: auto;
  }
}

/* ===================================================================
 * # testimonials
 *
 * ------------------------------------------------------------------- */
.testimonials-header {
  text-align: center;
  margin-top: 7.2rem;
}

.testimonials {
  line-height: 2;
  margin-top: 4.2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  justify-content: space-between;
}

.testimonials__slide {
  position: relative;
  padding-top: 4.5rem;
  padding-left: 12rem;
  padding-right: 3rem;
  text-align: left;
}
.testimonials__slide::before {
  content: "";
  display: block;
  width: 1px;
  height: 3.9rem;
  position: absolute;
  left: calc(7.8rem / 2);
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.testimonials__avatar {
  width: 7.8rem;
  height: 7.8rem;
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 4.8rem;
  outline: none;
}

.testimonials__author {
  margin-top: 0rem;
  font-family: "metropolis-bold", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #000000;
}
.testimonials__author span {
  display: block;
  font-family: "metropolis-regular", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(85, 85, 85, 0.7);
  text-transform: none;
  letter-spacing: 0;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * testimonials
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1100px) {
  .testimonials {
    font-size: 1.4rem;
  }

  .testimonials__slide {
    padding-left: 9.5rem;
  }
  .testimonials__slide::before {
    left: calc(6.6rem / 2);
  }

  .testimonials__avatar {
    width: 6.6rem;
    height: 6.6rem;
  }
}
@media only screen and (max-width: 600px) {
  .testimonials-header h1 {
    font-size: 2.7rem;
  }

  .testimonials {
    margin-top: 3rem;
  }

  .testimonials__slide {
    padding: 13.2rem 0 0;
  }
  .testimonials__slide::before {
    left: 50%;
  }

  .testimonials__avatar {
    left: 50%;
    margin-left: -3.3rem;
  }
}

/* ===================================================================
 * # contact 
 *
 * ------------------------------------------------------------------- */
.s-contact {
  padding: 7%;
  padding-bottom: 4rem;
  background-color: #111111;
  color: rgba(255, 255, 255, 0.3);
  position: relative;
}
.s-contact a {
  color: #ffffff;
  border-bottom: 1px solid transparent;
  display: inline-block;
}
.s-contact a:hover,
.s-contact a:focus {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-main {
  margin-top: 4rem;
  margin-bottom: 4.8rem;
}

.contact-email {
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.222;
  color: #ffffff;
  padding-top: 3.6rem;
  position: relative;
}
.contact-email::before {
  content: "";
  display: block;
  height: 1px;
  width: 60px;
  background-color: #cc147f;
  position: absolute;
  top: 0;
  left: 0;
}

.contact-number {
  font-size: 1.5rem;
  line-height: 1.7;
  display: block;
}

.contact-address {
  font-size: 1.5rem;
  line-height: 1.607;
  margin-top: 2.4rem;
}

/* ------------------------------------------------------------------- 
 * ## contact social
 * ------------------------------------------------------------------- */
.contact-social {
  list-style: none;
  display: inline-block;
  margin: 0 0 0 0.3rem;
  font-size: 3rem;
}
.contact-social li {
  margin-right: 15px;
  padding-left: 0;
  display: inline-block;
}
.contact-social li a {
  color: rgba(255, 255, 255, 0.3);
  border: none !important;
}
.contact-social li a:hover,
.contact-social li a:focus {
  color: #ffffff;
}
.contact-social li:last-child {
  margin: 0;
}

/* ------------------------------------------------------------------- 
 * ## subscribe
 * ------------------------------------------------------------------- */
.contact-subscribe {
  margin: 0;
  padding: 0;
  position: relative;
}

.mc-form {
  margin-top: 2.1rem;
  width: 100%;
}
.mc-form input[type="email"] {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 4rem;
  padding: 1.2rem 150px 1.2rem 20px;
  margin-bottom: 1.8rem;
  border: none;
}
.mc-form input[type="email"]:focus {
  color: #ffffff;
}
.mc-form input[type="email"]::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.2);
}
.mc-form input[type="email"]:-moz-placeholder {
  color: rgba(255, 255, 255, 0.2);
  /* Firefox 18- */
}
.mc-form input[type="email"]::-moz-placeholder {
  color: rgba(255, 255, 255, 0.2);
  /* Firefox 19+ */
}
.mc-form input[type="email"]:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.2);
}
.mc-form input[type="email"].placeholder {
  color: rgba(255, 255, 255, 0.2) !important;
}
.mc-form input[type="submit"] {
  color: #ffffff;
  background: #cc147f;
  border-color: #cc147f;
  padding: 0 15px;
  position: absolute;
  top: 0;
  right: 0;
}
.mc-form label {
  color: #ffffff;
  font-family: "metropolis-semibold", sans-serif;
  font-size: 1.3rem;
  padding: 0 2rem;
}
.mc-form label i {
  padding-right: 6px;
}

/* ------------------------------------------------------------------- 
 * ## copyright
 * ------------------------------------------------------------------- */
.cl-copyright {
  margin-top: 2.1rem;
}

.cl-copyright span {
  font-size: 15px;
  display: inline-block;
}
.cl-copyright span::after {
  content: "|";
  display: inline-block;
  padding: 0 1rem 0 1.2rem;
  color: rgba(255, 255, 255, 0.1);
}
.cl-copyright span:last-child::after {
  display: none;
}

/* ------------------------------------------------------------------- 
 * ## go to top
 * ------------------------------------------------------------------- */
.cl-go-top {
  z-index: 600;
  position: absolute;
  bottom: 10.8rem;
  right: 105px;
}
.cl-go-top a {
  text-decoration: none;
  border: 0 none;
  display: block;
  height: 60px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  background: black;
  color: white;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.cl-go-top a i {
  font-size: 21px;
  line-height: inherit;
}
.cl-go-top a:hover,
.cl-go-top a:focus {
  background-color: #ffffff;
  color: #000000;
}
.cl-go-top::before {
  content: "";
  display: block;
  width: 1px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: -115px;
  left: 50%;
}
.cl-go-top::after {
  content: "Subir";
  display: inline-block;
  width: 120px;
  font-size: 1.2rem;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: rgba(255, 255, 255, 0.15);
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: left bottom;
  -ms-transform-origin: left bottom;
  transform-origin: left bottom;
  position: absolute;
  left: calc(30px + 15px);
  top: -165px;
}

.menu-is-open .cl-go-top {
  display: none;
}

/* ------------------------------------------------------------------- 
 * responsive:
 * contact
 * ------------------------------------------------------------------- */
@media only screen and (max-width: 1600px) {
  .cl-go-top {
    right: 55px;
  }
}
@media only screen and (max-width: 1200px) {
  .contact-email {
    font-size: 1.6rem;
  }

  .contact-number {
    font-size: 1.5rem;
  }

  .contact-address {
    font-size: 1.5rem;
  }

  .contact-social {
    font-size: 2.8rem;
  }

  .cl-copyright {
    margin-top: 3rem;
  }
}
@media only screen and (max-width: 1000px) {
  .contact-email {
    font-size: 1.5rem;
  }

  .contact-number {
    font-size: 1.4rem;
  }

  .contact-address {
    font-size: 1.4rem;
  }

  .contact-social {
    font-size: 2.4rem;
  }
}
@media only screen and (max-width: 800px) {
  .contact-secondary,
  .cl-copyright {
    padding-right: 7.8rem;
  }

  .contact-secondary {
    margin-bottom: 1.5rem;
  }

  .contact-email {
    font-size: 1.4rem;
  }

  .contact-number {
    font-size: 1.3rem;
  }

  .contact-address {
    font-size: 1.3rem;
  }

  .cl-go-top {
    right: 35px;
    bottom: 9rem;
  }
  .cl-go-top a {
    height: 48px;
    width: 48px;
    line-height: 48px;
  }
  .cl-go-top a i {
    font-size: 18px;
  }
  .cl-go-top::after {
    font-size: 1.1rem;
    left: calc(24px + 15px);
  }
}
@media only screen and (max-width: 600px) {
  .contact-email {
    font-size: 1.3rem;
  }

  .contact-number {
    font-size: 1.2rem;
  }

  .contact-address {
    font-size: 1.2rem;
  }

  .contact-social {
    font-size: 2rem;
  }

  .cl-go-top {
    right: 25px;
    bottom: 7.2rem;
  }
}
@media only screen and (max-width: 480px) {
  .contact-subscribe {
    margin-top: 3rem;
  }

  .mc-form input[type="email"],
  .mc-form label {
    text-align: center;
  }
  .mc-form input[type="email"] {
    padding: 1.2rem 20px 1.2rem;
  }
  .mc-form input[type="submit"] {
    position: static;
    width: 100%;
    margin-bottom: 1.8rem;
  }

  .cl-copyright {
    margin-top: 0;
  }
}
@media only screen and (max-width: 400px) {
  .contact-secondary {
    padding: 0;
  }

  .contact-email {
    font-size: 1.3rem;
  }

  .contact-number {
    font-size: 1.2rem;
  }

  .cl-copyright {
    margin-top: 9rem;
    padding: 0;
    text-align: center;
  }

  .cl-copyright span {
    font-size: 14px;
  }
  .cl-copyright span::after {
    display: none;
  }

  .cl-go-top {
    bottom: 12rem;
    right: 50%;
    margin-right: -24px;
  }
  .cl-go-top::before,
  .cl-go-top::after {
    display: none;
  }
}

/*# sourceMappingURL=main.css.map */

</style>

