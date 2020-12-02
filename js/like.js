export default Vue.component("like", {
    template:
    `
    <div class="btn>
    <i class="fas fa-heart fa-2x" v-bind:class="currentClass" v-on:click = "like"></i>
    <p v-bind:class="currentClass">{{ counter }} likes</p>
    </div>  
    `,

    data(){
        return{
            counter : 345,
            isLiked : false,
            currentClass : "isNotLiked",
        }
    },

    methods: {
        like(){
            if (this.isLiked === false){
            this.counter += 1;
            this.currentClass = "liked";
            this.isLiked = true;
            } else if(this.isLiked === true){
                this.counter -= 1;
                this.currentClass = "isNotLiked";
                this.isLiked = false
            }

        }

    }

})