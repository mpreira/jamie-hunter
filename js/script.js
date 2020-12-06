import grid from "./grid.js";
import navbar from "./navbar.js";
import foot from "./footer.js";
import like from "./like.js";
import comments from './comments.js';
//import slidershow from './slidershow.js';
//import slidershow from'./slider.vue';

new Vue({

  el:'#app',

  components: {
    comments,
    grid,
    navbar,
    foot,
    like,
    //slider,
    //slidershow,
 },

  data(){

  return{

  }

  },

})
