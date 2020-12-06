import grid from "./grid.js";
import navbar from "./navbar.js";
import foot from "./footer.js";
import like from "./like.js";
import slider from './slider.js';
import comments from './comments.js'

new Vue({

  el:'#app',

  components: {
    grid,
    navbar,
    foot,
    like,
    slider,
    comments,
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

