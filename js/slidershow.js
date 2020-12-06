export default Vue.component('slidershow', {

    template:`
        <div class="slidershow">

            <img v-for="image in images" :src="image" class="slidershow-item" />

        </div>
    `,

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

    methods: {
        
    }

})
