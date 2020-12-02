import grid from "./grid.js";
import navbar from "./navbar.js";
import like from "./like.js";
import slider from './slider.js';
import slidershow from'./slider.vue';

new Vue({

  el:'#app',

  components: {
    grid,
    navbar,
    like,
    slider,
    slidershow,
 },

  data(){
    
  return{

    images:[
      '../img/archi.jpg',
      '../img/cactus.jpg',
      '../img/car.jpg',
      '../img/flamant.jpg',
      '../img/green.jpg',
      '../img/maison.jpg',
      '../img/mer.jpg',
      '../img/orange.jpg',
      '../img/peinture_rose.jpg',
    ]
    
  }

  },

})
