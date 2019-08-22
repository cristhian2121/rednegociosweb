<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async mounted() {
    this.usuario = sessionStorage.getItem("user");
    if (this.usuario) {
      await this.traer_empresas();
    }
  },
  data() {
    return {
      usuario: null,
      empresas: [],
      loader: true
    };
  },
  methods: {
    traer_empresas: async function() {
      // axios
      //   .get(
      //     `http://localhost:8000/api/detalle/?email_user=${this.usuario}`
      //   )
      //   .then(respuesta => {
      //     this.empresas = respuesta.data[0];
      //     if(this.empresas.length > 0) this.$router.push({ path: `/empresa/${this.empresas.nombre}` });
      //     this.loader = false;
      //   });
    }
  }
};
</script>
<!--jghghj-->



<style>
div#footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 10px;
    background: rgba(0, 0, 0, 0.23137254901960785);
    color: white;
    padding: 3px;
}
.home, #CMXD-login, #search {
    padding-bottom: 30px;
}
div#footer a{
    color: #000000;
    text-decoration: none;
    font-weight: 600;
}
.agile__list {
    margin-bottom: -5px;
}
.agile.agile--fade button {
    background: #00000061;
    width: 15px;
    height: 15px;
    margin: 0 5px;
    border: none;
    border-radius: 50px;
}
ul.agile__dots {
    position: absolute;
    bottom: 20px;
    left: 10px;
    align-items: center;
}
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

.service-item {
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
.table-responsive table {
  width: 100%;
}
th.actions {
  width: 70px;
  text-align: center;
}
.table-responsive table thead tr th {
  background: #333333;
  color: white;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 300;
}
.table-responsive table tbody tr td {
  padding: 6px 15px;
}
.el-radio__inner::after {
  width: 0px !important;
  height: 0px !important;
}
.el-radio__input .el-radio__inner {
  width: 20px;
  height: 20px;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #ff4700 !important;
  background: #ff4700 !important;
  width: 20px;
  height: 20px;
}
.btn-form-end {
  margin-top: 30px;
  text-align: center;
}
.btn-form-end a,
.btn-form-end button {
  width: 120px;
}
.btn-form-end a {
  margin-right: 10px;
}
.textarea-animation .CMXD-material-input ~ .focus-border {
  bottom: 7px;
}
.el-upload.el-upload--text {
  padding: 0 20px;
  width: 100%;
}
textarea.CMXD-material-input {
  width: 100%;
  resize: none;
}
.btn-service-image {
  width: 100%;
}
.CMXD-btn-grey {
  background: #333333 !important;
  color: white !important;
  width: 100%;
  font-size: 12px;
  padding: 2px;
  width: 100%;
  margin-top: 10px;
}
.CMXD-btn-grey:hover,
.CMXD-btn-grey:focus,
.CMXD-btn-grey:active {
  background: #5a5a5a !important;
  color: white !important;
  border: none !important;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.4) !important;
  transition: 0.2s;
  outline: none;
  text-decoration: none;
  color: white;
}
button.el-button.btn.CMXD-btn-business.el-button--default.el-button--small.is-plain,
button.el-button.CMXD-btn-ok.el-button--default.el-button--small {
  width: 100%;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #dc3545 !important;
}
.input-effect {
  margin-left: 5px;
  width: 95%;
}
.input-effect label,
.radio-container {
  position: absolute;
  margin-top: -10px;
  font-size: 12px !important;
}
.business-info label.title {
  padding: 3px 10px;
}
.text-center {
  text-align: center;
}
select.CMXD-material-input {
  width: 100%;
  height: 35px;
}
.form-CMXD.col-md-6 {
  -ms-flex: 0 0 50%;
  -webkit-box-flex: 0;
  flex: 0 0 50%;
  min-width: 53% !important;
}
.text-danger {
  color: #dc3545 !important;
  font-size: 12px;
  position: relative;
  top: -3px;
}
@media (max-width: 675px) {
  .input-effect {
    margin-left: 5px;
    width: 89%;
  }
  .container-general {
    margin: 70px auto 20px !important;
  }
  .form-CMXD.col-md-6 {
    -ms-flex: 0 0 50%;
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    min-width: 100% !important;
  }
  button.el-button.CMXD-btn-ok.btn-small.btn-edit {
    width: 89% !important;
    margin-left: 12px !important;
    margin-top: 10px !important;
  }
  .form-CMXD.row.col-md-6 .input-effect {
    width: 89% !important;
  }
  .CMXD-container-left .input-effect {
    width: 90% !important;
  }
}
.close-modal {
  width: 100%;
  text-align: right;
  z-index: 100;
}
.close-modal button,
.close-modal a {
  position: absolute;
  margin-left: -15px;
  margin-top: -5px;
  background: none;
  border: none;
  height: 30px;
  width: 30px;
  padding: 5px;
  color: #9e9e9e !important;
}
.close-modal button:hover,
.close-modal button:focus,
.close-modal button:active,
.close-modal a:hover,
.close-modal a:focus,
.close-modal a:active {
  outline: none;
  box-shadow: 0 0 0;
  color: #000000 !important;
  cursor: pointer;
}
.close-modal i.material-icons {
  font-size: 20px;
}
.el-notification.right {
  z-index: 10000 !important;
}
.title {
  border-left: 4px solid #ff5800;
  padding: 10px;
  position: relative;
  left: -13px;
  margin-top: -10px;
  font-size: 16px;
  font-weight: 300;
  color: grey;
}
.title-business {
  border-left: 4px solid #333333;
  padding: 10px;
  position: relative;
  left: -13px;
  margin-top: -10px;
  font-size: 16px;
  font-weight: 300;
  color: grey;
  font-size: 14px;
}
.form-CMXD {
  margin-bottom: 20px;
}
.CMXD-container-left .input-effect {
  width: 91%;
}
input,
select {
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}
.input-effect {
  position: relative;
  left: 10px;
}
.CMXD-icon-form {
  position: relative;
  left: 10px;
  top: 5px;
  color: #ff9342;
}

.form-CMXD.row.col-md-6 .input-effect {
  width: 88%;
}
.CMXD-material-input {
  border: 0;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  letter-spacing: 0px;
}
.CMXD-material-input:focus {
  border: 0;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  box-shadow: 0 0 0;
  outline: none;
}
.CMXD-material-input ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #333333;
  transition: 0.4s;
}
.CMXD-material-input:focus ~ .focus-border,
.has-content.CMXD-material-input ~ .focus-border {
  width: 100%;
  transition: 0.4s;
}
a.freepick.inside {
  z-index: 10;
  top: 96px;
  color: white;
}
a.freepick.inside-back {
  top: 96px;
}
.container-general {
  background: rgba(255, 255, 255, 0.8);
  width: 95%;
  margin: 100px auto 20px;
  padding: 30px 40px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.container-general-2 {
  background: rgba(255, 255, 255, 0.8);
  width: 95%;
  margin: 20px auto;
  padding: 30px 40px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.CMXD-material-input ~ label {
  position: absolute;
  left: 15px;
  width: 100%;
  top: 9px;
  color: #aaa;
  transition: 0.3s;
  z-index: 0;
}
.table-responsive.business button.el-button,
.table-responsive.business a .btn {
  font-size: 12px !important;
  padding: 6px !important;
  width: 30px !important;
  height: 30px !important;
}
.CMXD-material-input:focus ~ label,
.has-content.CMXD-material-input ~ label {
  top: -16px;
  font-size: 12px;
  color: #333333;
  transition: 0.3s;
}
/* Buttons CMXD*/
.CMXD-btn-ok {
  background: #ff5800 !important;
  color: white !important;
  border: none !important;
  transition: 0.2s;
}
.CMXD-btn-ok:hover,
.CMXD-btn-ok:focus,
.CMXD-btn-ok:active {
  background: #ff762d !important;
  color: white !important;
  border: none !important;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.4) !important;
  transition: 0.2s;
  outline: none;
}
/* End Buttons CMXD*/

.cont-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-left {
  background-image: url("./assets/le.png");
  background-position: center center;
  /*background-repeat: no-repeat;*/
  align-content: center;
}
.img-rigth {
  background-image: url("./assets/ri.png");
  background-position: center center;
  align-content: center;
  /*background-position: center center;
  background-repeat: no-repeat;
  align-content: center;*/
}
/*@import url("//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css");*/

/* Estilos para la nav-menu   */
.espacio-hijos {
  padding-top: 90px;
}

.txt-cen {
  text-align: center;
}

#logo {
  color: white;
}
.glyphicon-qrcode {
  font-size: 50px;
}

.overla {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.margen {
  margin-top: 10%;
  /*padding-right: 0;
  padding-left: 0;
   margin-right: auto; */
  /* margin-left: auto; */
}

.post {
  padding-left: 20px;
  padding-right: 20px;
}

.buscarser {
  background-position: center center;
  background-repeat: no-repeat;
}
/* =================================== */
/*  Basic Style 
/* =================================== */
::-moz-selection {
  /* Code for Firefox */
  background-color: #49e4fa;
  color: #fff;
}
::selection {
  background-color: #49e4fa;
  color: #fff;
}
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #777777;
  font-weight: 300;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #777777;
  font-weight: 300;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #777777;
  font-weight: 300;
}

body {
  /*color: #777777;
  font-family: "", sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.625em;
  position: relative;*/
  font-size: 1.7rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.765;
  color: #555555;
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-animation-name: fade-body;
  -webkit-animation-duration: 0.5s;
  animation-name: fade-body;
  animation-duration: 1s;
}
@-webkit-keyframes fade-body {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-body {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
select {
  display: block;
}
figure {
  margin: 0;
}
a {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

iframe {
  border: 0;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn.focus:active,
.btn:active:focus,
.btn:focus {
  text-decoration: none;
  outline: 0;
}

.card-panel {
  margin: 0;
  padding: 60px;
}

/**
 *  Typography
 *
 **/
.btn i,
.btn-large i,
.btn-floating i,
.btn-large i,
.btn-flat i {
  font-size: 1em;
  line-height: inherit;
}

.gray-bg {
  background: #f9f9ff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
  color: #222222;
  line-height: 1.2em !important;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: normal;
  text-rendering: optimizeLegibility;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0;
  margin-top: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #222222;
}

h1,
.h1 {
  font-size: 36px;
}

h2,
.h2 {
  font-size: 30px;
}

h3,
.h3 {
  font-size: 24px;
}

h4,
.h4 {
  font-size: 18px;
}

h5,
.h5 {
  font-size: 16px;
}

h6,
.h6 {
  font-size: 14px;
  color: #222222;
}

td,
th {
  border-radius: 0px;
}

/**
 * For modern browsers
 * 1. The space content is one way to avoid an Opera bug when the
 *    contenteditable attribute is included anywhere else in the document.
 *    Otherwise it causes space to appear at the top and bottom of elements
 *    that are clearfixed.
 * 2. The use of `table` rather than `block` is only necessary if using
 *    `:before` to contain the top-margins of child elements.
 */
.clear::before,
.clear::after {
  content: " ";
  display: table;
}

.clear::after {
  clear: both;
}

.fz-11 {
  font-size: 11px;
}

.fz-12 {
  font-size: 12px;
}

.fz-13 {
  font-size: 13px;
}

.fz-14 {
  font-size: 14px;
}

.fz-15 {
  font-size: 15px;
}

.fz-16 {
  font-size: 16px;
}

.fz-18 {
  font-size: 18px;
}

.fz-30 {
  font-size: 30px;
}

.fz-48 {
  font-size: 48px !important;
}

.fw100 {
  font-weight: 100;
}

.fw300 {
  font-weight: 300;
}

.fw400 {
  font-weight: 400 !important;
}

.fw500 {
  font-weight: 500;
}

.f700 {
  font-weight: 700;
}

.fsi {
  font-style: italic;
}

.mt-10 {
  margin-top: 10px;
}

.mt-15 {
  margin-top: 15px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-25 {
  margin-top: 25px;
}

.mt-30 {
  margin-top: 30px;
}

.mt-35 {
  margin-top: 35px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-60 {
  margin-top: 60px;
}

.mt-70 {
  margin-top: 70px;
}

.mt-80 {
  margin-top: 80px;
}

.mt-100 {
  margin-top: 100px;
}

.mt-120 {
  margin-top: 120px;
}

.mt-150 {
  margin-top: 150px;
}

.ml-0 {
  margin-left: 0 !important;
}

.ml-5 {
  margin-left: 5px !important;
}

.ml-10 {
  margin-left: 10px;
}

.ml-15 {
  margin-left: 15px;
}

.ml-20 {
  margin-left: 20px;
}

.ml-30 {
  margin-left: 30px;
}

.ml-50 {
  margin-left: 50px;
}

.mr-0 {
  margin-right: 0 !important;
}

.mr-5 {
  margin-right: 5px !important;
}

.mr-15 {
  margin-right: 15px;
}

.mr-10 {
  margin-right: 10px;
}

.mr-20 {
  margin-right: 20px;
}

.mr-30 {
  margin-right: 30px;
}

.mr-50 {
  margin-right: 50px;
}

.mb-0 {
  margin-bottom: 0px;
}

.mb-0-i {
  margin-bottom: 0px !important;
}

.mb-5 {
  margin-bottom: 5px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-15 {
  margin-bottom: 15px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-25 {
  margin-bottom: 25px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-60 {
  margin-bottom: 60px;
}

.mb-70 {
  margin-bottom: 70px;
}

.mb-80 {
  margin-bottom: 80px;
}

.mb-90 {
  margin-bottom: 90px;
}

.mb-100 {
  margin-bottom: 100px;
}

.pt-0 {
  padding-top: 0px;
}

.pt-10 {
  padding-top: 10px;
}

.pt-15 {
  padding-top: 15px;
}

.pt-20 {
  padding-top: 20px;
}

.pt-25 {
  padding-top: 25px;
}

.pt-30 {
  padding-top: 30px;
}

.pt-40 {
  padding-top: 40px;
}

.pt-50 {
  padding-top: 50px;
}

.pt-60 {
  padding-top: 60px;
}

.pt-70 {
  padding-top: 70px;
}

.pt-80 {
  padding-top: 80px;
}

.pt-90 {
  padding-top: 90px;
}

.pt-100 {
  padding-top: 100px;
}

.pt-120 {
  padding-top: 120px;
}

.pt-150 {
  padding-top: 150px;
}

.pt-170 {
  padding-top: 170px;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-15 {
  padding-bottom: 15px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-25 {
  padding-bottom: 25px;
}

.pb-30 {
  padding-bottom: 30px;
}

.pb-40 {
  padding-bottom: 40px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pb-60 {
  padding-bottom: 60px;
}

.pb-70 {
  padding-bottom: 70px;
}

.pb-80 {
  padding-bottom: 80px;
}

.pb-90 {
  padding-bottom: 90px;
}

.pb-100 {
  padding-bottom: 100px;
}

.pb-120 {
  padding-bottom: 120px;
}

.pb-150 {
  padding-bottom: 150px;
}

.pr-30 {
  padding-right: 30px;
}

.pl-30 {
  padding-left: 30px;
}

.pl-90 {
  padding-left: 90px;
}

.p-40 {
  padding: 40px;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

.text-italic {
  font-style: italic;
}

.text-white {
  color: #fff;
}

.text-black {
  color: #000;
}

.transition {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.section-full {
  padding: 100px 0;
}

.section-half {
  padding: 75px 0;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-rigth {
  text-align: right;
}

.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
}

.inline-flex {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.flex-grow {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.flex-wrap {
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.flex-left {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  -moz-justify-content: flex-start;
  justify-content: flex-start;
}

.flex-middle {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
}

.flex-right {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  -moz-justify-content: flex-end;
  justify-content: flex-end;
}

.flex-top {
  -webkit-align-self: flex-start;
  -moz-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.flex-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
}

.flex-bottom {
  -webkit-align-self: flex-end;
  -moz-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.space-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  justify-content: space-between;
}

.space-around {
  -ms-flex-pack: distribute;
  -webkit-justify-content: space-around;
  -moz-justify-content: space-around;
  justify-content: space-around;
}

.flex-column {
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flex-cell {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.display-table {
  display: table;
}

.light {
  color: #fff;
}

.dark {
  color: #222;
}

.relative {
  position: relative;
}

.overflow-hidden {
  overflow: hidden;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.container.fullwidth {
  width: 100%;
}

.container.no-padding {
  padding-left: 0;
  padding-right: 0;
}

.no-padding {
  padding: 0;
}

.section-bg {
  background: #f9fafc;
}

@media (max-width: 767px) {
  .no-flex-xs {
    display: block !important;
  }
}

.row.no-margin {
  margin-left: 0px;
  margin-right: 0;
}

.sample-text-area {
  background: #fff;
  padding: 100px 0 70px 0;
}

.text-heading {
  margin-bottom: 30px;
  font-size: 24px;
}

b,
sup,
sub,
u,
del {
  color: #49e4fa;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 16px;
}

h6 {
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.5em;
}

.typography h1,
.typography h2,
.typography h3,
.typography h4,
.typography h5,
.typography h6 {
  color: #777777;
}

.button-area {
  background: #fff;
}

.button-area .border-top-generic {
  padding: 70px 15px;
  border-top: 1px dotted #eee;
}

.button-group-area .genric-btn {
  margin-right: 10px;
  margin-top: 10px;
}

.button-group-area .genric-btn:last-child {
  margin-right: 0;
}

.genric-btn {
  display: inline-block;
  outline: none;
  line-height: 40px;
  padding: 0 30px;
  font-size: 0.8em;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.genric-btn:focus {
  outline: none;
}

.genric-btn.e-large {
  padding: 0 40px;
  line-height: 50px;
}

.genric-btn.large {
  line-height: 45px;
}

.genric-btn.medium {
  line-height: 30px;
}

.genric-btn.small {
  line-height: 25px;
}

.genric-btn.radius {
  border-radius: 3px;
}

.genric-btn.circle {
  border-radius: 20px;
}

.genric-btn.arrow {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.genric-btn.arrow span {
  margin-left: 10px;
}

.genric-btn.default {
  color: #222222;
  background: #f9f9ff;
  border: 1px solid transparent;
}

.genric-btn.default:hover {
  border: 1px solid #f9f9ff;
  background: #fff;
}

.genric-btn.default-border {
  border: 1px solid #f9f9ff;
  background: #fff;
}

.genric-btn.default-border:hover {
  color: #222222;
  background: #f9f9ff;
  border: 1px solid transparent;
}

.genric-btn.primary {
  color: #fff;
  background: #49e4fa;
  border: 1px solid transparent;
}

.genric-btn.primary:hover {
  color: #49e4fa;
  border: 1px solid #49e4fa;
  background: #fff;
}

.genric-btn.primary-border {
  color: #49e4fa;
  border: 1px solid #49e4fa;
  background: #fff;
}

.genric-btn.primary-border:hover {
  color: #fff;
  background: #49e4fa;
  border: 1px solid transparent;
}

.genric-btn.success {
  color: #fff;
  background: #4cd3e3;
  border: 1px solid transparent;
}

.genric-btn.success:hover {
  color: #4cd3e3;
  border: 1px solid #4cd3e3;
  background: #fff;
}

.genric-btn.success-border {
  color: #4cd3e3;
  border: 1px solid #4cd3e3;
  background: #fff;
}

.genric-btn.success-border:hover {
  color: #fff;
  background: #4cd3e3;
  border: 1px solid transparent;
}

.genric-btn.info {
  color: #fff;
  background: #38a4ff;
  border: 1px solid transparent;
}

.genric-btn.info:hover {
  color: #38a4ff;
  border: 1px solid #38a4ff;
  background: #fff;
}

.genric-btn.info-border {
  color: #38a4ff;
  border: 1px solid #38a4ff;
  background: #fff;
}

.genric-btn.info-border:hover {
  color: #fff;
  background: #38a4ff;
  border: 1px solid transparent;
}

.genric-btn.warning {
  color: #fff;
  background: #f4e700;
  border: 1px solid transparent;
}

.genric-btn.warning:hover {
  color: #f4e700;
  border: 1px solid #f4e700;
  background: #fff;
}

.genric-btn.warning-border {
  color: #f4e700;
  border: 1px solid #f4e700;
  background: #fff;
}

.genric-btn.warning-border:hover {
  color: #fff;
  background: #f4e700;
  border: 1px solid transparent;
}

.genric-btn.danger {
  color: #fff;
  background: #f44a40;
  border: 1px solid transparent;
}

.genric-btn.danger:hover {
  color: #f44a40;
  border: 1px solid #f44a40;
  background: #fff;
}

.genric-btn.danger-border {
  color: #f44a40;
  border: 1px solid #f44a40;
  background: #fff;
}

.genric-btn.danger-border:hover {
  color: #fff;
  background: #f44a40;
  border: 1px solid transparent;
}

.genric-btn.link {
  color: #222222;
  background: #f9f9ff;
  text-decoration: underline;
  border: 1px solid transparent;
}

.genric-btn.link:hover {
  color: #222222;
  border: 1px solid #f9f9ff;
  background: #fff;
}

.genric-btn.link-border {
  color: #222222;
  border: 1px solid #f9f9ff;
  background: #fff;
  text-decoration: underline;
}

.genric-btn.link-border:hover {
  color: #222222;
  background: #f9f9ff;
  border: 1px solid transparent;
}

.genric-btn.disable {
  color: #222222, 0.3;
  background: #f9f9ff;
  border: 1px solid transparent;
  cursor: not-allowed;
}

.generic-blockquote {
  padding: 30px 50px 30px 30px;
  background: #f9f9ff;
  border-left: 2px solid #49e4fa;
}

.progress-table-wrap {
  overflow-x: scroll;
}

.progress-table {
  background: #f9f9ff;
  padding: 15px 0px 30px 0px;
  min-width: 800px;
}

.progress-table .serial {
  width: 11.83%;
  padding-left: 30px;
}

.progress-table .country {
  width: 28.07%;
}

.progress-table .visit {
  width: 19.74%;
}

.progress-table .percentage {
  width: 40.36%;
  padding-right: 50px;
}

.progress-table .table-head {
  display: flex;
}

.progress-table .table-head .serial,
.progress-table .table-head .country,
.progress-table .table-head .visit,
.progress-table .table-head .percentage {
  color: #222222;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: 500;
}

.progress-table .table-row {
  padding: 15px 0;
  border-top: 1px solid #edf3fd;
  display: flex;
}

.progress-table .table-row .serial,
.progress-table .table-row .country,
.progress-table .table-row .visit,
.progress-table .table-row .percentage {
  display: flex;
  align-items: center;
}

.progress-table .table-row .country img {
  margin-right: 15px;
}

.progress-table .table-row .percentage .progress {
  width: 80%;
  border-radius: 0px;
  background: transparent;
}

.progress-table .table-row .percentage .progress .progress-bar {
  height: 5px;
  line-height: 5px;
}

.progress-table .table-row .percentage .progress .progress-bar.color-1 {
  background-color: #6382e6;
}

.progress-table .table-row .percentage .progress .progress-bar.color-2 {
  background-color: #e66686;
}

.progress-table .table-row .percentage .progress .progress-bar.color-3 {
  background-color: #f09359;
}

.progress-table .table-row .percentage .progress .progress-bar.color-4 {
  background-color: #73fbaf;
}

.progress-table .table-row .percentage .progress .progress-bar.color-5 {
  background-color: #73fbaf;
}

.progress-table .table-row .percentage .progress .progress-bar.color-6 {
  background-color: #6382e6;
}

.progress-table .table-row .percentage .progress .progress-bar.color-7 {
  background-color: #a367e7;
}

.progress-table .table-row .percentage .progress .progress-bar.color-8 {
  background-color: #e66686;
}

.single-gallery-image {
  margin-top: 30px;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  height: 200px;
}

.list-style {
  width: 14px;
  height: 14px;
}

.unordered-list li {
  position: relative;
  padding-left: 30px;
  line-height: 1.82em !important;
}

.unordered-list li:before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border: 3px solid #49e4fa;
  background: #fff;
  top: 4px;
  left: 0;
  border-radius: 50%;
}

.CMXD-icon-form img {
  float: left;
  width: 20px;
  position: relative;
  top: -3px;
  margin-right: 5px;
}

.ordered-list {
  margin-left: 30px;
}

.ordered-list li {
  list-style-type: decimal-leading-zero;
  color: #49e4fa;
  font-weight: 500;
  line-height: 1.82em !important;
}

.ordered-list li span {
  font-weight: 300;
  color: #777777;
}

.ordered-list-alpha li {
  margin-left: 30px;
  list-style-type: lower-alpha;
  color: #49e4fa;
  font-weight: 500;
  line-height: 1.82em !important;
}

.ordered-list-alpha li span {
  font-weight: 300;
  color: #777777;
}

.ordered-list-roman li {
  margin-left: 30px;
  list-style-type: lower-roman;
  color: #49e4fa;
  font-weight: 500;
  line-height: 1.82em !important;
}

.ordered-list-roman li span {
  font-weight: 300;
  color: #777777;
}

.single-input {
  display: block;
  width: 100%;
  line-height: 40px;
  border: none;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input:focus {
  outline: none;
}

.input-group-icon {
  position: relative;
}

.input-group-icon .icon {
  position: absolute;
  left: 20px;
  top: 0;
  line-height: 40px;
  z-index: 3;
}

.input-group-icon .icon i {
  color: #797979;
}

.input-group-icon .single-input {
  padding-left: 45px;
}

.single-textarea {
  display: block;
  width: 100%;
  line-height: 40px;
  border: none;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
  height: 100px;
  resize: none;
}

.single-textarea:focus {
  outline: none;
}

.single-input-primary {
  display: block;
  width: 100%;
  line-height: 40px;
  border: 1px solid transparent;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input-primary:focus {
  outline: none;
  border: 1px solid #49e4fa;
}

.single-input-accent {
  display: block;
  width: 100%;
  line-height: 40px;
  border: 1px solid transparent;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input-accent:focus {
  outline: none;
  border: 1px solid #eb6b55;
}

.single-input-secondary {
  display: block;
  width: 100%;
  line-height: 40px;
  border: 1px solid transparent;
  outline: none;
  background: #f9f9ff;
  padding: 0 20px;
}

.single-input-secondary:focus {
  outline: none;
  border: 1px solid #f09359;
}

.default-switch {
  width: 35px;
  height: 17px;
  border-radius: 8.5px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.default-switch input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.default-switch input + label {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #49e4fa;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.default-switch input:checked + label {
  left: 19px;
}

.primary-switch {
  width: 35px;
  height: 17px;
  border-radius: 8.5px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.primary-switch input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.primary-switch input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.primary-switch input + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 8.5px;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}

.primary-switch input + label:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.primary-switch input:checked + label:after {
  left: 19px;
}

.primary-switch input:checked + label:before {
  background: #49e4fa;
}

.confirm-switch {
  width: 35px;
  height: 17px;
  border-radius: 8.5px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.confirm-switch input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.confirm-switch input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.confirm-switch input + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 8.5px;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
}

.confirm-switch input + label:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.confirm-switch input:checked + label:after {
  left: 19px;
}

.confirm-switch input:checked + label:before {
  background: #4cd3e3;
}

.primary-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.primary-checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.primary-checkbox input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.confirm-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.confirm-checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.confirm-checkbox input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.disabled-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.disabled-checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.disabled-checkbox input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.disabled-checkbox input:disabled {
  cursor: not-allowed;
  z-index: 3;
}

.primary-radio {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.primary-radio input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.primary-radio input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.confirm-radio {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.confirm-radio input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.confirm-radio input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.disabled-radio {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #f9f9ff;
  position: relative;
  cursor: pointer;
}

.disabled-radio input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.disabled-radio input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #f1f1f1;
}

.disabled-radio input:disabled {
  cursor: not-allowed;
  z-index: 3;
}

.default-select {
  height: 40px;
}

.default-select .nice-select {
  border: none;
  border-radius: 0px;
  height: 40px;
  background: #f9f9ff;
  padding-left: 20px;
  padding-right: 40px;
}

.default-select .nice-select .list {
  margin-top: 0;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  width: 100%;
  padding: 10px 0 10px 0px;
}

.default-select .nice-select .list .option {
  font-weight: 300;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  line-height: 28px;
  min-height: 28px;
  font-size: 12px;
  padding-left: 20px;
}

.default-select .nice-select .list .option.selected {
  color: #49e4fa;
  background: transparent;
}

.default-select .nice-select .list .option:hover {
  color: #49e4fa;
  background: transparent;
}

.default-select .current {
  margin-right: 50px;
  font-weight: 300;
}

.default-select .nice-select::after {
  right: 20px;
}

.form-select {
  height: 40px;
  width: 100%;
}

.form-select .nice-select {
  border: none;
  border-radius: 0px;
  height: 40px;
  background: #f9f9ff;
  padding-left: 45px;
  padding-right: 40px;
  width: 100%;
}

.form-select .nice-select .list {
  margin-top: 0;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  width: 100%;
  padding: 10px 0 10px 0px;
}

.form-select .nice-select .list .option {
  font-weight: 300;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  line-height: 28px;
  min-height: 28px;
  font-size: 12px;
  padding-left: 45px;
}

.form-select .nice-select .list .option.selected {
  color: #49e4fa;
  background: transparent;
}

.form-select .nice-select .list .option:hover {
  color: #49e4fa;
  background: transparent;
}

.form-select .current {
  margin-right: 50px;
  font-weight: 300;
}
span.el-checkbox__inner {
  top: -8px;
}
.form-select .nice-select::after {
  right: 20px;
}
a.freepick {
  position: fixed;
  right: -30px;
  transform: rotate(-90deg);
  top: 43px;
  color: black;
  opacity: 0.3;
  font-size: 10px;
}
span.text-danger {
  position: absolute;
  width: 100%;
  display: flex;
  top: 32px;
  font-size: 11px;
}
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  /*padding: 0.5% 0;*/
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: 997;
  background-color: #ff5800;
  box-shadow: 0 0 10px #000000a8;
}

#header.header-scrolled {
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.5s;
}

@media (max-width: 673px) {
  #logo {
    margin-left: 20px;
  }
}

#header #logo h1 {
  font-size: 34px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 3px;
}

#header #logo h1 a,
#header #logo h1 a:hover {
  color: #fff;
  padding-left: 10px;
  border-left: 4px solid #49e4fa;
}

#header #logo img {
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
  #header #logo h1 {
    font-size: 2px;
  }
  #header #logo img {
    max-height: 40px;
  }
}

.ticker-bt {
  /*background: #49e4fa;*/
  color: #fff;
  padding: 0px 0px !important;
  text-transform: uppercase;
}

.ticker-btn {
  /*background: #49e4fa;
  padding: 0px 0px !important;
  text-transform: uppercase;*/
  color: #fff;
  font-size: 19px;
}

.ticker-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #000;
}

.ticker-txt {
  /*background: #49e4fa;
  padding: 0px 0px !important;
  text-transform: uppercase;*/
  color: #fff;
  font-size: 15px;
}

.ticker-txt:hover {
  background: #f9f9ff4d;
  color: #000;
}

@media (max-width: 960px) {
  .ticker-btn {
    display: none !important;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Nav Menu Essentials */
.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu ul {
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  z-index: 99;
}

.nav-menu li {
  position: relative;
  white-space: nowrap;
}

.nav-menu > li {
  float: left;
}

.nav-menu li:hover > ul,
.nav-menu li.sfHover > ul {
  display: block;
}

.nav-menu ul ul {
  top: 0;
  left: 100%;
}

.nav-menu ul li {
  min-width: 180px;
  text-align: left;
}

.menu-has-children ul li a {
  padding: 4px 10px !important;
  text-transform: uppercase !important;
}

/* Nav Menu Arrows */
.sf-arrows .sf-with-ul {
  padding-right: 30px;
}

.sf-arrows .sf-with-ul:after {
  content: "\f107";
  position: absolute;
  right: 15px;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
}

.sf-arrows ul .sf-with-ul:after {
  content: "\f105";
}

/* Nav Meu Styling */
.nav-menu a {
  padding: 6px 10px;
  text-decoration: none;
  display: inline-block;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  font-size: 13px;
  /*text-transform: uppercase;*/
  outline: none;
}
.nav-menu span{
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}
.nav-menu span:hover, .nav-menu span:focus, .nav-menu span:active,
.nav-menu a:hover, .nav-menu a:focus, .nav-menu a:active{
  color: rgba(255, 255, 255);
  text-decoration: none;
  background: none;
}

.nav-menu > li {
  margin-left: 10px;
}

.nav-menu ul {
  margin: 14px 0 0 0;
  padding: 10px;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  background: #fff;
}

.nav-menu ul li {
  transition: 0.3s;
}

.nav-menu ul li a {
  padding: 10px;
  color: #333;
  transition: 0.3s;
  display: block;
  font-size: 12px;
  text-transform: none;
}

.nav-menu ul li:hover > a {
  color: #49e4fa;
}

.nav-menu ul ul {
  margin: 0;
}

/* Mobile Nav Toggle */
#mobile-nav-toggle {
  position: fixed;
  right: 15px;
  z-index: 999;
  top: 16px;
  border: 0;
  background: none;
  font-size: 24px;
  display: none;
  transition: all 0.4s;
  outline: none;
  cursor: pointer;
}

#mobile-nav-toggle i {
  color: #49e4fa;
  font-weight: 900;
}

@media (max-width: 960px) {
  #mobile-nav-toggle {
    display: inline;
  }
}

/* Mobile Nav Styling */
#mobile-nav {
  position: fixed;
  top: 0;
  padding-top: 18px;
  bottom: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.8);
  left: -260px;
  width: 260px;
  overflow-y: auto;
  transition: 0.4s;
}

#mobile-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

#mobile-nav ul li {
  position: relative;
}

#mobile-nav ul li a {
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  overflow: hidden;
  padding: 10px 22px 10px 15px;
  position: relative;
  text-decoration: none;
  width: 100%;
  display: block;
  outline: none;
  font-weight: 700;
}

#mobile-nav ul li a:hover {
  color: #fff;
}

#mobile-nav ul li li {
  padding-left: 30px;
}

#mobile-nav ul .menu-has-children i {
  position: absolute;
  right: 0;
  z-index: 99;
  padding: 15px;
  cursor: pointer;
  color: #fff;
}

#mobile-nav ul .menu-has-children i.fa-chevron-up {
  color: #49e4fa;
}

#mobile-nav ul .menu-has-children li a {
  text-transform: capitalize;
}

#mobile-nav ul .menu-item-active {
  color: #49e4fa;
}

#mobile-body-overly {
  width: 100%;
  height: 100%;
  z-index: 997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  display: none;
}

/* Mobile Nav body classes */
body.mobile-nav-active {
  overflow: hidden;
}

body.mobile-nav-active #mobile-nav {
  left: 0;
}

body.mobile-nav-active #mobile-nav-toggle {
  color: #fff;
}

.section-gap {
  padding: 120px 0;
}

.section-title {
  padding-bottom: 30px;
}

.section-title h2 {
  margin-bottom: 20px;
}

.section-title p {
  font-size: 16px;
  margin-bottom: 0;
}

@media (max-width: 991.98px) {
  .section-title p br {
    display: none;
  }
}

.p1-gradient-bg,
.banner-area .overlay-bg,
.sidebar .single-slidebar .cat-list li:hover,
.callto-action-area,
.single-price:hover .price-bottom,
.single-service:hover,
.submit-right,
.submit-left,
.contact-btns,
.form-area .primary-btn {
  background-image: -moz-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
  background-image: -webkit-linear-gradient(0deg, #ffc1077d 0%, #ffc107 100%);
  background-image: -ms-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
}

.p1-gradient-color,
.feat-txt h1 {
  background: -moz-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
  background: -webkit-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
  background: -ms-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
  -webkit-text-fill-color: transparent;
}

.primary-btn {
  background-color: #49e4fa;
  line-height: 42px;
  padding-left: 30px;
  padding-right: 60px;
  border-radius: 25px;
  border: none;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
}

.primary-btn:focus {
  outline: none;
}

.primary-btn span {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  right: 30px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.primary-btn:hover {
  color: #fff;
}

.primary-btn:hover span {
  color: #fff;
  right: 20px;
}

.primary-btn.white {
  border: 1px solid #fff;
  color: #fff;
}

.primary-btn.white span {
  color: #fff;
}

.primary-btn.white:hover {
  background: #fff;
  color: #49e4fa;
}

.primary-btn.white:hover span {
  color: #49e4fa;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.banner-area .overlay-bg {
  opacity: 0.95;
}

.banner-content {
  /*margin-top: 5%;*/
  text-align: center;
}

.banner-content h1 {
  font-size: 48px;
  font-weight: 300;
  line-height: 1em;
  margin-top: 20px;
}

.banner-content h1 span {
  color: #49e4fa;
}

@media (max-width: 991.98px) {
  .banner-content h1 {
    font-size: 36px;
  }
}

@media (max-width: 991.98px) {
  .banner-content h1 br {
    display: none;
  }
}

@media (max-width: 1199.98px) {
  .banner-content h1 {
    font-size: 45px;
  }
}

@media (max-width: 414px) {
  .banner-content h1 {
    font-size: 32px;
  }
}

.banner-content p span {
  color: #49e4fa;
}

@media (max-width: 1280px) {
  .banner-content br {
    display: none;
  }
}

.banner-content .form-wrap {
  background-image: url("./assets/bg-search.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*border: 1px solid #b8aaf3;*/
  align-content: center;
  padding: 7%; /*0;/*
  /*margin: 0px 0;*/
  box-shadow: 0 0 10px;
}

.banner-content .form-wrap .nice-select {
  width: 100%;
}

.banner-content .form-wrap .form-control {
  height: 40px;
  border-radius: 0;
  font-size: 14px;
}

.banner-content .form-wrap .btn-info {
  background-color: #49e4fa;
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 0;
  border: none;
  text-transform: uppercase;
}

.banner-content .form-wrap .btn-info {
  font-size: 14px;
}

@media (max-width: 960px) {
  .banner-content .form-cols {
    margin-bottom: 30px;
  }
  .banner-content .form-cols:last-child {
    margin-bottom: 0;
  }
}

.primary-btn {
  background: #fff;
  border: 1px solid transparent;
  color: #222;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 50px;
}

.primary-btn:hover {
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
}

.popular-post-area .owl-dots {
  text-align: center;
  bottom: 5px;
  margin-top: 20px;
  width: 100%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

.popular-post-area .owl-dot {
  height: 10px;
  width: 10px;
  display: inline-block;
  background: rgba(127, 127, 127, 0.5);
  margin-left: 5px;
  margin-right: 5px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.popular-post-area .owl-dot.active {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background: #49e4fa;
}

@media (max-width: 960px) {
  .post-list {
    margin-bottom: 50px;
  }
}

.single-popular-post {
  background-color: #fff;
  padding: 20px;
}

.single-popular-post .details {
  margin-left: 40px;
}

.single-popular-post .details p {
  margin-bottom: 0;
}

.single-popular-post h4 {
  color: #222;
  text-transform: capitalize;
}

.single-popular-post h6 {
  /*padding: 10px 0;*/
  color: #93c6db;
}

.single-popular-post .thumb {
  display: inline-block;
}

.single-popular-post .thumb img {
  margin-top: 10px;
  margin-left: 5px;
}

.single-popular-post .btns {
  background-color: #49e4fa;
  color: #fff;
  font-size: 12px;
  position: absolute;
  bottom: 22px;
  font-weight: 400;
  padding: 9px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-popular-post .btns:hover {
  background-color: #1e2235;
  color: #49e4fa;
}

.features-area {
  margin-top: -20px;
}

.single-feature {
  text-align: center;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 40px 0px #f4e70024;
  padding: 25px 0;
}

.single-feature p {
  margin-bottom: 0;
}

.single-feature h4 {
  padding-bottom: 15px;
}

@media (max-width: 960px) {
  .single-feature {
    margin-bottom: 30px;
  }
}

.single-fcat {
  text-align: center;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 0px 40px 0px rgba(132, 144, 255, 0.2);
  padding: 10px 0;
  border: 1px solid transparent;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-fcat p {
  margin-top: 15px;
  margin-bottom: 0;
  color: #222;
}

.single-fcat:hover {
  border: 1px solid #49e4fa;
}

@media (max-width: 960px) {
  .single-fcat {
    margin-bottom: 30px;
  }
}

.post-list .cat-list {
  text-align: right;
  margin-bottom: 20px;
}

.post-list .cat-list li {
  text-align: center;
  margin-right: 10px;
  width: 100px;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #eee;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  padding: 5px 10px;
}

.post-list .cat-list li a {
  text-transform: uppercase;
  font-weight: 600;
  color: #222;
}

.post-list .cat-list li:hover {
  background-color: #49e4fa;
}

.post-list .cat-list li:hover a {
  color: #fff;
}

@media (max-width: 414px) {
  .post-list .cat-list {
    text-align: left;
  }
  .post-list .cat-list li {
    margin-bottom: 10px;
    font-size: 10px;
  }
}

.post-list .single-post {
  padding: 30px;
  background-color: #f9f9ff;
  margin-bottom: 30px;
}

.post-list .single-post h6 {
  margin-top: 10px;
  color: #222;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 15px;
}

@media (max-width: 414px) {
  .post-list .single-post h6 {
    font-size: 10px;
  }
}

.post-list .single-post h5 {
  color: #222;
  font-weight: 300;
  margin-bottom: 15px;
}

.post-list .single-post .address {
  color: #222;
  margin-bottom: 15px;
}

.post-list .single-post .btns li {
  display: inline-block;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 10px 15px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.post-list .single-post .btns li i,
.post-list .single-post .btns li a {
  text-transform: uppercase;
  font-weight: 500;
  color: #222;
}

.post-list .single-post .btns li:hover {
  background-color: #49e4fa;
}

.post-list .single-post .btns li:hover a,
.post-list .single-post .btns li:hover i {
  color: #fff;
}

@media (max-width: 414px) {
  .post-list .single-post .btns li {
    margin-bottom: 5px;
  }
}

.post-list .single-post .thumb .tags {
  margin-top: 30px;
}

.post-list .single-post .thumb .tags li {
  margin-bottom: 5px;
  display: inline-block;
  background: #fff;
  border: 1px solid #eee;
  padding: 6px 15px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.post-list .single-post .thumb .tags li a {
  color: #777777;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.post-list .single-post .thumb .tags li:hover {
  background-color: #49e4fa;
}

.post-list .single-post .thumb .tags li:hover a {
  color: #fff;
}

@media (max-width: 736px) {
  .post-list h4 {
    font-size: 16px;
  }
  .post-list .btns a {
    font-size: 10px;
  }
}

@media (max-width: 414px) {
  .post-list .single-post.flex-row {
    flex-direction: column !important;
    display: inline-block !important;
  }
  .post-list .title.flex-row {
    flex-direction: column !important;
    display: inline-block !important;
  }
  .post-list .details {
    margin-top: 30px;
  }
}

.post-list .loadmore-btn {
  text-align: center;
  background-color: #49e4fa;
  color: #fff;
  padding: 8px 15px;
  margin-top: 60px;
  max-width: 200px;
}

.sidebar .owl-carousel .owl-item img {
  width: auto !important;
}

.sidebar .owl-dots {
  text-align: center;
  bottom: 5px;
  margin-top: 20px;
  width: 100%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

.sidebar .owl-dot {
  height: 10px;
  width: 10px;
  display: inline-block;
  background: rgba(127, 127, 127, 0.5);
  margin-left: 5px;
  margin-right: 5px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.sidebar .owl-dot.active {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background: #49e4fa;
}

.sidebar .single-slidebar {
  background-color: #f9f9ff;
  padding: 30px 20px;
  margin-bottom: 30px;
}

.sidebar .single-slidebar h4 {
  margin-bottom: 20px;
}

.sidebar .single-slidebar .cat-list li {
  padding: 0px 10px;
  background-color: #fff;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.sidebar .single-slidebar .cat-list li:hover a {
  color: #fff;
}

.sidebar .single-slidebar .cat-list p {
  margin-bottom: 0;
}

.sidebar .single-slidebar .cat-list a {
  color: #777;
  padding: 10px;
  margin-bottom: 10px;
}

.sidebar .single-rated img {
  margin-bottom: 20px;
}

.sidebar .single-rated h4 {
  margin-bottom: 8px;
}

.sidebar .single-rated h6 {
  font-weight: 300;
  margin-bottom: 10px;
}

.sidebar .single-rated h5 {
  font-weight: 300;
  margin-bottom: 5px;
}

.sidebar .single-rated .address {
  color: #222;
  margin-bottom: 8px;
}

.sidebar .single-rated .btns {
  background-color: #49e4fa;
  color: #fff;
  border: 1px solid transparent;
  display: inline-block;
  margin-top: 10px;
  padding: 10px 25px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.sidebar .single-rated .btns:hover {
  background-color: transparent;
  border-color: #49e4fa;
  color: #49e4fa;
}

.sidebar .single-blog {
  background-size: cover !important;
  padding: 0px 20px;
  margin-bottom: 30px;
}

.sidebar .single-blog:last-child {
  margin-bottom: 0px;
}

.sidebar .single-blog h4 {
  color: #fff;
  padding-top: 20px;
}

.sidebar .single-blog .meta p {
  color: #fff;
}

.callto-action-area .primary-btn {
  margin: 10px;
  text-transform: capitalize;
  border-radius: 0;
  background-color: #49e4fa;
  color: #fff;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.callto-action-area .primary-btn:hover {
  background-color: #ad9aff;
  color: #fff;
  border-color: transparent;
}

.callto-action-area .overlay-bg {
  background: rgba(4, 9, 30, 0.6);
}

.single-price {
  text-align: center;
  border: 1px solid #eeeeee;
}

.single-price .price-top {
  background-color: #fbfcff;
  border-bottom: 1px solid #eeeeee;
  padding: 30px 0px;
}

.single-price .price-top h4 {
  font-weight: 600;
}

.single-price .price-bottom {
  background-color: #f9f9ff;
  margin: 0 45px 45px 45px;
  padding: 35px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-price .price-bottom h1 {
  font-size: 60px;
  font-weight: 300;
}

.single-price .price-bottom .price {
  font-size: 25px;
  margin-top: 10px;
  color: #222;
}

.single-price .price-bottom .time {
  font-size: 12px;
  text-align: left;
  margin-top: 15px;
  margin-left: 10px;
}

.single-price .price-bottom .primary-btn {
  border-radius: 0;
  margin-top: 20px;
  background: #49e4fa;
  color: #fff;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-price .price-bottom .primary-btn:hover {
  border: 1px solid transparent;
}

@media (max-width: 1280px) {
  .single-price .price-bottom {
    margin: 0;
  }
}

@media (max-width: 1024px) {
  .single-price .price-bottom .primary-btn {
    padding-left: 22px;
    padding-right: 22px;
  }
}

.single-price p {
  padding: 30px 0px;
}

.single-price .lists {
  padding: 40px 0 20px 0;
}

.single-price .lists li {
  margin-bottom: 15px;
}

.single-price:hover {
  cursor: pointer;
}

.single-price:hover .price-bottom h1,
.single-price:hover .price-bottom .price,
.single-price:hover .price-bottom .time {
  color: #fff;
}

@media (max-width: 960px) {
  .single-price {
    margin-bottom: 50px;
  }
}

.download-area {
  background-color: #f9f9ff;
}

@media (max-width: 960px) {
  .download-left {
    margin-bottom: 50px;
  }
}

.download-right {
  padding-left: 65px;
}

.download-right .subs {
  padding: 20px 0;
}

@media (max-width: 1024px) {
  .download-right .flex-row {
    flex-direction: column !important;
    display: inline-block !important;
  }
}

@media (max-width: 960px) {
  .download-right {
    padding-left: 15px;
  }
}

.buttons {
  background: #fff;
  display: flex;
  padding: 20px 30px 0px 30px;
  margin-right: 20px;
  border: 1px solid #eee;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background-color: #fff;
  color: #222;
}

.buttons i {
  font-size: 40px;
  padding-right: 20px;
  color: #49e4fa;
}

.buttons:hover {
  cursor: pointer;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.1);
  background: #49e4fa;
  color: #fff;
}

.buttons:hover i,
.buttons:hover a {
  color: #fff !important;
}

.buttons a {
  color: #222;
}

.buttons p span {
  font-size: 24px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .buttons {
    margin-bottom: 30px;
  }
}

.testimonial-area .owl-carousel .owl-item img {
  width: auto !important;
}

.testimonial-area .owl-dots {
  text-align: center;
  bottom: 5px;
  margin-top: 20px;
  width: 100%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}

.testimonial-area .owl-dot {
  height: 10px;
  width: 10px;
  display: inline-block;
  background: rgba(127, 127, 127, 0.5);
  margin-left: 5px;
  margin-right: 5px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.testimonial-area .owl-dot.active {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background: #49e4fa;
}

.single-review .title {
  margin: 20px 0;
}

.single-review .star {
  margin-left: 20px;
}

.single-review .star .checked {
  color: orange;
}

@media (max-width: 588px) {
  .single-review {
    padding: 15px;
  }
}

.footer-area {
  padding-top: 100px;
  background-color: #222222;
}

.footer-area .footer-nav li {
  margin-top: 8px;
}

.footer-area .footer-nav li a {
  color: #fff;
}

.footer-area .footer-nav li a:hover {
  color: #49e4fa;
}

.footer-area .primary-btn {
  background-color: #49e4fa;
  line-height: 42px;
  padding-left: 30px;
  padding-right: 60px;
  border-radius: 25px;
  border: none;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
}

.footer-area .primary-btn:focus {
  outline: none;
}

.footer-area .primary-btn span {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  right: 30px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.footer-area .primary-btn:hover {
  background-color: #49e4fa;
  box-shadow: none;
  color: #fff;
}

.footer-area .primary-btn:hover span {
  color: #fff;
  right: 20px;
}

.footer-area .primary-btn.white {
  border: 1px solid #fff;
  color: #fff;
}

.footer-area .primary-btn.white span {
  color: #fff;
}

.footer-area .primary-btn.white:hover {
  background: #fff;
  color: #49e4fa;
}

.footer-area .primary-btn.white:hover span {
  color: #49e4fa;
}

.footer-area h6 {
  color: #fff;
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 600;
}

.copy-right-text i,
.copy-right-text a {
  color: #49e4fa;
}

.instafeed {
  margin: -5px;
}

.instafeed li {
  overflow: hidden;
  width: 25%;
}

.instafeed li img {
  margin: 5px;
}

.footer-social {
  text-align: right;
}

.footer-social a {
  background: #111111;
  width: 20px;
  width: 40px;
  display: inline-table;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.footer-social a:hover {
  background-color: #49e4fa;
}

.footer-social a:hover i {
  color: #fff;
}

.footer-social i {
  color: #cccccc;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

@media (max-width: 991.98px) {
  .footer-social {
    text-align: left;
    margin-top: 20px;
  }
}

.single-footer-widget {
  color: #fff;
}

.single-footer-widget input {
  line-height: 38px;
  border: none;
  background: #fff;
  font-weight: 300;
  border-radius: 20px;
  color: #777;
  padding-left: 20px;
  width: 100%;
}

.single-footer-widget .bb-btn {
  background-color: #49e4fa;
  color: #fff;
  font-weight: 300;
  border-radius: 0;
  z-index: 9999;
  cursor: pointer;
}

@media (max-width: 960px) {
  .single-footer-widget .nw-btn {
    margin-top: 20px;
  }
  .single-footer-widget .newsletter {
    padding-bottom: 40px;
  }
}

.single-footer-widget .info {
  position: absolute;
  margin-top: 122px;
  color: #fff;
  font-size: 12px;
}

.single-footer-widget .info.valid {
  color: green;
}

.single-footer-widget .info.error {
  color: red;
}

.single-footer-widget ::-moz-selection {
  /* Code for Firefox */
  background-color: #49e4fa;
  color: #777777;
}

.single-footer-widget ::selection {
  background-color: #49e4fa;
  color: #777777;
}

.single-footer-widget ::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #777777;
  font-weight: 300;
}

.single-footer-widget :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}

.single-footer-widget ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}

.single-footer-widget :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #777777;
  font-weight: 300;
}

.single-footer-widget ::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #777777;
  font-weight: 300;
}

@media (max-width: 991.98px) {
  .single-footer-widget {
    margin-bottom: 70px;
  }
}

.footer-bottom {
  padding-top: 80px;
}

.footer-text a,
.footer-text i {
  color: #49e4fa;
}

.whole-wrap {
  background-color: #fff;
}

.generic-banner {
  background-color: #49e4fa;
  text-align: center;
}

.generic-banner .height {
  height: 600px;
}

@media (max-width: 767.98px) {
  .generic-banner .height {
    height: 400px;
  }
}

.generic-banner .generic-banner-content h2 {
  line-height: 1.2em;
  margin-bottom: 20px;
}

@media (max-width: 991.98px) {
  .generic-banner .generic-banner-content h2 br {
    display: none;
  }
}

.generic-banner .generic-banner-content p {
  text-align: center;
  font-size: 16px;
}

@media (max-width: 991.98px) {
  .generic-banner .generic-banner-content p br {
    display: none;
  }
}

.generic-content h1 {
  font-weight: 600;
}

.about-generic-area {
  background: #fff;
}

.about-generic-area p {
  margin-bottom: 20px;
}

.white-bg {
  background: #fff;
}

.section-top-border {
  padding: 70px 0;
  border-top: 1px dotted #eee;
}

.switch-wrap {
  margin-bottom: 10px;
}

.switch-wrap p {
  margin: 0;
}

.link-nav {
  margin-top: 10px;
}

.about-content {
  padding: 150px 0px;
  text-align: center;
}

.about-content h1 {
  font-size: 48px;
  font-weight: 300;
}

.about-content a {
  color: #fff;
  font-weight: 300;
  font-size: 14px;
}

.about-content .lnr {
  margin: 0px 10px;
  font-weight: 600;
}

.feature-area {
  background-color: #222;
}

.feat-img img {
  width: 100%;
}

.feat-txt {
  padding: 0px 70px;
}

.feat-txt h6 {
  font-weight: 100;
  letter-spacing: 2px;
}

.feat-txt h1 {
  padding: 15px 0;
}

@media (max-width: 1280px) {
  .feat-txt {
    padding: 0px 12px;
  }
  .feat-txt h1 {
    font-size: 30px;
  }
}

@media (max-width: 1024px) {
  .feat-txt h6,
  .feat-txt p {
    font-size: 12px;
  }
  .feat-txt p {
    margin: 0;
    padding: 0;
  }
  .feat-txt h1 {
    font-size: 24px;
    padding: 5px 0;
  }
}

@media (max-width: 960px) {
  .feat-txt {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.service-area .header-text {
  text-align: center;
}

.service-area .header-text h1 {
  margin-bottom: 20px;
}

.single-service {
  background-color: #f9f9ff;
  padding: 30px;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-service:hover {
  box-shadow: -14.142px 14.142px 20px 0px rgba(157, 157, 157, 0.5);
  cursor: pointer;
}

.single-service:hover h4,
.single-service:hover p,
.single-service:hover .lnr {
  color: #fff;
}

.single-service p {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-service h4 {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  margin-top: 20px;
  margin-bottom: 20px;
}

.single-service h4 .lnr {
  margin-right: 15px;
}

.team-area .thumb {
  position: relative;
}

.team-area .thumb div {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(129, 104, 255, 0.8);
  color: #fff;
  opacity: 0;
  transition: opacity 0.5s;
}

.team-area .thumb div i {
  color: #fff;
  font-size: 20px;
  padding: 10px;
  z-index: 9999;
}

.team-area .thumb img {
  display: block;
  width: 100%;
}

.team-area .thumb div span {
  display: block;
  position: absolute;
  bottom: 30px;
  left: 20px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
}

.team-area .thumb div p {
  display: block;
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-weight: 100;
}

@media (max-width: 768px) {
  .team-area .thumb div p {
    bottom: -15px;
  }
}

.team-area .thumb:hover div {
  cursor: pointer;
  opacity: 1;
}

.single-title {
  margin-bottom: 20px;
}

.job-experience ul li {
  color: #49e4fa;
  margin-bottom: 30px;
}

.job-experience ul li span {
  color: black;
}

.search-page-top {
  padding: 250px 0px;
}

.search-page-top a,
.search-page-top .lnr {
  color: #fff;
}

.search-page-top .lnr {
  font-weight: 700;
  margin: 0px 10px;
}

.single-price {
  text-align: center;
  border: 1px solid #eeeeee;
}

.single-price .price-top {
  background-color: #fbfcff;
  border-bottom: 1px solid #eeeeee;
  padding: 30px 0px;
}

.single-price .price-top h4 {
  font-weight: 500;
}

.single-price .price-bottom {
  background-color: #f9f9ff;
  margin: 0 45px 45px 45px;
  padding: 35px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-price .price-bottom h1 {
  font-size: 60px;
  font-weight: 300;
}

.single-price .price-bottom .price {
  font-size: 25px;
  margin-top: 10px;
  color: #222;
}

.single-price .price-bottom .time {
  font-size: 12px;
  text-align: left;
  margin-top: 15px;
  margin-left: 10px;
}

.single-price .price-bottom .primary-btn {
  border-radius: 0;
  margin-top: 20px;
  background: #49e4fa;
  color: #fff;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-price .price-bottom .primary-btn:hover {
  border: 1px solid transparent;
}

@media (max-width: 1280px) {
  .single-price .price-bottom {
    margin: 0;
  }
}

@media (max-width: 1024px) {
  .single-price .price-bottom .primary-btn {
    padding-left: 22px;
    padding-right: 22px;
  }
}

.single-price p {
  padding: 30px 0px;
}

.single-price .lists {
  padding: 40px 0 20px 0;
}

.single-price .lists li {
  margin-bottom: 20px;
}

.single-price:hover {
  cursor: pointer;
}

.single-price:hover .price-bottom {
  background-color: #49e4fa;
}

.single-price:hover .price-bottom h1,
.single-price:hover .price-bottom .price,
.single-price:hover .price-bottom .time {
  color: #fff;
}

@media (max-width: 960px) {
  .single-price {
    margin-bottom: 50px;
  }
}

.submit-right,
.submit-left {
  color: #fff;
  text-align: center;
  padding: 50px 30px;
}

.submit-right h4,
.submit-left h4 {
  color: #fff;
}

.submit-right p,
.submit-left p {
  padding: 20px 0;
}

.map-wrap {
  margin-bottom: 120px;
}

.contact-btns {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 40px;
  color: #fff;
  margin-bottom: 30px;
}

.contact-btns:hover {
  color: #fff;
}

.form-area input {
  padding: 15px;
}

.form-area input,
.form-area textarea {
  border-radius: 0;
  font-size: 12px;
}

.form-area textarea {
  height: 180px;
  margin-top: 0px;
}

.form-area .primary-btn {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.form-area .primary-btn:hover {
  border: 1px solid #49e4fa;
  color: #49e4fa !important;
}

/*
################
               Start Blog Home  Page style
################
*/

.blog-banner-area .overlay-bg {
  background: rgba(0, 0, 0, 0.55);
}

.blog-banner-wrap {
  text-align: center;
}

.blog-post-list .single-post {
  background: transparent;
  padding: 0px 30px;
}

.single-post {
  margin-bottom: 30px;
}

.single-post .tags {
  margin-top: 40px;
}

.single-post .tags li {
  display: inline-block;
}

.single-post .tags li a {
  color: #222;
}

.single-post .tags li:hover a {
  color: #49e4fa;
}

.single-post h1 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.single-post .title h4 {
  margin-bottom: 10px;
}

.single-post .comment-wrap ul li,
.single-post .social-wrap ul li {
  display: inline-block;
  margin-right: 15px;
}

@media (max-width: 414px) {
  .single-post .comment-wrap,
  .single-post .social-wrap {
    margin-top: 10px;
  }
}

.single-post .comment-wrap ul li a {
  color: #777777;
}

.single-post .social-wrap ul {
  text-align: right;
}

.single-post .social-wrap ul li a i {
  color: #777777;
}

.single-post .social-wrap ul li a i:hover {
  color: #222;
}

@media (max-width: 768px) {
  .single-post .social-wrap ul {
    text-align: left;
  }
}

.single-widget {
  border: 1px solid #eee;
  padding: 40px 30px;
  margin-bottom: 30px;
}

.single-widget .title {
  font-weight: 600;
  margin-bottom: 30px;
}

.search-widget i {
  color: #49e4fa;
}

.search-widget form.example {
  border: 1px solid #eee;
}

.search-widget form.example input[type="text"] {
  padding: 10px;
  font-size: 14px;
  border: none;
  float: left;
  width: 80%;
  background: #eee;
}

.search-widget form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #eee;
  color: white;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-widget form.example::after {
  content: "";
  clear: both;
  display: table;
}

.protfolio-widget {
  text-align: center;
}

.protfolio-widget h4 {
  padding: 20px 0;
}

.protfolio-widget ul li {
  padding: 15px;
  display: inline-block;
}

.protfolio-widget ul li a i {
  color: #222;
}

.protfolio-widget ul li a i:hover {
  color: #49e4fa;
}

.category-widget ul li {
  border-bottom: 1px solid #eee;
  padding: 10px 20px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.category-widget ul li h6 {
  font-weight: 300;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.category-widget ul li span {
  color: #222;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.category-widget ul li:hover {
  border-color: #49e4fa;
}

.category-widget ul li:hover h6,
.category-widget ul li:hover span {
  color: #49e4fa;
}

.tags-widget ul li {
  display: inline-block;
  background: #fff;
  border: 1px solid #eee;
  padding: 8px 10px;
  margin-bottom: 8px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.tags-widget ul li a {
  font-weight: 300;
  color: #222;
}

.tags-widget ul li:hover {
  background-color: #49e4fa;
}

.tags-widget ul li:hover a {
  color: #fff;
}

.recent-posts-widget .single-recent-post .recent-details {
  margin-left: 20px;
}

.recent-posts-widget .single-recent-post .recent-details h4 {
  line-height: 1.5em !important;
  font-size: 14px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.recent-posts-widget .single-recent-post .recent-details p {
  margin-top: 10px;
}

.recent-posts-widget .single-recent-post:hover h4 {
  color: #49e4fa;
}

@media (max-width: 960px) {
  .recent-posts-widget .single-recent-post {
    margin-bottom: 20px;
  }
}

/*
################
               End Blog Home  Page style
################
*/
/*
################
               Start Blog Details  Page style
################
*/
.nav-area {
  border-bottom: 1px solid #eee;
}

.nav-area a {
  color: #222;
}

.nav-area .nav-left .thumb {
  padding-right: 20px;
}

.nav-area .nav-right {
  text-align: right;
}

.nav-area .nav-right .thumb {
  padding-left: 20px;
}

@media (max-width: 768px) {
  .nav-area .post-details h4 {
    font-size: 14px;
  }
}

@media (max-width: 466px) {
  .nav-area .nav-right {
    margin-top: 50px;
  }
}

.comment-sec-area {
  border-bottom: 1px solid #eee;
  padding-bottom: 50px;
}

.comment-sec-area a {
  color: #222;
}

.comment-sec-area .comment-list {
  padding-bottom: 30px;
}

.comment-sec-area .comment-list.left-padding {
  padding-left: 25px;
}

.comment-sec-area .thumb {
  margin-right: 20px;
}

.comment-sec-area .date {
  font-size: 13px;
  color: #cccccc;
}

.comment-sec-area .comment {
  color: #777777;
}

.comment-sec-area .btn-reply {
  background-color: #222;
  color: #fff;
  border: 1px solid #222;
  padding: 8px 30px;
  display: block;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.comment-sec-area .btn-reply:hover {
  background-color: transparent;
  color: #222;
}

.commentform-area {
  padding-bottom: 100px;
}

.commentform-area h5 {
  font-weight: 600 !important;
}

.commentform-area .form-control {
  border-radius: 0;
  font-size: 14px;
  font-weight: 400;
}

.commentform-area .primary-btn {
  padding-left: 50px;
  padding-right: 50px;
  background-color: #49e4fa !important;
  border: 1px solid transparent;
  color: #fff;
}

.commentform-area .primary-btn:hover {
  border-color: #49e4fa !important;
}

.commentform-area textarea {
  height: 90%;
}

.commentform-area .form-control {
  border: none;
  background: #f9f9ff;
}

/*
################
               End Blog Details  Page style
################
*/

/* fin de comentarios */
</style>
